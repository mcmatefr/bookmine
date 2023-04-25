import {Schema, model} from 'mongoose';

export interface Book{
  id:string;
  title:string;
  author:string;
  publisher:string;
  pages:number;
  price:number;
  favorite:boolean;
  imageUrl: string;
  tags: string[];
}

export const BookSchema = new Schema<Book>(
    {
        title: {type: String, required:true},
        author: {type: String, required:true},
        publisher: {type: String, required:true},
        pages: {type: Number, required:true},
        price: {type: Number, required:true},
        favorite: {type: Boolean, default:false},
        imageUrl: {type: String, required:true},
        tags: {type: [String]}
        
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const BookModel = model<Book>('book', BookSchema);