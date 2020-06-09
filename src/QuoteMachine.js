import React from 'react';
import './QuoteMachine.css';

const quoteList = [
    {
        text: "Hello World!",
        author: "Anonymous"
    },
    {
        text: "I love JS",
        author: "Anfred Nobel"
    },
    {
        text: "I'm hungry",
        author: "Emmanuel Macron"
    }
]

class QuoteMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Hello There!",
            author: "Here",
        }
        this.newQuote = this.newQuote.bind(this);
    }
    newQuote(){
        let num = Math.floor(Math.random() * 3);
        let newQuote = quoteList[num];
        this.setState({
            text: newQuote.text,
            author: newQuote.author
        })
    }
    render(){
        return(
            <div id='quote-box'>
                <div id='quote-show'>
                    <div><i className='fa fa-quote-left'></i> <span id='text'>{this.state.text}</span></div>
                    <div id='author'>- <span>{this.state.author}</span></div>
                </div>
                <div id='quote-actions'>
                    <a id='tweet-quote' className='button' title="Tweet this quote!" target="_blank" rel='noopener noreferrer' href='https://twitter.com/intent/tweet'><i className="fa fa-twitter"></i></a>
                    <button id='new-quote' onClick={this.newQuote}>New Quote</button>
                </div>
                
            </div>
        )
    }
}

export default QuoteMachine;