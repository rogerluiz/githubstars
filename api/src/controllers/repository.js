import dotenv from 'dotenv';
import HttpStatus from 'http-status';
import mongoose from 'mongoose';
// import { ObjectId } from 'mongo';

import Repository from '../models/repository';
import { getRepositories } from '../helpers/helper';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const GITHUB_API = 'https://api.github.com/users';

class RepositoryController {
  get(req, res, next) {
    Repository.findOne({ name: req.query.username })
    .then(result => res.status(HttpStatus.OK).json(result))
    .catch(e => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      next(e);
    });
  }

  async create(req, res, next) {
    try {
      const data = await getRepositories(CLIENT_ID, CLIENT_SECRET, `${GITHUB_API}/${req.query.username}/starred`);
      const username = req.body.username;
      Repository.update({
          name: username
        }, {
          name: username,
          repositories: [...data]
        }, {
          upsert: true,
          returnNewDocument: true
        })
        .then(result => res.status(HttpStatus.OK).json(result))
        .catch(e => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR);
          next(e);
        });
    }
    catch(e) {
      next(e);
    }
  }

  delete(req, res, next) {
    const id = req.query.id;

    Repository.deleteOne({ '_id': id })
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(e => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        next(e);
      });
  }

  tag(req, res, next) {
    const id = req.body.id;

    res.status(HttpStatus.OK).json({
      id: id
    })
  }

  search(req, res, next) {
    Repository.find({
      'repositories': { $elemMatch: { 'description': new RegExp(req.body.search) } },
    }, { 'repositories.$': 1 })
    // .populate('name repositories')
    .then(result => res.status(HttpStatus.OK).json(result))
    .catch(e => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      next(e);
    });
  }

  update(req, res, next) {
    const id = req.body.id;
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