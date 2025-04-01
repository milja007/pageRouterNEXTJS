import Link from "next/link";
import { useRouter } from "next/router";

const SelectedClient = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>
        SelectedClient number {router.query.clientArticle} for user{" "}
        {router.query.name}
      </h1>
    </div>
  );
};

export default SelectedClient;
