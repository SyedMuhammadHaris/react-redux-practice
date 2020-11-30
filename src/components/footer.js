import React from 'react';

// export default class Footer extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/* <h2>Footer Component in Seprate File</h2> */}

//                 <h3>{this.props.name}</h3>
//                 <h3>{this.props.price}</h3>
//             </div>
//         )
//     }
// }
import {Link } from "react-router-dom";

export default class About extends React.Component{

    goToHome = () =>{
        // console.log(this.props);
        this.props.history.push('/')
    }
    render(){ 
      return(
          <div>
        <h2>About Page</h2>
        {/* <Link to="/">Go to Home  Page</Link> */}

          <button onClick={this.goToHome}>Go to Home</button>
        </div>
      )
    }
  } 