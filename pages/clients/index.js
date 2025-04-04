import Link from "next/link";

const ClientPage = (props) => {
  // const clients = [
  //   { id: "mary", name: "MARY" },
  //   { id: "john", name: "JOHN" },
  // ];
  return (
    <div>
      <h1>ClientPage</h1>
      <h3>{props.userName}</h3>
    </div>
  );
};

export default ClientPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  // console.log(req, res);
  console.log("server side generation");
  return {
    props: {
      userName: "Ema",
    },
  };
}
