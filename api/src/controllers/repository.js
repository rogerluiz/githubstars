import dotenv from 'dotenv';
import HttpStatus from 'http-status';
import { ObjectId } from 'mongo';

import Repository from '../models/repository';
import { getRepositories } from '../helpers/helper';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const GITHUB_API = 'https://api.github.com/users';

class RepositoryController {
  get(req, res, next) {
    Repository.find({ name: req.query.username })
      .then(data => res.json(data))
      .catch(e => next(e));
  }

  async create(req, res, next) {
    console.log(req.query.username);

    try {
      const data = await getRepositories(CLIENT_ID, CLIENT_SECRET, `${GITHUB_API}/${req.query.username}/starred`);

      Repository.update({
          name: req.query.username
        }, {
          name: req.query.username,
          repositories: [...data]
        }, {
          upsert: true,
          returnNewDocument: true
        })
        .then((result) => {
          res.json(result);
        })
        .catch(e => next(e));
    }
    catch(e) {
      next(e);
    }
  }

  delete(req, res, next) {
    const id = req.query.id;

    Repository.deleteOne({ '_id': ObjectId(id) })
      .then(result => res.json(result))
      .catch(e => next(e));
  }

  update(req, res, next) {
    const id = req.query.id;
    // Repository.updateOne({
    //   name: req.query.username
    // }, {
    //   name: req.query.username,
    //   repositories: [...data]
    // })
    // .then((result) => {
    //   res.json(result);
    // })
    // .catch(e => next(e));
  }
}

export default RepositoryController;