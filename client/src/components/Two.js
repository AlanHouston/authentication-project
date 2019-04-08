import React, { Component } from "react";

class Two extends Component {

    componentDidMount(){
        fetch("/secureTwo")
            .then(r=>r.json())
    }
    render(){
        return
    }
}

export default Two;
