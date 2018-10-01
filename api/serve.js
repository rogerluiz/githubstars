import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import HttpStatus from 'http-status';

import config from './src/config/config';
import datasource from './src/config/datasource';
// import loginRouter from './src/routes/login';

const app = express();

app.config = config;
app.datasource = datasource(app);

app.set('trust proxy', 1);
app.set('port', process.env.PORT || 3001);

app.use(cookieSession({ name: 'session', keys: ['key1'], maxAge: 24 * 60 * 60 * 1000 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front/build'));
}

app.use((req, res, next) => {
  res.set('Access', 'application/vnd.github.v3.star+json');
  next();
});

app.get('/', (req, res) => {
  res.send({
    data: true,
    statusCode: HttpStatus.OK,
  });
});


// loginRouter(app);

export default app;
