
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
<Form>
<Form.Group>
        <Form.Label>Username:</Form.Label>
        <Form.Control
        type="text"
        name='username'
        onChange={handleInputChange}
        value={userFormData.username}
        required
    />
    </Form.Group>
    <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
        type="text"
        name='email'
        onChange={handleInputChange}
        value={userFormData.email}
        required
    />
    </Form.Group>
  
    <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        name='password'
        onChange={handleInputChange}
        value={userFormData.password}
        required
    />
    </Form.Group>
</Form>
</div>
    
  );
};

export default Signup;




// ----------------------------------------------------




