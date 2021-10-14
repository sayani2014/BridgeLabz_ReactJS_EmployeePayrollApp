import React from "react";
import './header.css';

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <header class="header-content header">
                    <div class="logo-content">
                        <img src="/assets/images/logo.png" alt="Logo Image" />
                        <div class="logo-text-content">
                            <span class="emp-text">EMPLOYEE</span>
                            <span class="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}