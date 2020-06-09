import React from 'react';
import './QuoteMachine.css';
import $ from 'jquery'

let quotesData;

function getQuotes() {
    return $.ajax({
        headers: {
          Accept: "application/json"
        },
        url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function(jsonQuotes) {
          if (typeof jsonQuotes === 'string') {
            quotesData = JSON.parse(jsonQuotes);
            console.log('quotesData');
            console.log(quotesData);
          }
        }
      });
}

class QuoteMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: "Hello There!",
            author: "Here",
        }
        this.newQuote = this.newQuote.bind(this);
        this.getQuote = this.getQuote.bind(this);
    }
    newQuote(){
        this.getQuote();
    }
    getQuote(){
        let num = Math.floor(Math.random() * quotesData.quotes.length);
        let newQuote = quotesData.quotes[num];
        this.setState({
            quote: newQuote.quote,
            author: newQuote.author
        })
    }
    render(){
        getQuotes();
        return(
            <div id='quote-box'>
                <div id='quote-show'>
                    <div><i className='fa fa-quote-left'></i> <span id='text'>{this.state.quote}</span></div>
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