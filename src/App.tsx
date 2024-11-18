import { MdMarkEmailUnread } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import "./font.css";
import "./App.css";

const App = () => {
  return <>
    <Helmet>
      <title>YUNJISANG</title>
    </Helmet>
    <div className="container">
      <div className="title">
        <h1>YUN JISANG</h1>
        <h2>Developer</h2>
        <h3>Developer</h3>
        <h4>Developer</h4>
        <h5>Developer</h5>
      </div>
      <div className="contact">
        <span><MdMarkEmailUnread color="white" /> yjs12180825@gmail.com</span>
        <span><FaInstagram color="white" /> @yunjisang_</span>
        <span><AiFillGithub color="white" /> @balhyo_younjisang</span>
      </div>
    </div>
  </>
}

export default App;