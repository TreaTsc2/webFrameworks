
const movieList = (req, res) => {
    res.render('movies-list', {
      title: 'Movies:',
      movies: [
        {
          title: "Nightmare Before Christmas"
        },
        {
          title: "Beetlejuice Beetlejuice"
        },
        {
          title: "Zootopia"
        }
      ]
    });
  };
  
  module.exports = {
    movieList
  };
  