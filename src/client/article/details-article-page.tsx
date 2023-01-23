import { useEffect, useRef, useState } from "react";
import PublicLayout from "../layouts/public-layout";
import CalenderArchive from "./componenst/calender-archive";
import "./style.css";
export default function ArticlesByCategoryPage() {
  const [articles, setArticles] = useState<any[]>([23, 21, 433, 343, 232, 5, 1, 2, 3]);
  const [groupArticles, setgroupArticles] = useState<any[]>([]);


  useEffect(() => {
    articles.forEach((s, i) => {
      const keyMod = (i + 1) % colsArt;
      let ky = 0;
      if (keyMod == 2) ky = 1;
      else if (keyMod == 0) ky = 2;

      if (!groupArticles[ky]) groupArticles[ky] = [s];
      else groupArticles[ky].push(s);
    });
    return () => {};
  }, [articles]);


  return (
    <PublicLayout>
      <div className="container py-10">
        <div className="all-article px-2 sm:px-0">
          <div className="articles-header">
            <h1 className="font-PublicSansMedium text-center text-[32px] font-bold">
              <span className="whitespace-nowrap title relative">Economy</span>
            </h1>
          </div>
          <div className="w-3/4 flex justify-end my-10">
            <div className="flex gap-4 w-2/3 mr-[13px]">
              <input placeholder="Search on Economy" className="outline-none border rounded-sm py-1 px-4 w-full" />
              <button className="bg-black text-light rounded px-2 ">Search</button>
            </div>
          </div>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <div className="sm:w-3/4">
              <div className="articles-body mt-6">
                <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${colsArt}, minmax(0, 1fr))` }}>
                  {groupArticles.map((mparr, i) => {
                    return (
                      <div className="flex flex-col gap-4" key={i}>
                        {mparr.map((ap: any) => {
                          return (
                            <div key={`${ap}-${i}`} className="card bg-dark rounded relative">
                              <img className="h-[120px] sm:h-[232px] w-full rounded" src="https://austeread.com/assets/img/upload/Thumbnail-1665532800264.jpg" alt="Card image" />
                              <div className="p-4">
                                <div className="text-xs pb-2 border-b-2 border-secondary">Politics and Culture | 12th September, 2022</div>
                                <div className="mt-3 font-PublicSansMedium text-base sm:text-[24px]">{arts[Math.floor(Math.random() * arts.length)]}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div ref={loadMoreRef} className="article-footer text-center mt-4">
                <button className="outline-none bg-black rounded py-2 px-4 text-white hover:scale-105 duration-300">View all Economy Article</button>
              </div>
            </div>
            <div className="sm:w-1/4">
              <CalenderArchive />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
