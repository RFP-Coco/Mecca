/*
const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {

  getReviewMetaData: function (req, res) {
    let url = '/reviews/meta?product_id=';
    let options = {
      method: 'get',
      baseURL: baseURL,
      url: url + req.query.product_id,
      headers: {
        'Authorization': process.env.API_KEY
      },
    }
    axios(options)
      .then(result => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404)
      })
  }
}

*/