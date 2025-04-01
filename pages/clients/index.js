import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "mary", name: "MARY" },
    { id: "john", name: "JOHN" },
  ];
  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientPage;
