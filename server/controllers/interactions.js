const axios = require('axios');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {
  addInteraction: (req, res) => {
    const { element, widget, time } = req.body;
    const url = '/interactions';
    const options = {
      method: 'post',
      baseURL,
      url,
      data: {
        element,
        widget,
        time,
      },
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(options)
      .then((result) => {
        res.status(201).json(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      });
  },
};
