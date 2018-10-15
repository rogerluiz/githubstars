
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const mongoDB = 'mongodb://localhost/my_test_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

import Repository from '../src/models/repository';
import mockJson from './mockup';

// test('Deve retornar um objeto', done => {
//   Repository.findOne({ name: "rogerluiz" })
//     .then(data => {
//       expect(data).toBeInstanceOf(Object);
//       done();
//     });
// });

describe('API test', () => {
  beforeAll(async () => {
    await Repository.remove({});
  });

  afterEach(async () => {
    await Repository.remove({});
  });

  afterAll( async () => {
    await mongoose.connection.close();
  });

  test('has a module', () => {
    expect(Repository).toBeDefined();
  });

  describe('get username', () => {
    it('get username repository', async () => {
      const repo = new Repository(mockJson);
      await repo.save();

      const foundUser = await Repository.findOne({ name: 'rogerluiz' });
      const expected = 'rogerluiz';
      const actual = foundUser.name;

      expect(actual).toEqual(expected);
    });
  });

  describe('save github', () => {
    it('save github repository', async () => {
      const repo = new Repository(mockJson);
      const savedRepo = await repo.save();
      const expected = 'rogerluiz';
      const actual = savedRepo.name;

      expect(actual).toEqual(expected);
    });
  });

  describe('update repository', () => {
    it('update repository tags', async () => {
      const repo = new Repository(mockJson);
      await repo.save();
      
      const expected = 'js, react, test, jest';
      
      repo.repositories[0].tags = expected;

      const updatedTags = await repo.save();
      const actual = updatedTags.repositories[0].tags;
      
      expect(actual).toBe(expected);
    });
  });
});