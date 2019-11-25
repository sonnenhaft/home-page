import ReactResource from 'react-resource';

export const TodosResource = new ReactResource(
  `https://api.mongolab.com/api/1/databases/sonnenhaft2/collections/test-collection2/{:id}?apiKey=PGjxbP3NQzS2xXIe8PgSbJBxVzaPlXGe`,
  { id: ':id' },
  {
    update: {
      transformRequest: data => {
        delete data.id;
        return data;
      },
    },
  });
