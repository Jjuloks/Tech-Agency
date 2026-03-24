import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ServiceCard from './components/ServiceCard/ServiceCard'
import TeamCard from './components/TeamCard/TeamCard'
import PostCard from './components/PostCard/PostCard'
import Loader  from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
export default function App() {
  return(
<>
  <Navbar/>
  <Hero title="Tworzymy cyfrowe doswiadczenia" subtitle="Agencja kreatywna" ctaLabel="Sprawdz nas"/>
  <section id="services"> 
    <h2>Nasze uslugi</h2>
    <div className="grid">
  <ServiceCard icon="" title="Design" description="Projektujemy UI/UX"/>
  <ServiceCard icon="" title="Programowanie" description="Tworzymy aplikacje" />
  </div>
  </section> 
</>
  ) 
  
  
  
  
}
