import dotenv from 'dotenv';
import axios from 'axios';
import Repository from '../models/repository';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const GITHUB_API = 'https://api.github.com/users';

class RepositoryController {

  get(req, res, next) {}

  create(req, res, next) {
    const data = this.getRepositories();
    // salvar todos os tepositorios no banco por username
    
    // const repository = new Repository({
    //   id: item.repo.id,
    //   description: item.repo.description,
    //   url: item.repo.git_url,
    //   language: item.repo.language,
    //   name: item.repo.name
    // });

    // repository.save()
    //   .then(savedRepositorys => res.json(savedRepositorys))
    //   .catch(e => next(e));
  }

  async getRepositories(req, res) {
    const username = req.query.username;

    const options = {
      params: {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
      },
      headers: {
        'Accept': 'application/vnd.github.v3.star+json',
      },
    };

    const response = await axios.get(`${GITHUB_API}/${username}/starred`, options);

    const filtered = response.data.map((item, k) => {
      return {
        id: item.repo.id,
        description: item.repo.description,
        url: item.repo.git_url,
        language: item.repo.language,
        name: item.repo.name
      };
    });

    return filtered;
  }

  delete(req, res, next) {}

  update(req, res, next) {}
}

export default RepositoryController;