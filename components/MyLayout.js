import Header from './Header'
import Footer from './Footer'
import Tete from './Head'
import "../assets/scss/MyLayout.scss";
import "../assets/scss/index.scss";

const Layout = props =>
   (
    <div className="Layout">
      <Tete />
      <Header />
      <div className="Content">
        {props.children}
        </div>
      <Footer />
    </div>
  )

export default Layout;