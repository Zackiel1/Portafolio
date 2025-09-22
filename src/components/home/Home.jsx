import style from './Home.module.css';

const Home = () => {

    return(
        <main className={style.main}>
            <section className={style.container}>
                <h2>Alejandro Fernandez</h2>
                <h1>Desarrollador Web</h1>
                <p>Full Stack</p>
                <h4>CABA - Argentina</h4>
            </section>
        </main>
    )
};

export default Home;