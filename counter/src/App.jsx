import React from "react";
import { Component } from "react";
import "./global.css"

export default class Sagar extends Component{

    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleReset=this.handleReset.bind(this)
    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }

    // handleReset=()=>{
    //     this.setState({count:0})
    // }
    handleReset =function(){
        this.setState({count:0})
    }


    render()

    {
        return(
            <>
            <div className="mainBlock">
                <h1>count={this.state.count}</h1>
                <div className="btngroup">
                    <button onClick={this.handleIncrement}> + INCREMENT</button>
                    <button onClick={this.handleDecrement}> - DECREMENT</button>
                    {/* <button onClick={this.handleReset.bind(this)}> RESET </button> */}
                    <button onClick={this.handleReset}> RESET </button>
                </div>
            </div>
            </>
        )
    }
}