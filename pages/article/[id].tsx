import KeywordChip from "components/KeywordChip";
import Layout from "components/Layout";
import { sampleArticleData } from "lib/sampleData";

import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const id = router.query.id;

  const article = sampleArticleData.filter((v) => v.id === Number(id))[0];

  return (
    <Layout isWhite={false} icon>
      <div className="px-[30px] py-[50px]">
        <span className="text-sm font-bold text-darkblue1">
          {article.author} 약사
        </span>
        <span className="text-sm font-light text-coolgray3 ml-5">
          {article.pharmacy} 약국
        </span>
        <div className="pt-3 pb-2 border-b-[1px] border-coolgray3">
          {article.title.map((v, i) => {
            return (
              <div key={i} className="text-2xl font-[700] text-darkblue1">
                {v}
              </div>
            );
          })}
        </div>
        <div className="mt-2">
          {article.keyword.map((v, i) => {
            return <KeywordChip key={i} keyword={v} style="mr-2" />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Article;
