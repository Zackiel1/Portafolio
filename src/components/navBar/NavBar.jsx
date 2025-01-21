import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

    const [menuSwitch, setMenuSwitch] = useState(false);

    const handlerMenu = () => {
        menuSwitch === true ? setMenuSwitch(false) : setMenuSwitch(true); 
    };

    const handlerCopyText = (e) => {
        const text = e.target.innerText;
        navigator.clipboard.writeText(text)
    };

    return(
        <nav className={style.navContainer}>

            <button className={style.menuButton} onClick={handlerMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <section className={`${style.navSection} ${menuSwitch ? style.open : style.close}`}>

                <h1 className={style.tittle}>Lito<span>.</span>Dev</h1>

                <section className={style.photoSection}>
                    {/* <img src={foto} alt="" /> */}
                </section>

                    <ul className={style.navList}>
                        <li>
                            <NavLink to={{ hash: "#home" }}  onClick={handlerMenu}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ hash: "#projects" }} onClick={handlerMenu}>Proyectos</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Habilidades</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Quien Soy</NavLink>
                        </li>
                        <li>
                            <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Contacto</NavLink>
                        </li>
                        
                    </ul>

                <section className={style.contactSection}>
                    <div className={style.iconSection}>
                        <Link to="https://github.com/Zackiel1" target='blank'>
                            <FontAwesomeIcon className={style.icon} style={{ color: "#04C4D9" }} icon={faSquareGithub} />
                        </Link>
                        <Link to='https://www.linkedin.com/in/alejandro-fern%C3%A1ndez-mart%C3%ADnez-3691772aa/' target='blank'>
                            <FontAwesomeIcon className={style.icon} style={{ color: "#04C4D9" }} icon={faLinkedin} />
                        </Link>
                        <Link to='https://drive.google.com/file/d/1bQiLEIFHdJVleygbYjIiIaORbLRfv9AX/view?usp=sharing' target='blank' className={style.cv}>CV</Link>
                    </div>
                    <span alt='copy' className={style.gmail} onClick={handlerCopyText}>Alejandrozfm132@gmail.com</span>
                </section>
            </section>
  
        </nav>
    )
};

export default NavBar;