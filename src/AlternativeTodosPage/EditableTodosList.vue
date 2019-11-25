<template>
    <ul>
        <li v-for="(todoItem, index) in items" :key="index">
            <!--TODO: add cool styling - search in internet-->
            <input type="checkbox" v-model="todoItem.isChecked"
                   tabindex="-1"
                   v-on:change="update()">

            <input type="text" v-model="todoItem.text" tabindex="0"
                   @paste="onPaste(index, $event)"
                   v-on:keyup.enter="addItem(index, $event)"
                   v-on:keyup="update()">

            <input type="submit" value="X" v-on:click="remove(index)">
        </li>
        <li>
            <input type="checkbox" tabindex="-1" style="visibility: hidden">

            <input type="text" placeholder="Type to add new TODO list"
                   v-on:keydown="addItem(items.length)">
        </li>
    </ul>
</template>

<script>
  const getItems = (text = '') => `${ text }`
    .split('\n')
    .map(t => t.trimLeft())
    .filter(t => t.length)
    .map(t => t.replace('[]', '[ ]'))
    .map(t => (t.startsWith('[ ] ') || t.startsWith('[x] ')) ? t : `[ ] ${ t }`)
    .map(t => ({
      isChecked: t.slice(0, 3) === '[x]',
      text: t.substr(4, t.length)
    }));

  const getText = items => items
    .map(({ isChecked, text }) => {
      const checked = `[${ isChecked ? 'x' : ' ' }]`;
      return `${ checked } ${ text }`
    }).join('\n');

  import debounce from 'lodash/debounce';

  export default {
    props: ['value'],

    created() {
      this.presavedText = this.value;
      this.items = getItems(this.value)

      this.$watch('value', () => {
        if (this.presavedText !== this.value) {
          this.presavedText = this.value;
          this.items = getItems(this.value)
        }
      });
    },
    data: () => ({ items: [], presavedText: '' }),
    methods: {
      // update: debounce(function() {
      //   this.$emit('input', getText(this.items));
      // }, 100),
      update() {
        this.presavedText = getText(this.items);
        this.$emit('input', this.presavedText);
      },
      onPaste(index, $event) {
        const text = $event.clipboardData.getData('Text');
        if (text.includes('\n')) {
          this.items.splice(index + 1, 0, ...getItems(text));

          this.update();
          $event.preventDefault();
        }
      },
      remove(index) {
        this.items.splice(index, 1);
        this.update();
      },
      addItem(index, e) {
        this.items.splice(index + 1, 0, { text: '' })
        if (e) {
          setTimeout(() => {
            e.target.parentElement.nextElementSibling.children[1].focus();
          }, 0);
        }

        this.update();
      }
    }
  }
</script>

<style scoped src="./EditableTodosList.css"></style>