import Footer from "../components/Footer";
import Header from "../components/Header";
import Headline from "../components/Headline";
import "../resources/css/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={"home-main"}>
        <Headline />
      </main>
      <Footer />
    </>
  );
};

export default Home;
