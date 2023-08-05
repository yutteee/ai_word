import Dexie, { Table } from "dexie";

export interface Word {
  id: number;
  word_en: string;
  word_jp: string;
  memo: string;
  folder?: string;
}

export interface folder {
  id: number;
  folder: string;
}

export interface Article {
  id: number;
  title_en: string;
  text_en: string;
  title_jp: string;
  text_jp: string;
  words: number[];
}

export class MySubClassedDexie extends Dexie {
  words: Table<Word>;
  folders: Table<folder>;
  articles: Table<Article>;

  constructor() {
    super("MySubClassedDexie");
    this.version(1).stores({
      words: "++id,word_en,word_jp, memo, folder",
      folders: "++id,folder",
      articles: "++id,title_en,text_en,title_jp,text_jp,words",
    });
    this.words = this.table("words");
    this.folders = this.table("folders");
    this.articles = this.table("articles");
  }
}

export const db = new MySubClassedDexie();
