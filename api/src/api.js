import RepositoryController from './controllers/repository';

export default (app) => {
  const repository = new RepositoryController();

  app
    .get('/api', repository.get)
    .post('/api', repository.create);


  app
    .post('/api/search', repository.search);

  app
    .get('/api/tag', repository.tag)
    .post('/api/tag', repository.updateTag);
};