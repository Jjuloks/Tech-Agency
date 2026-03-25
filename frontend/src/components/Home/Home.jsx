import { useStrapi } from '../../hooks/useStrapi'
import Hero from '../Hero/Hero'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ServicesSection from '../ServicesSection/ServicesSection'
import TeamSection from '../TeamSection/TeamSection'

export default function Home() {
  const { data: heroData, loading, error } = useStrapi('hero')

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {heroData && (
        <Hero
          title={heroData.title}
          subtitle={heroData.subtitle}
          ctaLabel={heroData.ctaLabel}
          ctaLabel1={heroData.ctaLabel1}
          heroImageUrl={`http://localhost:1337${heroData.heroImage.url}`}
        />
      )}  
    </>
  )
}