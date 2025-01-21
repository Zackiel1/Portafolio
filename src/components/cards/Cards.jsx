import Skills from "../skills/Skills";
import style from "./Cards.module.css";

const Cards = (props) => {
    
    return(
        <main key={props.id} className={style.container}>
            <img className={style.image} src={props.image} alt={props.name}/>
            <section className={style.sectionContainer}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>

                <div>
                    <Skills />
                </div>

                <div>
                    <span>GITHUB</span>
                    <span>SITE WEB</span>
                </div>
            </section>
        </main>
    )
};

export default Cards;