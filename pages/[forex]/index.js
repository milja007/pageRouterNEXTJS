const ForexPage = (props) => {
  return (
    <div>
      <h1>Forex Page</h1> <p>{props.id}</p>
    </div>
  );
};

export default ForexPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const forex = params.forex;
  return {
    props: {
      id: forex,
    },
  };
}
