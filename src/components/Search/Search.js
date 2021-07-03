import React from "react";


class Search extends React.Component {

    state = {
        search: "",
        searchedEmployees: []
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });

        
    }

    render () {
            return (

                <form className="d-flex">          
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => this.handleInputChange(event)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            )
        }
}

export default Search;