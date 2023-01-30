const axios = require('axios');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
require('dotenv').config();

module.exports = {
  getAllQuestionsByProductId: (req, res) => {
    // page&count has default value 1&5.
    // keep this in mind in case you need to change these value.
    const { page, count, product_id } = req.query;
    const url = `/qa/questions?page=${page}&count=${count}&product_id=${product_id}`;
    const config = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  getAnswersByQuestionId: (req, res) => {
    // default value for page and counts
    const { page, count } = req.query;
    const url = `qa/questions/${req.params.question_id}/answers?page=${page}&count=${count}`;
    const config = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  addQuestionById: (req, res) => {
    // req.body should contain
    //  body/name/email    product_id *required
    const url = 'qa/questions';
    const config = {
      method: 'post',
      baseURL,
      url,
      data: req.body,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  addAnswerById: (req, res) => {
    const url = `qa/questions?questions_id=${req.params.question_id}/answers`;
    const config = {
      method: 'post',
      baseURL,
      url,
      data: req.body,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  updateQuestionHelpful: (req, res) => {
    const url = `qa/questions?question_id=${req.params.question_id}/helpful`;
    const config = {
      method: 'put',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  handleQuestionReport: (req, res) => {
    const url = `qa/questions?question_id=${req.params.question_id}/report`;
    const config = {
      method: 'put',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  updateAnswerHelpful: (req, res) => {
    const url = `qa/answers?${req.params.answer_id}/helpful`;
    const config = {
      method: 'put',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
  handleAnswerReport: (req, res) => {
    const url = `qa/answers?${req.params.answer_id}/report`;
    const config = {
      method: 'put',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(config)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  },
};
