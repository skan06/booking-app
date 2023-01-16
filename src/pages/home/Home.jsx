import "./home.css"
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropretyList from "../../components/propretyList/PropretyList"
import FeaturedPropreties from "../../components/featuredPropreties/FeaturedPropreties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by proprety type</h1>
          <PropretyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedPropreties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home