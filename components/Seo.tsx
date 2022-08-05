import Head from "next/head";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | UPick</title>
    </Head>
  );
};

export default Seo;
