import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/githubstars', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`we're connected!`);
});

export default mongoose;