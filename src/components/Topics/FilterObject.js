import React, {Component} from 'react';


export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            minerals: [
                {
                    hardness: 4,
                    color: 'Green',
                    specificGrabity: 3,
                },
                {
                    hardness: 9,
                    luster: 'Metallic',
                },
                {
                    fracture: 'fibrous',
                    crystalSystem: 'Orthorhombic'
                }
            ],

            userInput: '',
            filteredMinerals: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredMinerals(v){
        var minerals = this.state.minerals;
        var filteredMinerals = [];

        for(var i = 0; i < minerals.length; i ++){
            if(minerals[i].hasOwnProperty(v)) {
                filteredMinerals.push(minerals[i]);
            }
        }

        this.setState({filteredMinerals: filteredMinerals});
    }


    render() {
        return(
            <div className='puzzleBox filterObjectsPB'>
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.minerals, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredMinerals(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredMinerals, null, 10) }</span>
                {/* what the 'null, 10' for? */}
            </div>
        )
    }
}