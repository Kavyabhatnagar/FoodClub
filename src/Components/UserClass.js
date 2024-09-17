import { Component } from "react";

class Userclass extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log("constructor");
    }
   componentDidMount(){
    console.log("component did mount");
   }
   componentDidUpdate()
   {
    console.log("componentDidUpdate");
   }
   componentWillUnmount(){
    console.log("componentWillUnmount");
   }
    render ()
 {
    console.log("rendering");
    const {count} = this.state;
    return <div>
    <h1>helloo</h1>
    {count}
    <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click me</button>

    </div>
 }
    
}
export default Userclass;