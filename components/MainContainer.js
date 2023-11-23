import LinkItem from "./LinkItem";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`Learn Next.js ${keywords}`}></meta>
        <title>Learn next.js project</title>
      </Head>
      <div className="navBar">
        <LinkItem href="/" text="Main" />
        <LinkItem href="/users" text="Users" />
      </div>
      <>{children}</>
      <style jsx>{`
        .navBar {
          background: lightblue;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
