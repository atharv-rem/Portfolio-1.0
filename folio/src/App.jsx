import "./App.css"
import Atharv from "./components/atharv"
import Intro from "./components/intro"
import Navbar from "./components/navbar"
import Social from "./components/social"
import Stack from "./components/stack"

function App() {
  return (
    <>
      <Navbar />
      <Atharv />
      <Intro />
      <Social/>
      <Stack/>
    </>
  )
}

export default App