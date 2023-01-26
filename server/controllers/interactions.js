const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {
  addInteraction: function (req, res) {
    const {element, widget, time} = req.body;

    let url = '/interactions'
    let options = {
      method: 'post',
      baseURL: baseURL,
      url: url,
      data: {
        element: element,
        widget: widget,
        time: time
      },
      headers: {
        'Authorization': process.env.API_KEY
      },
    }
    axios(options)
      .then(result => {
        res.status(201).json(result.data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(422)
      });
  }
}