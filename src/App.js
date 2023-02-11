
import { Banner } from "./components/Banner";
import { CardContainer } from "./components/cardContainer";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { WhereweStart } from "./components/WhereaWeStarted";
import { WhoWeAre } from "./components/Who_We_Are";
import "./styles.css";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Banner />
        <WhoWeAre />
        <WhereweStart />
      </div>

      <Cards />
      <Form />
      <Footer />
    </div>
  );
}


/* Deep Chaudhary */
