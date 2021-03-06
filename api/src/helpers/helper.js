import axios from 'axios';

const getRepositories = async (id, secret, url) => {
  const options = {
    params: {
      client_id: id,
      client_secret: secret,
    },
    headers: {
      Accept: 'application/vnd.github.v3.star+json',
    },
  };

  const response = await axios.get(url, options);

  const filtered = response.data.map((item) => {
    const newURL = item.repo.git_url.replace('git:', 'https:').replace('.git', '');
    return {
      gitId: item.repo.id,
      description: item.repo.description,
      url: newURL,
      language: item.repo.language,
      name: item.repo.name,
    }
  });

  return filtered;
};

export {
  getRepositories,
};
