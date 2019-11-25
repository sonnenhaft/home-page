import ReactResource from 'react-resource';

const mongoLabConfig = {
  url: 'https://api.mongolab.com/api/1/databases',
  collection: 'test-collection2',
  dataBase: 'sonnenhaft2',
  apiKey: 'PGjxbP3NQzS2xXIe8PgSbJBxVzaPlXGe',
}

const {url, collection, dataBase, apiKey} = mongoLabConfig;

const URL = `${url}/${dataBase}/collections/${collection}/{:id}?apiKey=${apiKey}`;

export const TodosResource = new ReactResource(URL, {id: ':id'}, {
  update: {
    transformRequest: data => {
      delete data.id;
      return data;
    },
  },
});
