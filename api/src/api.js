import HttpStatus from 'http-status';
import RepositoryController from './controllers/repository';

export default (app) => {
  const repository = new RepositoryController();

  app
    .get('/api', repository.get)
    .post('/api', repository.create);


  app.post('/api/search', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });

  app.post('/api/tag', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });
};