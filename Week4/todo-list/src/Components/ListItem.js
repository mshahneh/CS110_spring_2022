import React from 'react';
import './ListItem.css';

class ListItem extends React.Component { //props, state
    constructor(props){
        super(props);
        this.state = {
            "upvote":0
        }
        this.addUpvote = this.addUpvote.bind(this);
    }

    addUpvote(){
        this.setState({
            "upvote": this.state.upvote + 1
        })
    }

    render() {
        if (this.props.depth > 2)
            return null
        let componentClass = "main";
        if (this.props.depth === 1)
            componentClass = "reply";
        if (this.props.depth === 2)
            componentClass = "replyOfReply";
        return <div className={componentClass}>
            <div className='list-item' >
            <p onClick={this.addUpvote}> {this.state.upvote}</p>
            <p> {this.props.text}</p>
            <button onClick={this.props.onDelete}> Delete </button>
            </div>
            <ListItem depth = {this.props.depth + 1} text="child"/>
        </div>
    } 
}

export default ListItem;