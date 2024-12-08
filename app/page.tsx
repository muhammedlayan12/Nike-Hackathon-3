import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestYear from "./components/BestYear";
import Featured from "./components/Featured";
import Gear from "./components/Gear";
import Cool from "./components/Cool"; 
import Essential from "./components/Essential";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Hero></Hero>
      <BestYear></BestYear>
      <Featured></Featured>
      <Gear></Gear>
      <Cool></Cool>
      <Essential></Essential>
      <Categories></Categories>
      <Footer></Footer>
    </div>
  )
}

export default page;