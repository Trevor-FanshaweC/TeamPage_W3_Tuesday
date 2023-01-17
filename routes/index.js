var express = require('express');
var router = express.Router();

const team = {
  justin: {
    name: 'Justin',
    role: 'coordinator',
    avatar: 'avatar.webp'
  },

  john: {
    name: 'John',
    role: 'motion / 3D prof'
  },

  joe: {
    name: 'Joe',
    role: 'business / motion prof'
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our Awesome Team', content: 'Click on an avatar above to learn more about our team'});
});

router.get('/team/:member', function(req, res) {
  console.log(req.params.member);

  res.render('team', { person: team[req.params.member]});
})

module.exports = router;
