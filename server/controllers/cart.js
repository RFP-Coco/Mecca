const axios = require('axios');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {
  getCart: (req, res) => {
    const url = '/cart';
    const options = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(options)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => {
        res.sendStatus(404);
        console.log(err);
      });
  },

  addToCart: (req, res) => {
    const url = '/cart';
    const options = {
      method: 'post',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
      data: {
        sku_id: req.body.sku_id,
        count: req.body.count,
      },
    };
    axios(options)
      .then((result) => {
        res.status(201).json(result.data);
      })
      .catch((err) => {
        res.sendStatus(404);
        console.log(err);
      });
  },
};
