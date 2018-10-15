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
    Repository.findOne({ name: req.query.username })
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(e => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        next(e);
      });
  }

  async create(req, res, next) {
    try {
      const username = req.body.username;
      const data = await getRepositories(CLIENT_ID, CLIENT_SECRET, `${GITHUB_API}/${username}/starred`);

      Repository.update({
        name: username,
      }, {
        name: username,
        repositories: [...data],
      }, {
        upsert: true,
        returnNewDocument: true,
      })
        .then(result => res.status(HttpStatus.OK).json(result))
        .catch(e => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR);
          next(e);
        });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    const id = req.query.id;

    Repository.deleteOne({ _id: id })
      .then(result => res.status(HttpStatus.OK).json(result))
      .catch(e => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        next(e);
      });
  }

  tag(req, res, next) {
    const id = req.body.id;

    res.status(HttpStatus.OK).json({
      id: id,
    });

    next();
  }

  updateTag(req, res, next) {
    const { id, username, tags } = req.body;

    Repository.updateOne({
        name: username,
        'repositories._id': id
      }, {
        $set: {
          'repositories.$.tags': tags
        }
      })
        .then((result) => {
          res.status(HttpStatus.OK).json(result);
        })
        .catch(e => next(e));
  }

  search(req, res, next) {
    Repository.find({ name: req.body.username })
      .then(result => {
        let newResult = [...result];
        const filtered = newResult[0].repositories.filter((el) => {
          if (el.tags.match(new RegExp(req.body.search)) !== null) {
            return  el;
          }
        });
        
        newResult[0].repositories = filtered;

        res.status(HttpStatus.OK).json(newResult);
      })
      .catch(e => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        next(e);
      });
  }
}

export default RepositoryController;
