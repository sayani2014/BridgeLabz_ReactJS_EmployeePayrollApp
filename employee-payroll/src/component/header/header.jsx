import React from "react";
import './header.css';

export default class Header extends React.Component {
    
    render() {
        return(
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src="/assets/images/logo.png" alt="Logo" />
                        <div className="logo-text-content">
                            <span className="emp-text">EMPLOYEE</span>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}