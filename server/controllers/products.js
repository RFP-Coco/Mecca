const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {
  getProductByID: function (req, res) {
    let url = `/products/${req.params.product_id}`;
    let options = {
      method: 'get',
      baseURL: baseURL,
      url: url,
      headers: {
        'Authorization': process.env.API_KEY
      },
    }
    axios(options)
      .then((result) => {
        res.status(200).json(result.data)
      })
      .catch((err) => {
        res.sendStatus(404)
        console.log(err)
      })
  },

  getRelatedProductIDs: function (req, res) {
    let id = req.params.product_id;
    let url = `/products/${id}/related`;
    let options = {
      method: 'get',
      baseURL: baseURL,
      url: url,
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
      });
  }
}
