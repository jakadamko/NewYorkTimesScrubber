# NewYorkTimesScrubber Search

### Overview

This is a React-based rendition a New York Times Article Search application. This assignment requires React components, working with helper/util functions, and utilizes the React mounting lifecycle to query and display articles based on the user searches. Also using Node, Express and MongoDB so that users can save articles to read later.

### Instructions

2. Created a MongoDB database called `nytreact`

3. Using mongoose, then create an Article schema and model

4. Articles should have each of the following fields:

   * `title` (Title of the stored article from nytimes.com)

   * `date` (publish date and time of the article)

   * `url` (URL of the article on nytimes.com)

   * Creating `documents` in the `articles` collection similar to  
     ```js
     {
       title: 'Ali Sells Jersey House And Moves to Chicago',
       date: '1974-07-18T00:00:00Z',
       url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
     }
     ```

   * Used Bootstrap layout similar to display as a SPA (Single Page Application) that uses [`react-router-dom to navigate, hide and show the React components without changing the route within Express.


   * Express routes for the app:

     * `/api/articles` (get) - your components will use this to query MongoDB for all saved articles

     * `/api/articles` (post) - your components will use this to save an article to the database

     * `/api/articles` (delete) - your components will use this to delete a saved article in the database

     * `*` (get) - will load your single HTML page (with ReactJS) in `client/build/index.html`. Make sure you put this after all other GET routes

   * The layout includes at least two React Components for each page `Home` and `Saved`.

     * **Home** - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

     * **Saved** - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page may be made up of multiple smaller components or JSX that renders plain HTML elements.

- - -
### Deployed to Heroku
https://rocky-gorge-82967.herokuapp.com

