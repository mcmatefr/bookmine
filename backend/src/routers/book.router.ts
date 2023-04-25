import {Router} from 'express';
import { sample_books, sample_tags } from '../data';

const router = Router();


router.get("/", (req, res) => {
    res.send(sample_books);
})

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm  = req.params.searchTerm;
    const books = sample_books.filter(book => book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(books);
  })

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
  