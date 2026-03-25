import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/ServicesSection/ServicesSection'
import Team from './components/TeamSection/TeamSection'
import Post from './components/PostCard/Postcard'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
<Footer />
    </>
  )
}