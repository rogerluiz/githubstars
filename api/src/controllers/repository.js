import Repository from '../models/repository';

class RepositoryController {

  get(req, res, next) {}

  create(req, res, next) {
    const repository = new Repository({
      description: req.body.description
    });

    repository.save()
      .then(savedRepositorys => res.json(savedRepositorys))
      .catch(e => next(e));
  }

  delete(req, res, next) {}

  update(req, res, next) {}
}

export default RepositoryController;