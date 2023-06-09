import {Book} from './app/shared/models/book';
import { Tag } from './app/shared/models/Tag';

export const sample_books: Book[] = [
  {
    id:'1',
    title: 'Tanár úr kérem',
    author: 'Karinthy Frigyes',
    publisher: 'Akkord kiadó',
    pages: 100,
    price: 10,
    favorite: true,
    tags: ['Novel'],

    imageUrl: 'assets/book-1.jpg',
  },
  {
    id:'2',
    title: 'Kőszívű ember fiai',
    author: 'Jókai Mór',
    publisher: 'Libri kiadó',
    pages: 200,
    price: 20,
    favorite: false,
    tags: ['Novel'],
    imageUrl: 'assets/book-2.jpg',
  },
  {
    id:'3',
    title: 'Bánk Bán',
    author: 'Katona József',
    publisher: 'Európa kiadó',
    pages: 300,
    price: 30,
    favorite: false,
    tags: ['Drama'],
    imageUrl: 'assets/book-3.jpg',
  },
  {
    id:'4',
    title: 'Az ember tragédiája',
    author: 'Madách Imre',
    publisher: 'Móra kiadó',
    pages: 400,
    price: 40,
    favorite: false,
    tags: ['Drama'],
    imageUrl: 'assets/book-4.jpg',
  },
  {
    id:'5',
    title: 'A Pál utcai fiúk',
    author: 'Molnár Ferenc',
    publisher: 'Naphegy kiadó',
    pages: 200,
    price: 25,
    favorite: false,
    tags: ['Novel'],
    imageUrl: 'assets/book-5.jpg',
  },
  {
    id:'6',
    title: 'Légy jó mindhalálig',
    author: 'Móricz Zsigmond',
    publisher: 'Móra kiadó',
    pages: 190,
    price: 30,
    favorite: false,
    tags: ['Novel'],
    imageUrl: 'assets/book-6.jpg',
  },
]
export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Novel', count: 4 },
  { name: 'Drama', count: 2 },
]
