import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCardArticle, { SkeletonNews } from "../article/componenst/skeleton-card";
import useData from "../commons/data";
import { urlAsset } from "../commons/helpers";
import PublicLayout from "../layouts/public-layout";
import "./style.css";
const arts = [
  "Liz Truss: Dari Penentang Monarki Menjadi Perdana Menteri Terakhir yang Dilantik Ratu Elizabeth II Menteri Terakhir yang Dilantik Menteri Terakhir yang Dilantik",
  "uss, resmi menjadi perdana menteri Inggris yang",
  "Liz Truss menjadi perdana menteri perempuan ketiga di Inggris. Setelah Theresa May (2016 - 2019).",
  " Dari Penentang Monarki Menjadi Perdana Menteri Terakhir ",
  "Liz Truss, resmi menjadi perdana menteri Inggris yang",
  "Liz Truss, resmi yang",
  "Liz Truss, resmi yang",
];
export default function IndexPage() {
  const parentScroll = useRef<HTMLDivElement>(null);
  const [colsArt, setColsArt] = useState(3);

  const { data: newsHightLight, get: getNewsHightLight } = useData<{ data: AppInterface.HightLight[] }>();
  const { data: news, get: getNew } = useData<AppInterface.ArticleGroupKategori[]>();
  const [groupNews, setGroupNews] = useState<AppInterface.ArticleGroupKategoriCustom[]>([]);

  useEffect(() => {
    if (!Array.isArray(news)) return;

    const newGrb = news.map((newByKategori, iParent) => {
      const articlesSort: AppInterface.Article[][] = [];
      newByKategori.value.forEach((article, i) => {
        const keyMod = (i + 1) % colsArt;
        let ky = 0;
        if (keyMod == 2) ky = 1;
        else if (keyMod == 0) ky = 2;
        if (!articlesSort[ky]) articlesSort[ky] = [article];
        else articlesSort[ky].push(article);
      });
      return {
        articlesSort: articlesSort,
        category_name: articlesSort.length > 0 ? articlesSort[0][0].tbl_news_category_name : "",
      };
    });
    setGroupNews(newGrb);

    return () => {};
  }, [news, colsArt]);

  useEffect(() => {
    getNewsHightLight("news/highlight");
    getNew("getNews");

    const handleResize = () => {
      setColsArt(window.innerWidth < 500 ? 2 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PublicLayout>
      <div className="bg-gray-100 py-10">
        <div className="container px-2 sm:px-0">
          <div className="all-article">
            <div className="articles-header">
              <h1 className="font-PublicSansMedium text-center text-[32px] font-bold">
                <span className="whitespace-nowrap title relative">Don't miss this</span>
              </h1>
            </div>
            <div className="articles-body mt-6">
              <div ref={parentScroll} className="relative grid grid-flow-col gap-3 overflow-x-auto hide-scroll-bar">
                {newsHightLight.data
                  ? newsHightLight.data.map((highlight, i) => {
                      return (
                        <div key={i} className="min-w-[240px] w-1/2" style={{ width: parentScroll.current ? `${parentScroll.current.offsetWidth / 3}px` : "240px" }}>
                          <div className="card bg-dark rounded overflow-hidden text-white relative">
                            <img className="h-[210px] sm:h-[232px] w-full" src={urlAsset("img/upload/" + highlight.thumbnail)} alt={`Thumbnail ${highlight.title}`} />
                            <div className="absolute inset-0 flex justify-end p-4 items-center flex-col bg-black/60">
                              <p className="text-xs">{`${highlight.tbl_news_category.name} | ${highlight.createdAt}`}</p>
                              <h5 className="text-center mt-3">{highlight.title}</h5>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : [1, 2, 3, 4].map((a) => <SkeletonNews key={a} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-10">
        {groupNews.map((groupKategori, i) => {
          if (groupKategori.articlesSort.length < 1) return "";
          return (
            <div key={i} className="mb-10 border-b last:border-b-0">
              <div className="all-article px-2 sm:px-0">
                <div className="articles-header">
                  <h1 className="font-PublicSansMedium text-center text-[32px] font-bold">
                    <span className="whitespace-nowrap title relative">{groupKategori.category_name}</span>
                  </h1>
                </div>
                <div className="articles-body mt-6">
                  <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${colsArt}, minmax(0, 1fr))` }}>
                    {groupKategori.articlesSort.map((indexArticle, i) => {
                      return (
                        <div className="flex flex-col gap-4" key={i}>
                          {indexArticle.map((article) => {
                            return (
                              <Link to={`news/${article.id}`} key={article.id} className="card rounded relative">
                                <img className="h-[120px] sm:h-[232px] w-full rounded" src={urlAsset("img/upload/" + article.thumbnail)} alt="Card image" />
                                <div className="p-4">
                                  <div className="text-xs pb-2 border-b-2 border-secondary">{`${article.tbl_news_category_name} | ${article.createdAt}`}</div>
                                  <div className="mt-3 font-PublicSansMedium text-base sm:text-[24px]">{article.title}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="text-center my-10">
                <button className="outline-none bg-black rounded py-2 px-4 text-white hover:scale-105 duration-300">View all {groupKategori.category_name} Article</button>
              </div>
            </div>
          );
        })}
      </div>
    </PublicLayout>
  );
}
