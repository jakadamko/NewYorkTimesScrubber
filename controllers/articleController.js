const path = require("path");
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

const articleFunctions = {
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

router.get("/api/search/:q?/:start?/:end?", function (req, res) {
  let results = [];
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const key = "d44f7dca8c9d42d2931a277dfa8bbfbd";
  axios.get(url, {
    params: {
      'api-key': key,
      'q': req.params.q,
      'begin_date': req.params.start,
      'end_date': req.params.end
    }
  })
    .then(function (response) {
      for(let i = 0; i < 5; i++) {
        results.push({
          title: response.data.response.docs[i].snippet,
          date: response.data.response.docs[i].pub_date,
          url: response.data.response.docs[i].web_url
        })
      }
      res.json(results)
    })
});

router.post("/api/article/save", articleFunctions.create);

router.get("/api/articles", articleFunctions.findAll);

router.delete("/api/article/delete/:id", articleFunctions.remove);



// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
