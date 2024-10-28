const homelist = function(req, res){
res.render('locations-list', {
title: 'Cinemas near you : ',
pageHeader: {
strapline: 'Cinemas near you : '
},
locations: [{
name: 'Omniplex Tralee',
address: '17 New Street, Tralee, Co.Kerry',
distance: '0.9km away'
},{
name: 'Cafe Hero',
address: '20 Abbey Road, Killarney, Co.Kerry',
distance: '20km away'
},{
name: 'Burger Queen',
address: '23A, Concord Mall, Co.Cork',
distance: '90km away'
}]
});
};

/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};