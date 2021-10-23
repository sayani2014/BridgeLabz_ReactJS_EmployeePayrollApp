const httpService = require('../axios-service/axios');

exports.getAllEmployees = () => {
  return  httpService.getService('getEmployeeDetails');
}

exports.addEmployee = (data) => {
  let  httpHeader = { headers: {
      'Content-Type':'application/json'
    }
  }
  return  httpService.postService('addEmployeeDetails', data, false, httpHeader);
}

exports.deleteEmployee = (id) => {
  let httpParam = { params: {
      id: id
    }
  }
  return  httpService.deleteService('deleteEmployeeDetails', httpParam);
}

exports.updateEmployee = (data, id) => {
  let  httpHeader = { headers: {
      'Content-Type':'application/json'
    }
  }
  let httpParam = { params: {
      id: id
    }
  }
  return  httpService.putService('updateEmployeeDetails', data, false, httpHeader, httpParam);
}