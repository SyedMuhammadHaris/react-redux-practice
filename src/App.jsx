import React from 'react';
import './App.css';
// import Header from './components/Header';
// //  import {Header,Logo} from './components/Header';
// import Footer from './components/footer';
// import BasicTextFields from './components/Textfield';


// class App extends React.Component{
//   render(){
//     // let name = "Haris Ahmed";
//     let firstName = "Haris";
//     let lastName = "Broo";
//     let fullName = firstName + " "+ lastName;
//     let arr = [1,2,3,4,5];
//     var person = {
//       name : "sarim",
//       age : 19
//     };

//     return(
//       <div>
//         {/* <h1>{name}</h1> */}
//         {/* <h1>{`${firstName} ${lastName}`}</h1> */}
//         <h1>{fullName}</h1>
//          <h1>Array is {arr}</h1>
//          <h1>Object : Person Name is : {person.name}</h1>
//          <h1>Object : Person Age is : {person.age}</h1>

//      </div>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//       <h2 className="header">Header Component</h2>

//       </div>
//     )
//   }
// }
// class Footer extends React.Component{
//   render(){
//     return(
//       <div>
//       <h2 className="footer">Footer Component</h2>
//       </div>
//     )
//   }
// }

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       name: "Bilal Hayat",
//       emailId: "bilal@gmail.com",
//       value: ""
//     }
//   }
//   setName = () => {
//     this.setState({
//       name: this.state.value
//     })
//   }
//   getName = () => {
//     console.log(this.state.name);
//   }

//   setValue(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     }
//     )

//   }

//   getProps = (props) => {
//     console.log("Pros===>", props);
//   }

//   render() {

//     var studentName = [{ name: "Haris" }, { name: "Ghous" },
//     { name: "Sarim" }, { name: "Mubariz" }, { name: "Fahad shamsi" }];

//     return (
//       <div>
//         <Header getProps={this.getProps} page="Home Page" name={this.state.name} email={this.state.emailId} />
//         {/* inline css in react  */}
//         <h1 className="main">Main Component</h1>
//         {/* <img src="data:image/jpeg;base64,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" 
//            alt="" width="400px"/> */}

//         <br />
//         <br />

//         <h2>My friend Name is {this.state.name}</h2>
//         <h2>My friend Email id is {this.state.emailId}</h2>

//         {/* <input type="text" placeholder="Enter Your Name" onChange ={ (e) =>this.setState({name : e.target.value}) } />
//         <input type="text" placeholder="Enter Your Name" onChange ={ (e) =>this.setState({value : e.target.value}) } /> */}


//         <input name="name" type="text" placeholder="Enter Your Name" onChange={(e) => this.setValue(e)} />
//         <input name="emailId" type="text" placeholder="Enter Your email" onChange={(e) => this.setValue(e)} />
//         <button type="button" className="btn btn-primary" onClick={this.setName}>Set Name</button>
//         <button type="button" className="btn btn-primary" onClick={this.getName}>Get Name</button>
//         <br />
//         <br />
//         <BasicTextFields />


//         <Footer name="Car" price="100000" />
//         <Footer name="Bike" price="20000" />
//         <Footer name="Car" price="300000" />

//         <ol>
//           {
//             studentName.map((item, index) => {
//               //  console.log(item.name);
//               //  console.log(index);
//               return <h1><li key={index}>{item.name}</li></h1>
//             })
//           }
//         </ol>


//       </div>
//     )
//   }
// }

// export default App;


// ----- Todo App In React JS--------- 


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       // todos: ["Cricket", "football", "Baseball"],
//       todos: [{ title: "Cricket", edit: false }, { title: "Hockey", edit: false }],
//       value: ''
//     }
//   }

//   addTodo = () => {
//     //  this.state.todos.push(this.state.value);
//     let obj = { title: this.state.value }
//     this.setState({
//       //  todos : this.state.todos
//       todos: [...this.state.todos, obj],
//       value: '',



//     })
//     // console.log(this.state.todos);

//   }
//   deletAll = () => {
//     this.setState({
//       todos: []
//     })
//   }

//   deleteTodo = (index) => {
//     // console.log(index);
//     this.state.todos.splice(index, 1)
//     this.setState({
//       todos: this.state.todos
//     })
//   }

//   editTodo = (index, val) => {
//     // console.log(index);     
//     // var updatedValue = prompt("Enter Edit todo");
//     //  this.state.todos[index] = updatedValue
//     //  this.setState({
//     //   todos : this.state.todos
//     // })

//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos
//     })

//   }
//   handleChange = (e, index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos
//     })

//   }

//   updateValue = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos
//     })
//   }

//   render() {
//     let { todos, value } = this.state;
//     return (
//       <div>
//         <h1>Todo App in React JS</h1>

//         <input value={value} onChange={(e) => this.setState({ value: e.target.value })} type="text" placeholder="Enter todos" />
//         <button onClick={this.addTodo}>Add Item</button>
//         <button onClick={this.deletAll}>Delete All</button>


//         <br />
//         <br />

//         <ul>
//           {todos.map((v, i) => {
//             return <li key={i}>
//               {v.edit ? <input value={v.title} type="text" onChange={(e) => this.handleChange(e, i)} /> : v.title}
//               {v.edit ?
//                 <button onClick={() => this.updateValue(i)}>Update</button>
//                 :
//                 <button onClick={() => this.editTodo(i, v.title)}>Edit</button>
//               }
//               <button onClick={() => this.deleteTodo(i)}>Delete</button>

//             </li>

//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App;


// ------------Practice Of React Router---------------

// import AppRouter from './config/router'

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <AppRouter/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- Lifecycle method in React JS (old React)-----


// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       count : 0
//       // data : []
//     }
//     console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps");
//     return{
//       count : 5 
//     }
//   }

//   // componentDidMount(){
//   //   console.log("componentDidMount");

//   //   //Is Pe hum Data mangwa sakte hain api kethrough kyun ke ye render ke baad chalta hai

//   //   fetch('https://jsonplaceholder.typicode.com/todos')
//   // .then(response => response.json())
//   // // .then(json => console.log(json))
//   //   .then(data => 
//   //     // console.log("Data =>",data)
//   //     this.setState({
//   //       data : data
//   //     })
//   //     )
//   //  .catch(err => console.log(err))
//   // }


//   render(){
//     // console.log('Render');
//     // console.log("data",this.state.data);
//     return(
//       <div style={{textAlign:'center'}}>
//         <h1>
//           React Lifecycle Methods
//         </h1>
        
//           {/* {this.state.data.map((v,i) => {
//              return <p key={i}>{`${v.title} ${v.id}`}</p>
//           })} */}

//         <h2>{this.state.count}</h2>
            
      
//       </div>
//     )
//   }
// }

// export default App;



// -------------Redux in React JS-------------
//Redux is use to create state available for whole react app

import { connect } from 'react-redux';
import { setData } from './store/action/index'
 

class App extends React.Component{
  render(){
    console.log("Redux Data => ",this.props);
    return(
      <div>
        <h1>Redux in React JS</h1>
        <br/><br/>
        <button onClick={()=> this.props.setData("Data also goes to redux store from here main component")}>Set Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username : state.auth.username,
  gmail : state.auth.gmail,
  app_name : state.app.app_name,

  // email : "haris@gmail.com"
  
})

const mapDispatchToProps = (dispatch) =>({

  //here we create function 

  setData : (data)=> dispatch(setData(data)) // dispatch is used to connect this function from redux 

})
export default connect(mapStateToProps,mapDispatchToProps)(App);





