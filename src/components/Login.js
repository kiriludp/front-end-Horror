import React, {useState, useEffect} from 'react'
import Auth from '../utils/Auth'
import {Form, Button, FormGroup} from "react-bootstrap"

function loginForm () {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
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
      const response = await loginUser(userFormData);

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
        <div>
           <Form>
            
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />

                
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Form.Group>
            <Button type='submit'>Submit</Button>
            </Form> 
        </div>
       
        </div> 
    )
}


export default Login