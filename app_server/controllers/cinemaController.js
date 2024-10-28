
const cinemaList = function(req, res) {
    res.render('cinemas-list', {
      title: 'Cinemas Near You:',
      pageHeader: {
        strapline: 'Find cinemas near you!'
      },
      cinemas: [
        {
          name: "Omniplex Tralee",
          address: "17 New Street, Tralee, Co.Kerry",
          distance: "0.9km away"
        },
        {
          name: "Omniplex Killarney",
          address: "20 Abbey Road, Killarney, Co.Kerry",
          distance: "20km away"
        },
        {
          name: "Dublin Gallery Cinema",
          address: "23A, Concord Mall, Co.Dublin",
          distance: "124km away"
        }
      ]
    });
  };
  
  module.exports = {
    cinemaList
  };
  