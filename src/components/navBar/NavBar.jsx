import style from './NavBar.module.css';

const NavBar = () => {

    return(
        <main className={style.navContainer}>
            <section className={style.photoSection}>
                {/* <img src={foto} alt="" /> */}
            </section>
            <section className={style.contactSection}>
                <h3>Contacto</h3>
            </section>
            <section className={style.NavSection}>
                <h3>Nav</h3>
            </section>
        </main>
    )
};

export default NavBar;