// https://api.github.com/users/brainn-co/repos?client_id=Iv1.e7f8e8237b9aa7d2&client_secret=f60c2112a26cb76865de16b10b571ad64b6aa10c

// https://api.github.com/users/rogerluiz/starred?client_id=Iv1.e7f8e8237b9aa7d2&client_secret=f60c2112a26cb76865de16b10b571ad64b6aa10c


import app from './serve';

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line
});