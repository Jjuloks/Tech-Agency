import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/ServicesSection/ServicesSection'
import Team from './components/TeamSection/TeamSection'
import Post from './components/PostCard/Postcard'
import Footer from './components/Footer/Footer'
import Contact from './components/ContactSection/ContactSection'
import NewsSection from './components/NewsSection/NewsSection'
import ArticlePage  from './components/ArticlePage/ArticlePage'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsSection />} />
        <Route path="/news/:slug" element={<ArticlePage />} />
      </Routes>      
<Footer />
    </>
  )
}