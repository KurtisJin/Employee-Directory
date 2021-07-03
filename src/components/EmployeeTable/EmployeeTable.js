import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard"
import Navbar from "../Navbar/Navbar"
import API from "../utils/API"

class EmployeeTable extends Component {

    state = {
        aToz: true,
        ascending: true,
        employeeListing: [],
       
    }

    
    componentDidMount() {
        API.randomUser().then(res => {
            console.log(res.data.results)
            this.setState(
                   { employeeListing : res.data.results}

            )
        })
        .catch(err => console.log(err));
        }
    


    sortByName = () => {
        let sort = [];
        console.log(this.state.employeeListing)
        if(this.state.ascending){
        sort = this.state.employeeListing.sort((a, b) => {
            let alphaA = a.name.last.toLowerCase();
            let alphaB = b.name.last.toLowerCase();
            if(alphaA < alphaB) {
                return -1
            } else if (alphaA > alphaB) {
                return 1 
            }else {
                return 0;
            }
            
         }); 
         
         this.setState({
             ascending:false
         })
        }
        else{
            sort = this.state.employeeListing.sort((a, b) => {
                let alphaA = a.name.last.toLowerCase();
                let alphaB = b.name.last.toLowerCase();
                if(alphaA < alphaB) {
                    return 1
                } else if (alphaA > alphaB) {
                    return -1
                }else {
                    return 0;
                }
                
             }); 
            this.setState({
                ascending:true
            })
        }
    }

    sortByAge = () => {
        let sort = [];
        console.log(this.state.employeeListing)
        if(this.state.ascending){
        sort = this.state.employeeListing.sort((a, b) => {
            let alphaA = a.dob.age;
            let alphaB = b.dob.age;
            if(alphaA < alphaB) {
                return -1
            } else if (alphaA > alphaB) {
                return 1 
            }else {
                return 0;
            }
            
         }); 
         
         this.setState({
             ascending:false
         })
        }
        else{
            sort = this.state.employeeListing.sort((a, b) => {
                let alphaA = a.dob.age;
                let alphaB = b.dob.age;
                if(alphaA < alphaB) {
                    return 1
                } else if (alphaA > alphaB) {
                    return -1
                }else {
                    return 0;
                }
                
             }); 
            this.setState({
                ascending:true
            })
        }
    }

    render() {
        return (
            <div>
            <Navbar />
            <table className="table">
                <thead>
            <tr>
                    <th scope="col">Photo</th>
                    <th scope="col"onClick={this.sortByName} className="name">Name </th>
                    <th scope="col"onClick={this.sortByAge} className="age">Age</th>
                    <th scope="col">Phone</th>
                    <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.employeeListing.length > 0 &&
                    this.state.employeeListing.map((item, index) => (

                            <EmployeeCard
                                image={item.picture.medium}
                                first={item.name.first}
                                last={item.name.last}
                                title={item.name.title}
                                gender={item.gender}
                                age={item.dob.age}
                                phone={item.cell}
                                email={item.email}
                                key={item.email}
                            />
                    ))
                }
                </tbody>
            </table>
            </div>
        );
    }

}




export default EmployeeTable

