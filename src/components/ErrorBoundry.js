import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundry extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error,erroInfo){
        console.log(error + erroInfo)
    }
    render(){
        if(this.state.hasError){
           return <>
           <div style={{padding:'50px',width:'100%',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
            <img height="200" width="200" src="https://res.cloudinary.com/dwl4ftefk/image/upload/v1663938059/6029646_mvlddx.jpg"></img>
            <h1>Something went wrong !</h1>
            <a className="dark-btn" href='/'>Goback</a>
           </div>
           
           </>
        }
        return this.props.children
    }
}