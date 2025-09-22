import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faScrewdriverWrench, faHouse, faFolderTree, faAddressCard, faEnvelope, faFile, faAt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

    const [menuSwitch, setMenuSwitch] = useState(false);

    const handlerMenu = () => {
        menuSwitch === true ? setMenuSwitch(false) : setMenuSwitch(true); 
    };

    const handlerCopyText = (e) => {
        // const text = e.target.innerText;
        const text = e.target.dataset.text;
        console.log(text);
        
        navigator.clipboard.writeText(text)
    };

    return(
        // <nav className={`${style.navContainer} ${menuSwitch ? style.open : style.close}`}>

        //     <button className={style.menuButton} onClick={handlerMenu}>
                
        //     </button>

        //     <section className={`${style.navSection} ${menuSwitch ? style.openOpacityMenu : style.closeOpacityMenu}`}>

        //         <h1 className={style.tittle}>Lito<span>.</span>Dev</h1>

        //         <section className={style.photoSection}>
        //             {/* <img src={foto} alt="" /> */}
        //         </section>

        //             <ul className={style.navList}>
        //                 <li>
        //                     <NavLink to={{ hash: "#home" }}  onClick={handlerMenu}>Inicio</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={{ hash: "#projects" }} onClick={handlerMenu}>Proyectos</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Habilidades</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Quien Soy</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to={{ hash: "#" }} onClick={handlerMenu}>Contacto</NavLink>
        //                 </li>
                        
        //             </ul>

        //         <section className={style.contactSection}>
        //             <div className={style.iconSection}>
        //                 <Link to="https://github.com/Zackiel1" target='blank'>
        //                     <FontAwesomeIcon className={style.icon} style={{ color: "#04C4D9" }} icon={faSquareGithub} />
        //                 </Link>
        //                 <Link to='https://www.linkedin.com/in/alejandro-fern%C3%A1ndez-mart%C3%ADnez-3691772aa/' target='blank'>
        //                     <FontAwesomeIcon className={style.icon} style={{ color: "#04C4D9" }} icon={faLinkedin} />
        //                 </Link>
        //                 <Link to='https://drive.google.com/file/d/1bQiLEIFHdJVleygbYjIiIaORbLRfv9AX/view?usp=sharing' target='blank' className={style.cv}>CV</Link>
        //             </div>
        //             <span alt='copy' className={style.gmail} onClick={handlerCopyText}>Alejandrozfm132@gmail.com</span>
        //         </section>
        //     </section>
  
        // </nav>
        <nav className={style.navContainer}>
            <h2 className={style.tittleNav}>Lito<span>.</span><br/>Dev</h2>

            <div className={style.photoSection}></div>

            <ul className={style.navList}>

                <li>
                    <NavLink to={{ hash: "#home" }} className={style.iconMenu} ><FontAwesomeIcon icon={faHouse} /></NavLink>
                    <NavLink to={{ hash: "#home" }} className={style.letterMenu}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={{ hash: "#projects" }} className={style.iconMenu}><FontAwesomeIcon icon={faFolderTree} /></NavLink>
                    <NavLink to={{ hash: "#projects" }} className={style.letterMenu}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to={{ hash: "#" }} className={style.iconMenu}><FontAwesomeIcon icon={faScrewdriverWrench} /></NavLink>
                    <NavLink to={{ hash: "#" }} className={style.letterMenu}>Habilidades</NavLink>
                </li>
                <li>
                    <NavLink to={{ hash: "#" }} className={style.iconMenu}><FontAwesomeIcon icon={faAddressCard} /></NavLink>
                    <NavLink to={{ hash: "#" }} className={style.letterMenu}>Quien Soy</NavLink>
                </li>
                <li>
                    <NavLink to={{ hash: "#" }} className={style.iconMenu}><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                    <NavLink to={{ hash: "#" }} className={style.letterMenu}>Contacto</NavLink>
                </li>

            </ul>

            <section>
                <div className={style.iconsContactContainer}>
                    <Link alt='GitHub' to="https://github.com/Zackiel1" target='blank'>
                        <FontAwesomeIcon className={style.iconContact} style={{ color: "#04C4D9" }} icon={faSquareGithub} />
                    </Link>
                    <Link alt='Linkedin' to='https://www.linkedin.com/in/alejo-zfm' target='blank'>
                        <FontAwesomeIcon className={style.iconContact} style={{ color: "#04C4D9" }} icon={faLinkedin} />
                    </Link>
                    <Link alt="cv" to='https://drive.google.com/file/d/1Bv0YCLqn4JJYFG8lqGLIxou3TrbZZRR6/view?usp=drive_link' target='blank'>
                        <FontAwesomeIcon className={style.iconContact} style={{ color: "#04C4D9" }} icon={faFile} />
                    </Link>
                    {/* <Link to='https://drive.google.com/file/d/1bQiLEIFHdJVleygbYjIiIaORbLRfv9AX/view?usp=sharing' target='blank' className={style.cv}>CV</Link> */}
                    <FontAwesomeIcon alt='Copy Email'className={style.iconContact} data-text='Alejandrozfm132@gmail.com' onClick={handlerCopyText} style={{ color: "#04C4D9" }} icon={faAt} />    
                </div>

            </section>
        </nav>
    )
};

export default NavBar;