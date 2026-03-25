import { useStrapi } from "../../hooks/useStrapi";
import ServiceCard from "../ServiceCard/ServiceCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from './ServicesSection.module.css'



export default function ServicesSection (){
    const {data, loading, error} = useStrapi('services');

    if(loading) return <Loader/>;
    if(error) return <ErrorMessage message={error} />;


    return (
        <section id="services" className={styles.section}>
            <div className={styles.header}>
                <h2>Innowacyjne rozwiazania dla twojego biznesu</h2>
                <p>Tworzymy nowoczesne systemy, ktore pomaga firmom osiagnac wiekszy procent sprzedazy dzieki zachecajacej stronie.</p>
            </div>
            <div className={styles.grid}>
                {data.map(item=>
                    (
                    <ServiceCard key={item.id} icon={item.icon} title={item.title} description={item.description} imageServiceUrl={`http://localhost:1337${item.imageService.url}`}/>
                    )
                )}
            </div>
        </section>
    )
}