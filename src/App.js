import { Route,Switch } from "react-router"
import { ThemeProvider } from "styled-components"
import {lightTheme} from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from './components/Main'
import ProjectsPage from "./components/ProjectsPage"
import MySkillsPage from "./components/MySkillsPage"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"


function App() {
  return <>


  <GlobalStyle/>

  <ThemeProvider theme={lightTheme}>

  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/project" component={ProjectsPage} />
    <Route exact path="/skills" component={MySkillsPage} />
    <Route exact path="/blog" component={BlogPage} />
    
  </Switch>
  </ThemeProvider>

  </>
    
}

export default App

