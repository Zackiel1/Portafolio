import style from './App.module.css'
import NavBar from './components/navBar/NavBar'

function App() {

  return (
    <main className={style.appContainer}>

        <nav className={style.navBar}>
        <NavBar />
        </nav>
        <section className={style.sectionContainer}>articles</section>
      
       
    </main>
  )
}

export default App
