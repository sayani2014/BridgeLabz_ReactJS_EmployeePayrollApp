import React from "react";
import './dashboard.css';

export default class Dashboard extends React.Component {
    employeeCount = 10;
             
    render() {
        return(
            <div>
                <div class="main-content">
                    <div class="header-content">

                        <div class="emp-detail-text">
                            Employee Details

                            {/* Returns the employee count from the database */}
                            <div class="emp-count">{this.employeeCount}</div>
                        </div>

                        {/* Add button
                            When clicked the add component page is rendered.
                         */}
                         
                        <a class="add-button">
                            <img src="/assets/icons/add-24px.svg" alt=""/>Add User
                        </a>
                    </div>

                    {/* Contains the table structure of the employee details
                        When the get method is hit in the HTTP server, the employee details get populated in the tabular form.
                     */}
                    <div class="table-main">
                        <table id ="display" class="table">
                            <tr>
                                {/* Table header */}
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}