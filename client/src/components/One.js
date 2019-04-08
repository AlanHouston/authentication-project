import React, { Component } from "react";

class One extends Component {

    componentDidMount(){
        fetch("/secureOne")
            .then(r=>r.json())
    }
    render(){
        return 
    }
}

export default One;
