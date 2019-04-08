import React, { Component } from "react";

class Three extends Component {

    componentDidMount(){
        fetch("/secureThree")
            .then(r=>r.json())
    }
    render(){
        return
    }
}

export default Three;
