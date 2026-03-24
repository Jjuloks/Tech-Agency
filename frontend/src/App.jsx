import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/ServicesSection/ServicesSection'
import Team from './components/TeamSection/TeamSection'
import Post from './components/PostCard/Postcard'
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/posts" element={<Post />} />
      </Routes>

    </>
  )
}