import httpStatus from 'http-status';
import mongoose from '../config/datasource';

const RepositorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  repositories: [
    {
      id: {
        type: Number
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      url: {
        type: String
      },
      language: {
        type: String
      },
      tags: {
        type: String,
        default: ''
      }
    }
  ]
});


export default mongoose.model('Repository', RepositorySchema);