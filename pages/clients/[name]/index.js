"use client";

import { useRouter } from "next/router";

const SelectedClient = () => {
  const router = useRouter();
  // console.log(router.query);
  const loadArticle = () => {
    //load data
    router.push({
      pathname: "/clients/[name]/[clientArticle]",
      query: {
        name: "john",
        clientArticle: "Software",
      },
    });
  };
  return (
    <div>
      <h1>SelectedClient:{router.query.name}</h1>
      <button onClick={loadArticle}>Load Article</button>
    </div>
  );
};

export default SelectedClient;
