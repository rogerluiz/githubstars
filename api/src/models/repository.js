import httpStatus from 'http-status';

import mongoose from '../config/datasource';

const RepositorySchema = mongoose.Schema({
  repoId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  languages: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    default: ''
  }
});


export default mongoose.model('Repository', RepositorySchema);