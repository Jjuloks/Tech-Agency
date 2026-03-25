import { useStrapi } from '../../hooks/useStrapi'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'


export default function ContactSection() {
  const { data: contactData, loading, error } = useStrapi('contact')


  return (
    <>
     {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {contactData && (
            <Contact
              title={contactData.title}
              subtitle = {contactData.subtitle}
            />
          )}  

          
<div>

</div>
    </>
  )
}