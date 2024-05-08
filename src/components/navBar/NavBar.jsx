import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

    const [menuSwitch, setMenuSwitch] = useState(false);

    const handlerMenu = () => {
        menuSwitch === true ? setMenuSwitch(false) : setMenuSwitch(true); 
    };

    return(
        <nav className={style.navContainer}>

            <button className={style.menuButton} onClick={handlerMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <section className={`${style.navSection} ${menuSwitch ? style.open : style.close}`}>

                <h1 className={style.tittle}>LiTO.DEV</h1>

                <section className={style.photoSection}>
                    {/* <img src={foto} alt="" /> */}
                </section>

                    <ul className={style.navList}>
                        <li>
                            <NavLink to={{ hash: "#home" }} onClick={handlerMenu}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ hash: "#projects" }} onClick={handlerMenu}>Proyectos</NavLink>
                        </li>
                        <li>Quien Soy</li>
                        <li>Contact</li>
                    </ul>

                <section className={style.contactSection}>
                    <div className={style.iconSection}>
                        <FontAwesomeIcon className={style.icon} icon={faSquareGithub} />
                        <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
                        <span className={style.cv}>CV</span>
                    </div>
                    <span>Alejandrozfm132@gmail.com</span>
                </section>
            </section>
  
        </nav>
    )
};

export default NavBar;