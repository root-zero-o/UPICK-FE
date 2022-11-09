import axios from "axios";
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
          {article?.author} 약사
        </span>
        <span className="text-sm font-light text-coolgray3 ml-5">
          {article?.pharmacy} 약국
        </span>
        <div className="pt-3 pb-2 border-b-[1px] border-coolgray3">
          {article?.title.map((v, i) => {
            return (
              <div key={i} className="text-2xl font-[700] text-darkblue1">
                {v}
              </div>
            );
          })}
        </div>
        <div className="flex row mt-2">
          <div>
            <div>
              {article?.keyword.map((v, i) => {
                return <KeywordChip key={i} keyword={v} style="mr-2" />;
              })}
            </div>
            <div className=" p-[10px] w-[233px] text-sm text-darkblue2 font-medium break-words whitespace-pre-wrap">
              {article?.explanation}
            </div>
          </div>
          <div className="w-[90px] h-[113px] ml-5 bg-yellow1 rounded-md" />
        </div>
        <div className="mt-4 text-sm bg-white p-4 rounded-md break-words whitespace-pre-wrap">
          {article?.text}
        </div>
      </div>
    </Layout>
  );
};

export default Article;
