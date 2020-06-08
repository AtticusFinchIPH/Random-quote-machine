import React from 'react';
import './QuoteMachine.css';

class QuoteMachine extends React.Component{
    render(){
        return(
            <div id='quote-box'>
                <div id='quote-show'>
                    <div><i className='fa fa-quote-left'> </i><span id='text'>Text</span></div>
                    <div id='author'>- <span>author</span></div>
                </div>
                <div id='quote-actions'>
                    <a id='tweet-quote' className='button' title="Tweet this quote!" target="_blank" href='https://twitter.com/intent/tweet'><i className="fa fa-twitter"></i></a>
                    <button id='new-quote'>New Quote</button>
                </div>
                
            </div>
        )
    }
}

export default QuoteMachine;