import Layout from "components/Layout";
import AlertCard from "components/ui/AlertCard";
import React from "react";

const alert = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <AlertCard title="차은우 약사 답장" text="감사합니다." />
      <AlertCard title="차은우 약사 답장" text="감사합니다." />
      <AlertCard title="차은우 약사 답장" text="감사합니다." />
    </Layout>
  );
};

export default alert;
