const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel")
const BookController= require("../controllers/bookController")

const newBookController= require("../controllers/newbookController")

const authorController= require("../controllers/authorController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//ASSIGNMENT 1
router.post('/createBooks',  BookController.createBooks  );
router.get('/bookList',  BookController.bookList  );
router.post('/getBooksInYear',  BookController.getBooksInYear );
router.post('/getParticularBooks',  BookController.getParticularBooks  );
router.get('/getXINRBooks',  BookController.getXINRBooks );
router.get('/getRandomBooks',  BookController.getRandomBooks );
//ASSIGNMENT 2
//Api's for newBooks
router.post('/createnewBooks',  newBookController.createnewBooks  );
router.get('/booksByChetan',  newBookController.booksByChetan  );
router.get('/twostates',  newBookController.twostates  );
router.get('/books',  newBookController.books  );
//Api's for Author
router.post('/createauthor',  authorController.createauthor );
















module.exports = router;