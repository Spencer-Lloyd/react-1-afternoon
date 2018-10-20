import React, {Component} from 'react';


export default class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    assignEvenAndOdds(userInput) {
        var userInputArr = userInput.split(','); 
        // this will turn the inputed data into an array for us
        var evens = [];
        var odds = [];
        // I'm still not quite sure why we need these extra arrays
        for (var i = 0; i < userInputArr.length; i ++){
            if (userInputArr[i] % 2 === 0){
                evens.push(userInputArr[i]);
            }
            else {
                odds.push(userInputArr[i]);
            }
        }
        // figure out why I need this step - instead of just pushing my new arrays from the if/else statements
        // I think it has something to do with the setState business
        // **** this step helps let React know that the state needs to be changed. Without it the systme would be confused or something and not know if we need to change the State or set the State
        this.setState({evenArray: evens, oddArray: odds});
    }

    render() {
        return(
        <div className= 'puzzleBox evenAndOddPB'>
           <h4> Evens and Odds </h4>
           <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
           <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
           <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray) }</span>
           <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray) }</span> 
        </div>
        )
    }
}