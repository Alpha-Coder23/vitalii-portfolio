import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import ContactForm from "./Pages/ContactForm";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        
      </Routes>
    </Router>
  )
  
}

export default App
