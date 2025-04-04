import fs from "fs/promises";
import path from "path";

const PersonelDetailPage = (props) => {
  const { Selectedperson } = props;
  if (!Selectedperson) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{Selectedperson.title}</h1>
      <p>{Selectedperson.desc}</p>
    </div>
  );
};
const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "fake-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};
export async function getStaticProps(context) {
  const data = await getData();
  const { params } = context;
  const personelid = params.personelid;

  const person = data.persons.find((person) => person.id === personelid);
  if (!person) {
    return { notFound: true };
  }
  return {
    props: {
      Selectedperson: person,
    },
  };
  // const data = null;
}
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.persons.map((person) => person.id);
  const paramsId = ids.map((id) => {
    return {
      params: {
        personelid: id,
      },
    };
  });
  return {
    paths: paramsId,
    fallback: true,
    // const data = null;
  };
}
export default PersonelDetailPage;
