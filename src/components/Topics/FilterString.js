import React, {Component} from 'react';


export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            theOffice: ['Micheal', 'Dwight',' Pam', 'Jim','Phylis', 'Oscar'],
            userInput: '',
            filteredOffice: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredOffice(userInput) {
        var theOffice = this.state.theOffice;
        var filteredOffice = [];

        for(var i = 0; i < theOffice.lenght; i++) {
            if(theOffice[i].includes(userInput)) {
                filteredOffice.push(theOffice[i]);
            }
        }
        this.setState({filteredOffice: filteredOffice});

    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">theOffice: { JSON.stringify(this.state.theOffice, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredOffice(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">filteredOffice: { JSON.stringify(this.state.filteredOffice, null, 10) }</span>
            </div>
        )
    }
}