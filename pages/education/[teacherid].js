import { useRouter } from "next/router";
const TeacherDetailPage = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  return (
    <div>
      <h1>TeacherDetailPage</h1>
    </div>
  );
};

export default TeacherDetailPage;
