import HttpStatus from 'http-status';
import RepositoryController from './controllers/repository';

export default (app) => {
  const repository = new RepositoryController();

  app.get('/api', repository.create);

  app.get('/api/repositories', repository.get);

  app.get('/api/search', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });
};