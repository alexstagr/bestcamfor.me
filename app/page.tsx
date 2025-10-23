import Content from "./components/Content";

import Header from "./partials/Header";
import Footer from "./partials/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Content>
        <h1>I am Content</h1>
      </Content>
      <Footer />
    </>
  );
}
