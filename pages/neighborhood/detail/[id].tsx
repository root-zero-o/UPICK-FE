import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import KakaoMap from "components/KakaoMap";

const detail: NextPage = () => {
  return (
    <Layout home={false} isWhite={false} icon={true}>
      <KakaoMap />
    </Layout>
  );
};

export default detail;
