var Item = require('../models/Item');

itemRouter.route('/add/post').post(function (req, res) {
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.redirect('/');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

itemRouter.route('/').get(function (req, res) {
    Item.find(function (err, itms){
      if(err){
        console.log(err);
      }
      else {
        res.render('items', {itms: itms});
      }
    });
  });