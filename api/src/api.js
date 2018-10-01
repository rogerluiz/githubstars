import HttpStatus from 'http-status';

export default (app) => {
  app.get('/api', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });

  app.get('/api/repositories', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });

  app.get('/api/search', (req, res) => {
    res.send({
      data: true,
      statusCode: HttpStatus.OK,
    });
  });
};