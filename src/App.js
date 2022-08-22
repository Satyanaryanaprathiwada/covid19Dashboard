import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vaccination from './components/Vaccination'
import NotFound from './components/NotFound'
import StateWiseCases from './components/StateWiseCases'
import './App.css'

const App = () => {
  document.title = 'Covid19Dashboard'
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/state/:stateCode" component={StateWiseCases} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  )
}
export default App
