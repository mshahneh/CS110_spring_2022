import React from 'react';
import './Card.css';

class Card extends React.Component { // has a state and props
    logContent() { 
        console.log("Event is fired"); 
        this.setState({
            "text": this.state.text + " !"
        })
    }
    constructor(props) { 
        super(props); 
        this.logContent = this.logContent.bind(this);
        this.state = {
            "text": "Mehrnaz",
            "vote": 5
        }
    }
    render() {
        if (this.props.depth === 0)
            return null
        let classname ="post";
        if (this.props.depth == 2)
            classname = "reply"
        if (this.props.depth == 1)
            classname = "replytoreply"
        return (
            <div className={classname}>
                <p> {this.state.text} </p> 
                <div onClick={this.logContent}>Hi</div>
                <a href="google.com"> salam</a>
                <Card depth={this.props.depth - 1}/>
            </div>
        );
    }
}
export default Card;