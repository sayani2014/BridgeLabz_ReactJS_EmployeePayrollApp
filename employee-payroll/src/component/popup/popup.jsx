import React from 'react';
import '../register/register';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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

export default function Popup({ openDailogB, employee, closeD })  {
   
    const departments = [
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

    const { empName, department, profilePic, empGender, empSalary, startDate, note } = employee || {};

    const [name,setEmpName] = React.useState(empName);
    const [dept,setDepartment] = React.useState(department);
    const [profile,setProfilePic] = React.useState(profilePic);
    const [gender,setGender] = React.useState(empGender);
    const [salary,setSalary] = React.useState(empSalary);
    const [date,setStartDate] = React.useState(new Date(startDate));
    const [notes,setNote] = React.useState(note);

    const handleClose = () => {
        closeD();
    };

    const editEmployee = (e) => {
        e.preventDefault();
        let employeeDetails = {
            empName: name,
            profilePic: profile,
            empGender: gender,
            department: dept,
            empSalary: salary,
            startDate: date,
            note: notes,
        }
        console.log(employeeDetails);
        // httpService.updateEmployee(employeeDetails).then((data) => {
        //     console.log(data);
        // }).catch((error) => {
        //     console.log(error);
        // })
        closeD();
    }

    React.useEffect( () => {
        setEmpName(empName)
    },[empName])

    React.useEffect( () => {
        setDepartment(department)
    },[department])

    React.useEffect( () => {
        setProfilePic(profilePic)
    },[profilePic])

    React.useEffect( () => {
        setGender(empGender)
    },[empGender])

    React.useEffect( () => {
        setSalary(empSalary)
    },[empSalary])

    React.useEffect( () => {
        setStartDate(startDate)
    },[startDate])

    React.useEffect( () => {
        setNote(note)
    },[note])

    const editNameHandler = (e) => {
        setEmpName(e.target.value)
    }

    const editDepartmentHandler = (e) => {
        var item = e.target.value; 
        if(e.target.checked) {
            setDepartment(...item); 
        }
    }

    const editProfileHandler = (e) => {
        setProfilePic(e.target.value)
    }

    const editGenderHandler = (e) => {
        setGender(e.target.value)
    }

    const editSalaryHandler = (e) => {
        setSalary(e.target.value)
    }

    const editStartDateHandler = (e) => {
        setStartDate(e)
    }

    const editNoteHandler = (e) => {
        setNote(e.target.value)
    }

    return(
        <div>
            <Dialog fullWidth maxWidth="md" open={openDailogB} onClose={handleClose}>
                <DialogTitle>Edit Employee Form</DialogTitle>
                <DialogContent>
                    <div className="row-content row-content1">
                        <FormLabel component="legend" className="label text">Name</FormLabel>
                        <TextField fullWidth id="outlined-basic" label="Your Name" size="small" variant="outlined" 
                                value={name} onChange={editNameHandler}/>
                    </div>                  
               
                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Profile Image</FormLabel>
                        <div className="profile-radio-content">
                            <RadioGroup row aria-label="profile" name="row-radio-buttons-group" value={profile} onChange={(e) => editProfileHandler(e)}>
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
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={gender} onChange={(e) => editGenderHandler(e)}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Department</FormLabel>
                        { departments.map( (department, i) =>
                                <FormControlLabel control={<Checkbox />} label={department.name} key={i} 
                                        value={dept} onChange={(e) => editDepartmentHandler(e)}/>
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
                            max={500000} value={salary} onChange={(e) => editSalaryHandler(e)}
                        />
                        </Box>
                    </div>

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Start Date</FormLabel> 
                        <DatePicker
                            filterDate={d => {
                                return new Date() > d;
                            }}
                            selected={new Date(date)}
                            onChange={(e) => editStartDateHandler(e)}
                        />
                    </div> 

                    <div className="row-content">
                        <FormLabel component="legend" className="label text">Notes</FormLabel>
                        <TextField fullWidth 
                            id="outlined-multiline-static"
                            label="Notes"
                            multiline
                            rows={4} value={notes} onChange={(e) => editNoteHandler(e)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button> 
                    <Button onClick={editEmployee}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )   
}