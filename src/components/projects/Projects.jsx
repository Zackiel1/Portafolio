import CardsContainer from '../cardsContainer/CardsContainer';
import style from './Projects.module.css';

const Projects = () => {

    return(
        <main className={style.main}>
            <section className={style.container}>
                <h1>proyectos</h1>
                <article className={style.articles}>
                    <CardsContainer />
                </article>
            </section>
        </main>
    )
};

export default Projects;