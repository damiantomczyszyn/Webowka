'use strict';

var util = require('util');

module.exports = {
    zdjecie: zdjecie
  };


function zdjecie(req, res) {
    var zdjecie_id = req.swagger.params.zdjecie_id.value || '0';
    var hello = util.format('Hello, %s!', zdjecie_id);
  
    res.json(hello);
  }


  