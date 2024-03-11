import MainCarousel from "../components/MainCarousel";
import { Navbar } from "../components/Navbar";
import '../Pages/home.css'
import { SearchArea } from "../components/SearchArea";
import TrailerCarousel from "../components/trailerCarousel";
import Footer from "../components/footer";
export function Home(){

    return(
        <>
       
       <Navbar/>
        <SearchArea/><br/>
       {/* <UncontrolledExample/> */}
      <MainCarousel/>
      <TrailerCarousel/>
      <Footer/>
        </>
    )
}
