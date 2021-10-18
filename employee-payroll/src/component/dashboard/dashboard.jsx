import React, { Component } from 'react';
import './dashboard.css';
const httpService = require('../../service/employee-service/employee');

export default class dashboard extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        httpService.getAllEmployees().then(data => {
            this.employeeCount = data.data.data.length;
            this.setState({ employees : data.data.data });
        });
    }

    remove(id) {
        httpService.deleteEmployee(id).then(data => {
          this.componentDidMount();      
        });
    }
             
    render() {
        return(
            <div>
                <div className="main-content">
                    <div className="header-content">

                        <div className="emp-detail-text">
                            Employee Details
                            <div className="emp-count">{this.employeeCount}</div>
                        </div>
                         
                        <a className="add-button" href="/add-employee">
                            <img src="/assets/icons/add-24px.svg" alt="" />Add User
                        </a>
                    </div>

                    <div className="table-main">
                        <table id ="display" className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        (employee) =>
                                        <tr key = {employee.empId}>
                                            <td>
                                                <img className="profile" src={employee.profilePic} alt="" />
                                            </td>
                                            <td> { employee.empName } </td>
                                            <td> { employee.empGender } </td>
                                            <td> 
                                                { employee.department
                                                    .map(
                                                        (dept) => 
                                                            <div className="dept-label">
                                                                {dept}  
                                                            </div>
                                                    ) 
                                                }
                                            </td>
                                            <td> { employee.empSalary } </td>
                                            <td> { employee.startDate } </td>
                                            <td>
                                                <img id={employee.empId} onClick={ () => this.remove(employee.empId)}
                                                    src="../assets/icons/delete-black-18dp.svg"
                                                    alt="delete" />
                                                <img id={employee.empId} click="this.update(employee)"
                                                    src="../assets/icons/create-black-18dp.svg" alt="edit" />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}