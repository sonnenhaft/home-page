<template>
    <div class="todos-layout">
        <div v-if="loading" class="loading">Loading...</div>
        <br/>
        <pre v-if="error">{{error}}</pre>

        <div v-for="(todoList, index) in items" v-bind:key="index" class="todo-item">
            <button
                    v-on:click="remove(index)"
                    tabindex="-1">
                x
            </button>

            <span>
            [{{ todoList.items.filter(({value})=> value).length }} / {{ todoList.items.filter(({checked})=> checked).length }}]
            </span>

            <h4>
                <textarea placeholder="Type to add more"
                          v-model="todoList.name"
                          v-on:keyup="update(index)"></textarea>
            </h4>

            <ul>
                <li v-for="(todoItem, idx) in todoList.items.filter(({checked})=> !checked)" v-bind:key="idx">
                    <div>
                        <input type="checkbox"
                               v-model="todoItem.checked"
                               tabindex="-1"
                               v-on:change="update(index)">

                        <input type="text" placeholder="Type to add more"
                               v-model="todoItem.value"
                               v-on:keyup.enter="createEmptyTodoItem(index, idx, $event)"
                                  v-on:keyup="update(index)"/>
                    </div>

                    <button
                            :disabled="idx === 0"
                            v-on:click="removeTodoItem(index, idx)"
                            tabindex="-1">
                        x
                    </button>
                </li>

                <li v-if="todoList.items.filter(({checked})=> checked).length">
                    <hr style="width: 100%"/>
                </li>

                <li v-for="(todoItem, idx) in todoList.items.filter(({checked})=> checked)" v-bind:key="idx+'u'">
                    <div>
                        <input type="checkbox"
                               v-model="todoItem.checked"
                               tabindex="-1"
                               v-on:change="update(index)">

                        <i style="font-size: 90%; text-decoration: line-through;">
                            {{todoItem.value}}
                        </i>
                    </div>

                    <button
                            :disabled="idx === 0"
                            v-on:click="removeTodoItem(index, idx)"
                            tabindex="-1">
                        x
                    </button>
                </li>
            </ul>

            <div v-on:click="todoList.showPre = !todoList.showPre">show as pre</div>
            <br>
            <pre v-if="todoList.showPre">{{todoList.items.map(({value}) => value).join('\n')}}</pre>

            <div v-on:click="removeEmptyTodoItems(index)">
                remove empty
            </div>
        </div>

        <div>
            <input type="text" placeholder="Type to add new TODO list"
                   v-model="newItemValue"
                   v-on:keyup.enter="createTodoList">
        </div>

        <navigation-menu/>
    </div>
</template>

<script>
  import debounce from 'lodash/debounce';
  import {TodosResource} from './TodosResource';
  import NavigationMenu from '../NavigationMenu.vue'

  function setCache(value){
    localStorage.setItem('todoResourceData', JSON.stringify(value))
  }

  function getCache([]){
    const data = localStorage.getItem('todoResourceData')
    return data && JSON.parse(data)
  }

  export default {
    name: 'todos',
    components: { NavigationMenu },

    async created() {
      this.items = getCache([])
      try {
        this.items = await TodosResource.query({})
        setCache(this.items)
        this.error = '';
      } catch(e) {
        this.error = JSON.stringify(e, null, 4);
      }

      this.loading = false;
    },

    data() {
      return {
        loading: true,
        items: [],
        error: '',
        newItemValue: '',
        newItemItemValue: '',
      }
    },

    methods: {
      async createEmptyTodoItem(index, idx, e) {
        this.items[index].items.splice(idx + 1, 0, {value: ''})
        this.update(index);

        setTimeout(()=>{
          e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].focus()
        }, 0);
      },

      async removeTodoItem(index, idx) {
        this.items[index].items.splice(idx, 1)
        this.update(index);
      },

      async createTodoList() {
        this.loading = true;

        const data = {name: this.newItemValue || '', items: [{}]};
        this.newItemValue = '';
        this.items.push(data);

        this.items[this.items.indexOf(data)] = await TodosResource.create(data);

        setCache(this.items)
        this.loading = false;
      },

      remove(idx) {
        const item = this.items[idx];
        this.items.splice(this.items.indexOf(item), 1);

        setCache(this.items)
        TodosResource.delete({id: item._id.$oid});
      },

      removeEmptyTodoItems(index) {
        const item = this.items[index];
        item.items = item.items.filter(({value}) => value);

        this.update(index);
      },

      update: debounce(function(idx) {
        const item = this.items[idx];

        setCache(this.items)
        TodosResource.update({id: item._id.$oid, ...item});
      }, 200),
    },
  }
</script>

<style scoped src="./TodosPage.css"></style>
