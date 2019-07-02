import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getEmployeeList } from '../actions/index';

class EmployList extends Component{

//componentwillmount
    componentWillMount(){
        this.props.getEmployeeList();
    }
    //renderData
        renderData(){
            return this.props.employeeData.map((employ, index) => (
                <tr key={index}>
                  <th scope="row">{employ.id}</th>
                  <td>{employ.name}</td>
                  <td>{employ.age}</td>
                  <td>{employ.gender}</td>
                  <td>{employ.email}</td>
                  <td>{employ.phoneNo}</td>   
                </tr>
              ))}
    
//render
render(){
return(
//employee-list
 <div class="employee-list m-5">
    <h2 class="text-center mb-3">Employee List</h2>
    {/* table */}
     <table className="table table-striped table-dark">
      <thead>
        <tr>
         <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
    </tr>
  </thead>
  <tbody>
  {this.renderData()}
  </tbody>
</table>
{/* table end */}
</div>
//employee-list end
        )
    }
}

//mapStateToProps
function mapStateToProps(state){
    return {
        employeeData :state.employee.employeeData,
        isLoggedIn:state.Auth.isLoggedIn
          }
       }

// export EmployList
export default connect(mapStateToProps, { getEmployeeList })(EmployList);;