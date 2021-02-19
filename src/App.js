import React, {Component, Fragment} from "react"
import {Route, Switch, withRouter} from "react-router-dom"
import Nav from "./Components/UI/Navigation/Nav";
import './App.css';
// import Movie from "./Routes/Movie/Movie"



import Home from "./Routes/Home";

class App extends Component {
  render(){
    return(
      <Fragment>
        <Nav/>
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/popular" component= {Home} />
            <Route exact path="/upcoming" component= {Home} />
            <Route exact path="/latest" component= {Home} />
            {/* <Route exact path="/" component= {Home} /> */}
            {/* <Route exact path="/movie" component= {Movie} /> */}
          </Switch>
      </Fragment>
    )
  }
}


export default withRouter (App);
