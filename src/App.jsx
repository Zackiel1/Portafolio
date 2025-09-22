import { useLocation } from 'react-router-dom';
import style from './App.module.css'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = location.hash;

    if (scrollToSection) {
      
      scroller.scrollTo(scrollToSection.slice(1), {
        duration: 800,
        smooth: true,
      });
    }
  }, [location]);


  return (
    <main className={style.appContainer}> 
      <section className={style.app}>

        <nav className={style.navBar}>
            <NavBar  /> 
        </nav>

        <div className={style.components}>
            <Element name="home" >
              <Home />
            </Element>
            
            <Element name="projects">
              <Projects />
            </Element>
        </div>
            
      </section>
    </main>
  )
}

export default App;