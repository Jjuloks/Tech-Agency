import { useState } from 'react'
import {useStrapi} from './hooks/useStrapi'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ServiceCard from './components/ServiceCard/ServiceCard'
import TeamCard from './components/TeamCard/TeamCard'
import PostCard from './components/PostCard/PostCard'
import Loader  from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TeamSection  from './components/TeamSection/TeamSection'



export default function App() {
  const {data :heroData, loading, error} = useStrapi('hero');
  return(
<>
  <Navbar/>
  {loading && <Loader/>}
  {error && <ErrorMessage message={error}/>}
  {heroData && (
  <Hero title={heroData.title} subtitle={heroData.subtitle} ctaLabel={heroData.ctaLabel}/>
  )}
<ServicesSection />
<TeamSection />
</>
  ) 
  
  
  
  
}
