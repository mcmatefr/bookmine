import {Router} from 'express';
import { sample_books, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { BookModel } from '../models/book.model';

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const booksCount = await BookModel.countDocuments();
    if (booksCount> 0){
      res.send("Seed is already done");
      return;
    }
    
    await BookModel.create(sample_books);
    res.send("Seed Is Done!");
  }
))

router.get("/",asyncHandler(
  async (req, res) => {
    const books = await BookModel.find();
      res.send(books);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const books = await BookModel.find({name: {$regex:searchRegex}});
    res.send(books);
  }
))

router.get("/tags", (req, res) => {
    res.send(sample_tags);
  })
  
router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const books = sample_books
    .filter(book => book.tags?.includes(tagName));
    res.send(books);
  })

router.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const book = sample_books.find(book => book.id == bookId);
    res.send(book);
  })

export default router;
  