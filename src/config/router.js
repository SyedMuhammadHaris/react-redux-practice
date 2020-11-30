import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../components/Header'
import Footer from '../components/footer'

class ApprRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Header} />
                <Route path="/about" component={Footer} />
            </Router>
        )
    }
}
export default ApprRouter;