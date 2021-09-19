import Card from "../components/Card";
import "./Home.css";
import Footer from "../components/Footer";
import Slider from '../components/Slider';
import WbSunny from "@material-ui/icons/WbSunny";
import Sports from "@material-ui/icons/Sports";
import Offer from "../components/Offer";
import Category from "../components/Category";
import Row from "../components/Row";
import requests from "../Request";


function Home() {
  return (
    <div className="home">
        <h3>New! Free shipping with no order min. Restrictions apply.</h3>
        <Slider/>
        <div>
          <Offer/>
          <Category/>
        </div>
        <div>
          <h2 className="section_heading">Electronics</h2>
          <Row title="Must Read Books" fetchURL = {requests.fetchElectronicProducts}/>  
        </div>
        <div>
          <h2 className="section_heading">For Fitness Freaks</h2>
          <Row title="Techie Special" fetchURL = {requests.fetchFitnessProducts}/>
        </div>
        <div>
          <h2 className="section_heading">Vitamins to Stay Healthy</h2>
          <Row title="Vitamins" fetchURL = {requests.fetchHealthProducts}/>
        </div>      
    
      <h2 className="section_heading">
        Spring Fashion essentials
        <WbSunny style={{ color: "#FFC220" }} fontSize="large" />
      </h2>
      <div className="clothing_category">
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-d3e1/k2-_c669db3f-a0d2-40fb-9afb-5d2c919be65f.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Men's spring styles"
          btntxt={"none"}
        />
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-31d2/k2-_09717152-89dd-4141-b3ce-d952b9b1e540.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Kid's spring must-haves"
          btntxt={"none"}
        />
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-5fa0/k2-_a61cc7e4-f0bd-4759-915a-afdbbe08f16e.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Women's dresses"
          btntxt={"none"}
        />
      </div>
      <h2 className="section_heading">
        Outdoor family fun
        <Sports />
      </h2>
      <div className="outdoor_category">
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-6769/k2-_91e8dea2-534b-41f5-b787-4b8110c39ee2.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Bikes from $98"
          btntxt={"none"}
        />
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-dcd1/k2-_6bc8d051-d3d9-4995-ad53-de2ace8dd4f0.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Kid's spring must-haves"
          btntxt={"none"}
        />
        <Card
          pic="//i5.walmartimages.com/dfw/4ff9c6c9-60da/k2-_a238a942-9a89-45f0-9857-468b12cdcfb9.v1.png?odnWidth=282&amp;odnHeight=282&amp;odnBg=ffffff"
          subtext="Meak must-haves"
          btntxt={"none"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
