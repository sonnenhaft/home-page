<template>
    <div class="todos-layout">
        <div v-if="loading" class="loading">Loading...</div>
        <br />
        <pre v-if="error">{{error}}</pre>

        <div v-for="(todoList, index) in filteredLists" v-bind:key="index"
             class="todo-item">
            <input type="text" placeholder="title"
                   v-model="todoList.name"
                   style="font-weight: bold;width: 100%;border: none;font-size: 15px;background: none"
                   v-on:keyup="update(todoList)" />

            <div style="margin: 8px 0">
                <div v-if="!$route.params.id">
                    <p-check tabindex="-1" class="p-switch p-fill"
                             v-model="todoList.hidden"
                             v-on:change="update(todoList)">
                        Collapsed
                    </p-check>

                    <p-check tabindex="-1" class="p-switch p-fill"
                             v-model="todoList.withTextArea"
                             v-if="!todoList.hidden"
                             v-on:change="update(todoList)">
                        With Editor
                    </p-check>

                    <button v-on:click="remove(todoList)" tabindex="-1">
                        <font-awesome-icon icon="trash-alt" />
                    </button>

                    <button v-on:click="clone(todoList)" tabindex="-1">
                        <font-awesome-icon icon="clone" />
                    </button>

                    <router-link :to="'/todos/' + todoList._id.$oid" tag="a"
                                 v-if="todoList._id && !todoList.hidden">
                        <font-awesome-icon icon="arrow-right" />
                    </router-link>

                    <div style="height: 8px"></div>
                </div>

                <div v-if="$route.params.id">
                    <router-link :to="'/todos/'" tag="a" title="all">
                        <font-awesome-icon icon="arrow-left" />
                    </router-link>

                    <span>&nbsp;</span>

                    <p-check tabindex="-1" class="p-switch p-fill"
                             v-model="todoList.withTextArea"
                             v-if="!todoList.hidden"
                             v-on:change="update(todoList)">
                        With Editor
                    </p-check>
                </div>
            </div>

            <div style="display: flex" v-if="!todoList.hidden">
                <EditableTodosList v-model="todoList.text"
                                   v-on:input="update(todoList)" />

                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

                <textarea
                        v-if="todoList.withTextArea"
                        v-model="todoList.text" placeholder="As text..."
                        v-on:input="update(todoList)" />
            </div>
        </div>

        <div v-if="!$route.params.id" class="todo-item">
            <input type="text" placeholder="Create new TODO list"
                   v-model="newItemValue"
                   v-on:keyup.enter="createTodoList()"
                   style="color: transparent">
        </div>
    </div>
</template>

<script>
  import debounce from 'lodash/debounce';
  import EditableTodosList
    from './EditableTodosList.vue';

  import ReactResource from 'react-resource';

  const TodosResource = new ReactResource(
    `https://api.mongolab.com/api/1/databases/sonnenhaft2/collections/test-collection2/{:id}?apiKey=PGjxbP3NQzS2xXIe8PgSbJBxVzaPlXGe`,
    { id: ':id' },
    {
      update: {
        transformRequest: data => {
          delete data.id;
          return data;
        }
      }
    });

  function setCache(value) {
    localStorage.setItem('todoResourceData', JSON.stringify(value))
  }

  function getCache([]) {
    const data = localStorage.getItem('todoResourceData')
    return data && JSON.parse(data)
  }

  export default {
    components: {
      EditableTodosList
    },

    async created() {
      this.items = getCache([])
      try {
        this.items = await TodosResource.query({})
        setCache(this.items)
        this.error = '';
      } catch (e) {
        this.error = JSON.stringify(e, null, 4);
      }

      this.loading = false;
    },

    data: () => ({
      loading: true,
      items: [],
      error: '',
      newItemValue: '',
      newItemItemValue: ''
    }),

    computed: {
      filteredLists() {
        if (this.$route.params.id) {
          return this.items.filter(item => item._id.$oid === this.$route.params.id);
        } else {
          return this.items;
        }
      }
    },

    methods: {
      async createTodoList(data = { name: this.newItemValue || '', text: '' }) {
        this.loading = true;

        data.withTextArea = false;
        data.collapsed = false;

        this.newItemValue = '';
        this.items.push(data);

        const { _id } = await TodosResource.create(data);
        data._id = _id;

        setCache(this.items)
        this.loading = false;
      },

      clone({ _id, __ob__, ...item }) {
        this.createTodoList(item);
      },

      remove(item) {
        this.items.splice(this.items.indexOf(item), 1);

        setCache(this.items)
        TodosResource.delete({ id: item._id.$oid });
      },

      update: debounce(function(item) {
        setCache(this.items)
        TodosResource.update({ id: item._id.$oid, ...item });
      }, 100)
    }
  }
</script>

<style scoped>
    textarea {
        min-height: 100%;
        min-width: 460px;
        line-height: 20px;
        padding-top: 0;
        background: none;
    }

    .loading {
        position: absolute;
    }

    .todos-layout {
        background-color: #ffffff;
        color: #232527;
        height: 100%;
        padding: 8px;
    }

    .todo-item {
        border-radius: 5px;
        /*background-color: #fdfabd;*/
        padding: 8px;
        margin: 8px;
        display: inline-block;
        border: 1px solid #ebebeb;
        vertical-align: top;
    }

</style>