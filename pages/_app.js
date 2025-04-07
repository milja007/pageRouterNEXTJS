import LayoutPage from "@/components/tours/layout/layout.page";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}
