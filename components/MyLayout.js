import Header from './Header'
import Footer from './Footer'
import Tete from './Head'
import "../assets/scss/MyLayout.scss";
import "../assets/scss/index.scss";
import image from "../assets/img/bg1.jpg"

const Layout = props =>
   (
    <div className="Layout"
    style={{
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }}>
      <Tete />
      <Header />
      <div  className="Content">
           
        {props.children}
        </div>
      <Footer />
    </div>
  )

export default Layout;