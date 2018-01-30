import axios from "axios";

export default {
  // Gets all articles
  getArticles: function (q, start, end) {
    return axios.get(`/api/search/${q}/${start}/${end}`);
  },
  // saves an  article with the articleData param
  saveArticle: function (articleData) {
    return axios.post("/api/article/save", articleData);
  },
  // Saved  articles on the database
  savedArticles: function () {
    return axios.get("/api/articles");
  },
  // deltes the article with the given id
  deleteArticle: function(id) {
    return axios.delete(`/api/article/delete/${id}`);
  },
};
