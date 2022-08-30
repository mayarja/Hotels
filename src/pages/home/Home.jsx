import Featured from "../../componnet/featured/Featured";
import Footer from "../../componnet/footer/Footer";
import Header from "../../componnet/header/Header";
import Maillist from "../../componnet/maillist/Maillist";
import Navbar from "../../componnet/navbar/Navbar";
import Propertylist from "../../componnet/propertylist/Propertylist";
import Twofeaturd from "../../componnet/twofeatured/Twofeaturd";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Featured />
        <h4 className="fw-bold mt-2 mb-2">Browser by property type</h4>
        <Propertylist />
        <h4 className="fw-bold mt-2 mb-2">Homes guests love</h4>
        <Twofeaturd />
      </div>
      <Maillist />
      <Footer />
    </div>
  );
}

export default Home;
