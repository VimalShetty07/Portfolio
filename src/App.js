import { Route,Switch,useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import {lightTheme} from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from './components/Main'
import ProjectsPage from "./components/ProjectsPage"
import MySkillsPage from "./components/MySkillsPage"
import AboutPage from "./components/AboutPage"
// import BlogPage from "./components/BlogPage"
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subcomponents/SoundBar"



function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
    <SoundBar/>

    

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      {/* <Route exact path="/blog" component={BlogPage}/> */}
      <Route exact path="/work" component={ProjectsPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>

    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App

