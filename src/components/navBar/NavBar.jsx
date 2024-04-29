import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const NavBar = () => {

    return(
        <main className={style.navContainer}>

            <section className={style.photoSection}>
                {/* <img src={foto} alt="" /> */}
            </section>

            <section className={style.navSection}>
                <ul className={style.navList}>
                    <li>Inicio</li>
                    <li>Experiencia</li>
                    <li>Proyetos</li>
                    <li>Quien Soy</li>
                    <li>Contact</li>
                </ul>
            </section>

            <section className={style.contactSection}>
                <div className={style.iconSection}>
                    <FontAwesomeIcon className={style.icon} icon={faSquareGithub} />
                    <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
                    <span className={style.cv}>CV</span>
                </div>
                <span>Alejandrozfm132@gmail.com</span>
            </section>

           
            
        </main>
    )
};

export default NavBar;