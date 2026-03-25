import styles from './Contact.module.css';
import ContactSection from '../ContactSection/ContactSection'
import { use, useState } from 'react';

export default function Contact({title,subtitle,leftsubtitle, faqsubtitle,ctaLabel,Steps,wholefaqs}){
    const stepsDisplay = Steps?.map((step)=>
    <div>
        <span>{step.number}</span>
        <p>{step.text}</p>
    </div>
    );

    const wholefaqDisplay = wholefaqs?.map((faq)=>
        <div>
            <p className={styles.question}>{faq.question}</p>
            <p className={styles.answers}>{faq.answer}</p>
        </div>
    )

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [projekt, setProjekt] = useState("");
    const [budget,setBudget] = useState("");
    const [textidea,setTextidea] = useState("");

const  handleSubmit = (e)=>
{
  
console.log("Imie" + "" + name + "\n" + "Email" + " " + email + "\n" + "Typ projektu"+ " " + projekt + "\n" +  "Pomysl na projekt" + " " + textidea + "\n", budget )
}
    return (
        <div className={styles.wrapper}>
    <div className={styles.left}>
        <h3>{leftsubtitle}</h3>

        <div className={styles.steps}>
        {stepsDisplay}
        </div>

        <h4 className={styles.faqTitle}>{faqsubtitle}</h4>

        <div className={styles.faq}>
           {wholefaqDisplay}
        </div>
    </div> 

 <div className={styles.right}>
        <div className={styles.div}> 
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <form className={styles.form}>
                  <div className={styles.field}>
                    <label className={styles.label}>Imię</label>
                <input type="text" name="name" placeholder="Imię" required value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                 <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                <input type="email" name="email" placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Typ Projektu</label>
                <select name="projectType" value={projekt} onChange={(e)=> setProjekt(e.target.value)}>
                    <option value="">Typ projektu</option>
                    <option value="web">Web App</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI / Automation</option>
                    <option value="other">Inne</option>
                </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Budzet</label>
                <select name="budget" value={budget} onChange={(e)=> setBudget(e.target.value)}>
                    <option value="">Budżet</option>
                    <option value="low">10 k – 40k</option>
                    <option value="medium">50 k – 90k</option>
                    <option value="high">100k+</option>
                </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Opisz swoj pomysl na projekt</label>
              <textarea
                    name="message"
                    placeholder="Opisz swój projekt..."
                    value={textidea}
                    onChange={(e)=> setTextidea(e.target.value)}
                    required
                />
                </div>
 <button type="submit" className={styles.button} onClick={()=> handleSubmit()}>
                   {ctaLabel}
                </button>
            </form>
</div>
        </div>
        </div>
    )
}