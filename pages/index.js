import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { redirect } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Home(props) {
  const { persons } = props;
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.id}>
              <Link href={`/${person.id}`}>{person.title}</Link>
            </li>
          );
        })}
        <li>
          <Link href={"/about"}>About Page</Link>
        </li>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/education"}>Education</Link>
        </li>
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  console.log("Revalidate text");
  const filePath = path.join(process.cwd(), "data", "fake-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  // const data = null;
  if (!data) {
    return {
      redirect: {
        destination: "/about",
      },
    };
  }
  if (!data.persons.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      persons: data.persons,
    },
    revalidate: 5,
  };
}
export default Home;
