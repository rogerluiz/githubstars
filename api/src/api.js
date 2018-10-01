import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const GITHUB_API = 'https://api.github.com/users';

export default (app) => {
  app.get('/api', (req, res) => {
    const username = 'rogerluiz';// req.body.username

    const options = {
      params: {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
      },
      headers: {
        'Accept': 'application/vnd.github.v3.star+json',
      },
    };

    axios.get(`${GITHUB_API}/${username}/starred`, options)
      .then((response) => {
        res.json(response.data);
        res.statusCode(204);
      })
      .catch((error) => {
        console.log(error);
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