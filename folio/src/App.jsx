import "./App.css"
import Atharv from "./components/atharv"
import Intro from "./components/intro"
import Navbar from "./components/navbar"
import Project from "./components/project"
import Social from "./components/social"
import Stack from "./components/stack"
import Extras from "./components/extras"
import Contactme from "./components/contact"

function App() {
  return (
    <>
      <Navbar />
      <Atharv />
      <Intro />
      <Social/>
      <Stack/>
      <Project/>
      <Extras/>
      <Contactme/>
    </>
  )
}

export default App