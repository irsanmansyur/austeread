declare namespace AppInterface {
  interface baseMongo {
    id: string;
    createdAt: string;
    updatedAt: string;
  }

  type artSort = Article[];
  export interface ArticleGroupKategoriCustom {
    category_name: string;
    articlesSort: artSort[];
  }
  export interface ArticleGroupKategori {
    category: number;
    category_name: string;
    value: Article[];
  }
  export interface Article extends baseMongo {
    title: string;
    desc: string;
    thumbnail: string;
    img: string;
    like: number;
    tbl_user_first_name: string;
    tbl_user_last_name: string;
    tbl_news_category_name: string;
    tbl_user: User;
    tbl_news_category: Kategori;
  }
  export interface Kategori extends baseMongo {
    name: string;
  }
  export interface User extends baseMongo {
    first_name: string;
    last_name: string;
    createdAt: string;
  }
  export interface HightLight {
    title: string;
    desc: string;
    id: string;
    createdAt: string;
    thumbnail: string;
    img: string;
    tbl_news_category: {
      name: string;
      createdAt: string;
    };
  }
}
