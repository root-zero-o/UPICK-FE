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
          {article.author} 약국
        </span>
      </div>
    </Layout>
  );
};

export default Article;
