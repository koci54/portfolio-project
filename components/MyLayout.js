import Header from './Header'
import Footer from './Footer'
import House from './Head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px dotted #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <House />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
