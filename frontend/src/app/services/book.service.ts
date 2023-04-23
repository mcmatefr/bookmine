import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_books, sample_tags } from 'src/data';
import { Book } from '../shared/models/book';
import { BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL, BOOK_BY_ID_URL } from '../shared/models/constants/urls';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }

  getAllBooksByTag(tag: string): Observable<Book[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);
  }
  getBookById(bookId:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + bookId);
  }
}
