import express from 'express';
import bodyParser from 'body-parser';
import HttpStatus from 'http-status';

// import config from './src/config/config';
// import datasource from './src/config/datasource';
// import loginRouter from './src/routes/login';
import Api from './src/api';

const app = express();

// app.config = config;
// app.datasource = datasource(app);

app.set('trust proxy', 1);
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front/build'));
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  next();
});

app.get('/', (req, res) => {
  res.send({
    data: true,
    statusCode: HttpStatus.OK,
  });
});

Api(app);
// loginRouter(app);

export default app;
