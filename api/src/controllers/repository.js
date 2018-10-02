import dotenv from 'dotenv';
import HttpStatus from 'http-status';

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
    const data = await getRepositories(CLIENT_ID, CLIENT_SECRET, `${GITHUB_API}/${req.query.username}/starred`);
    
    // Repository.findOne({ name: req.query.username })
    //   .then((err, repositories) => {
    //     console.log(err, repositories);
    //     if (name) {
    //       if (repositories.name === req.query.username) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     } else {
    //       next(err);
    //     }
    //   });


    res.send({
      data: data,
      statusCode: HttpStatus.OK,
    });
    // const repository = new Repository({
    //   name: req.query.username
    // });

    // data.forEach(repo => {
    //   repository.repositories.push(repo);
    // });

    // repository.save()
    //   .then(saved => res.json(saved))
    //   .catch(e => next(e));
  }

  

  delete(req, res, next) {}

  update(req, res, next) {}
}

export default RepositoryController;