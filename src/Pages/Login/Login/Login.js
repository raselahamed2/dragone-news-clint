import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
  const [error, setError] = useState('')
  const location = useLocation();

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()

  const form = location.state?.form?.pathname || '/';

  const handleSignIn = (event) =>{
      event.preventDefault();
      const form = event.target
      const email= form.email.value
      const password = form.password.value
      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('')
        navigate(form, {replace: true});
      })
      .catch(e => {
        console.error(e)
        setError(e.message)
      })
  }

  return (
    <div>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className='text-danger'>
          {error}
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;