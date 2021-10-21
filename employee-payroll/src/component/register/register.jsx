import * as React from "react";
import './register.css';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const httpService = require('../../service/employee-service/employee');

function valuetext(value) {
    return `${value}`;
}

export default class Register extends React.Component {
  
    constructor(props) {
        super(props)

        this.state = {
            empName: '',
            department: [],
            profilePic: '',
            empGender: '',
            empSalary: '',
            startDate: new Date(),
            note: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeProfilePicHandler = this.changeProfilePicHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    
    changeNameHandler = (e) => {
        this.setState({
            empName: e.target.value
        });
    }

    changeProfilePicHandler = (e) => {
        this.setState({
            profilePic: e.target.value
        });
    }

    changeGenderHandler = (e) => {
        this.setState({
            empGender: e.target.value
        });
    }

    changeDepartmentHandler = (e) => { 
        var item = e.target.value; 
        if(e.target.checked) {
            this.setState(prevState => ({ department: [...prevState.department, item] })); 
        }
    }

    changeSalaryHandler = (e) => {
        this.setState({
            empSalary: e.target.value
        });
    }

    changeNoteHandler = (e) => {
        this.setState({
            note: e.target.value
        });
    }

    changeStartDateHandler = (date) => {
        this.setState({
            startDate: date 
        });
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            empName: this.state.empName,
            profilePic: this.state.profilePic,
            empGender: this.state.empGender,
            department: this.state.department,
            empSalary: this.state.empSalary,
            startDate: this.state.startDate,
            note: this.state.note,
        }
       
        httpService.addEmployee(employee).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
        this.props.history.push('/');
    }

    resetForm = () => {
        this.setState({
            empName: '',
            department: [],
            profilePic: '',
            empGender: '',
            empSalary: '',
            startDate: new Date(),
            note: '',
        });
    }

    departments = [
        {
          name:"HR"
        },
        {
          name:"Sales"
        },
        {
          name:"Finance"
        },
        {
          name:"Engineer"
        },
        {
          name:"Other"
        },
    ]

    render() {
        return(
            <div class="form-content">
                <form className="form">
                    <div className="form-head">
                        Employee Payroll form 
                    </div>
                        
                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Name</FormLabel>
                        <TextField fullWidth id="outlined-basic" label="Your Name" size="small" variant="outlined" 
                                        value={this.state.empName} onChange={this.changeNameHandler} />
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Profile Image</FormLabel>
                        <div className="profile-radio-content">
                            <RadioGroup row aria-label="profile" name="row-radio-buttons-group" value={this.state.profilePic} onChange={this.changeProfilePicHandler}>
                                    <FormControlLabel name="profile" control={<Radio />} value="../assets/profile-images/Ellipse -3.png" label= {
                                        <img className="profile" id='image1' src="/assets/profile-images/Ellipse -3.png" alt='' /> }
                                    />
                                    <FormControlLabel name="profile" control={<Radio />} value="../assets/profile-images/Ellipse 1.png" label= {
                                        <img className="profile" id='image2' src="/assets/profile-images/Ellipse 1.png" alt='' /> }
                                    />
                                    <FormControlLabel name="profile" control={<Radio />} value="../assets/profile-images/Ellipse -8.png" label= {
                                        <img className="profile" id='image3' src="/assets/profile-images/Ellipse -8.png" alt='' /> }
                                    />
                                    <FormControlLabel name="profile" control={<Radio />} value="../assets/profile-images/Ellipse -7.png" label= {
                                        <img className="profile" id='image4' src="/assets/profile-images/Ellipse -7.png" alt='' /> }
                                    />
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={this.state.empGender} onChange={this.changeGenderHandler}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Department</FormLabel>
                        { this.departments.map( (department, i) =>
                                <FormControlLabel control={<Checkbox />} label={department.name} key={i}
                                        value={department.name} onChange={this.changeDepartmentHandler} />
                        )}
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Choose your Salary</FormLabel>
                        <Box sx={{ width: 1000 }}>
                        <Slider 
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1000}
                            min={300000}
                            max={500000} value={this.state.empSalary} onChange={this.changeSalaryHandler}
                        />
                        </Box>
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Start Date</FormLabel> 
                        <DatePicker 
                            filterDate={d => {
                                return new Date() > d;
                            }}
                            selected={ this.state.startDate }
                            onChange={ this.changeStartDateHandler }
                        />
                    </div> 

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Notes</FormLabel>
                        <TextField fullWidth 
                            id="outlined-multiline-static"
                            label="Notes"
                            multiline
                            rows={4} value={this.state.note} onChange={this.changeNoteHandler}
                        />
                    </div>


                    <div className="buttonParent">
                        <Button component={Link} to="/" variant="outlined" className="button cancelButton">Cancel</Button>
                        <div className="submit-reset">
                            <Button variant="outlined" className="button submitButton" onClick={this.saveEmployee}>Submit</Button> &nbsp;&nbsp;&nbsp;
                            <Button variant="outlined" className="button resetButton" onClick={this.resetForm}>Reset</Button>
                        </div> 
                    </div>
                    
                 </form>
            </div>
        )
    }
}