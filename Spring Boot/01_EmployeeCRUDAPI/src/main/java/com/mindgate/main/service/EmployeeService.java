package com.mindgate.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.mindgate.main.pojo.Employee;
import com.mindgate.main.repository.EmployeeRepository;
import com.mindgate.main.repository.EmployeeRepositoryInterface;
@Service
public class EmployeeService implements EmployeeServiceInterface {
	@Autowired
	private EmployeeRepositoryInterface employeeRepository;

	@Override
	public boolean addNewEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.addNewEmployee(employee);
	}

	@Override
	public boolean updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.updateEmployee(employee);
	}

	@Override
	public boolean deleteEmployee(int employeeId) {
		// TODO Auto-generated method stub
		return employeeRepository.deleteEmployee(employeeId);
	}

	@Override
	public Employee getEmployeeByEmployeeId(int employeeId) {
		// TODO Auto-generated method stub
		return employeeRepository.getEmployeeByEmployeeId(employeeId);
	}

	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return employeeRepository.getAllEmployees();
	}

}
