
import Content from '../component/Content.jsx'
import Header from '../component/Header.jsx';
import Footer from "../component/Footer";

function App() {

  return (
    <>
      <Header />
      <Content text="This is my first React Application!"/>
      <Content color="orange" text="Wish me luck..." />
      <Content text="I think I've got it!" />
      <Footer />
    </>
  )
}

export default App
