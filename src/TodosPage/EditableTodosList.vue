<template>
    <div>
        <div style="position: absolute; transform: translate(400px, -30px)">
            <p-check color="danger-o" tabindex="-1"
                     v-model="editableRating">
                with rating
            </p-check>
        </div>

        <ul>
            <li v-for="(todoItem, index) in unCheckedItems" :key="todoItem.id + ' ' + index">
                <p-check color="danger-o" tabindex="-1"
                         v-model="todoItem.isChecked"
                         v-on:change="update()">
                    <i slot="extra" class="icon mdi mdi-close"></i>
                </p-check>

                <input type="text" v-model="todoItem.text" tabindex="0"
                       placeholder="empty"
                       @paste="onPaste(todoItem, $event)"
                       v-on:keyup.enter="addEmptyAfterThis(todoItem, $event)"
                       v-on:keyup.delete="deleteEmpty(todoItem, $event)"
                       v-on:keydown.up="focusUp(todoItem, $event)"
                       v-on:keydown.down="focusDown(todoItem, $event)"
                       v-on:keyup="update()">

                <star-rating v-model="todoItem.rating"
                             v-if="editableRating"
                             v-on:rating-selected="update()"
                             :star-size="10" :show-rating="false"></star-rating>
                <span v-if="!editableRating" title="rating">
                    {{ todoItem.rating }}
                </span>

                <div>&nbsp;</div>
                <font-awesome-icon icon="times-circle" v-on:click="remove(todoItem)" style="cursor: pointer" />
                <div>&nbsp;</div>
                <font-awesome-icon icon="arrow-circle-up" v-on:click="moveTop(todoItem)" style="cursor: pointer"
                                   v-bind:style="{ cursor: 'pointer', visibility: index ? 'visible' : 'hidden' }" />
                <div>&nbsp;</div>

                <star-rating v-model="todoItem.effort"
                             v-if="editableRating"
                             active-color="red"
                             v-on:rating-selected="update()"
                             :star-size="10" :show-rating="false"></star-rating>

                <span v-if="!editableRating" title="effort">
                    {{ todoItem.effort }}
                </span>
            </li>
            <li>
                <input type="text" placeholder="Type to add new item"
                       v-model="newItemValue"
                       v-on:keyup.enter="addEmptyAfterThis()">
            </li>

            <h5 v-if="checkedItems.length">
                <br>
                [{{ checkedItems.length }} /
                {{ unCheckedItems.length }}]
            </h5>

            <li v-for="todoItem in checkedItems" :key="todoItem.id">
                <p-check class="p-default p-thick p-pulse"
                         v-model="todoItem.isChecked"
                         v-on:change="update()" />

                <div style="text-decoration:  line-through; text-align: left;   width: 250px;
    overflow: hidden;">
                    {{todoItem.text}}
                </div>

                <input type="submit" value="X" v-on:click="remove(todoItem)">
            </li>
        </ul>

        <br>

        <button v-on:click="removeEmpty()" v-if="nonEmpty.length !== items.length">
            <font-awesome-icon icon="trash-alt" />
            empty
        </button>

        <button v-on:click="unselectAll()" v-if="checkedItems.length">
            unselect all
        </button>
    </div>
</template>

<script>
  import StarRating from 'vue-star-rating'

  const n = num => isNaN(num - 0) ? 0 : num - 0;

  const getItems = (text = '') => `${ text }`
    .split('\n')
    .map(t => t.trimLeft())
    .filter(t => t.length)
    .map(t => t.startsWith('[') ? t : `[000] ${ t }`)
    .map((t, id) => ({
      isChecked: n(t[1]) === 1,
      rating: n(t[2]),
      effort: n(t[3]),
      text: t.substr(6, t.length),
      id
    }));

  const getText = items => items
    .map(({ isChecked, text, rating = 0, effort = 0 }) => (
      `[${ isChecked ? 1 : 0 }${ rating }${ effort }] ${ text }`
    )).join('\n');

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
    data: () => ({ items: [], presavedText: '', newItemValue: '', editableRating: true }),
    components: {
      StarRating
    },
    computed: {
      checkedItems() {
        return this.items.filter(({ isChecked }) => isChecked)
      },
      unCheckedItems() {
        return this.items.filter(({ isChecked }) => !isChecked)
      },
      nonEmpty() {
        return this.items.filter(({ text }) => text.trim())
      }
    },
    methods: {
      update() {
        this.presavedText = getText(this.items);
        this.$emit('input', this.presavedText);
      },
      onPaste(item, $event) {
        const text = $event.clipboardData.getData('Text');
        if (text.includes('\n')) {
          this.items.splice(this.items.indexOf(item) + 1, 0, ...getItems(text));

          this.update();
          $event.preventDefault();
        }
      },
      removeEmpty() {
        this.items = this.nonEmpty
        this.update();
      },
      unselectAll() {
        this.checkedItems.forEach(item => {
          item.isChecked = false;
        });
        this.update();
      },
      remove(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.update();
      },
      deleteEmpty(item, e){
        if (!item.text.length) {
          const prev = e.target.parentElement.previousElementSibling;
          if (prev) {
            prev.children[1].focus();
          }
          this.remove(item);
        }
      },

      focusUp(item, e){
          const prev = e.target.parentElement.previousElementSibling;
          if (prev) {
            prev.children[1].focus();
          }
      },
      focusDown(item, e){
        const next = e.target.parentElement.nextElementSibling;
        if (next) {
          next.children[1].focus();
        }
      },
      moveTop(item) {
        const idx = this.items.indexOf(item)
        this.items[idx] = this.items[idx - 1];
        this.items[idx - 1] = item;
        this.items = this.items.slice();
        this.update();
      },
      addEmptyAfterThis(item, e) {
        let idx = this.items.indexOf(item) + 1;
        this.items.splice(idx ? idx : this.items.length,
          0,
          { text: this.newItemValue || '' })
        this.newItemValue = '';
        if (e) {
          setTimeout(() => {
            e.target.parentElement.nextElementSibling.children[1].focus();
          }, 10);
        }

        this.update();
      }
    }
  }
</script>

<style>
    li .pretty {
        margin: 0;
        transform: scale(0.85) translate(1px, 7px);
    }
</style>

<style scoped>
    input {
        cursor: pointer;
        background: transparent;
        display: inline-block;
    }

    [type=text] {
        width: 250px;
        border-color: transparent;
    }

    input[type=checkbox] {
        vertical-align: middle;
    }

    li {
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        justify-content: space-between;
        vertical-align: center;
    }

    h4 textarea {
        font-size: inherit;
        font-weight: inherit;
        width: 100%;
        resize: none;
    }

    [type=submit] {
        border-radius: 10px;
        border: 1px solid #00000096;
        width: 16px;
        height: 16px;
        font-size: 6px;
        font-weight: bold;
    }

    [type=submit]:hover {
        color: white;
        background-color: rgba(72, 72, 72, 0.59);
    }
</style>