import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const {createUser, verifyEmail, updateUserProfile} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result =>{
          const user = result.user
          console.log(user);
          form.reset();handleUpdateUserProfile(name, photoURL)
          handleEmailVerifycation()
        })
        .catch(e=>{ 
          console.error(e)
        setError(e.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
      const profile ={
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(e => console.error(e))
    }
    
    const handleAccpted = event =>{
        setAccepted(event.target.checked);
    }

    const handleEmailVerifycation = () =>{
      verifyEmail()
      .then(() =>{})
      .catch(e => console.error(e))
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="PhotoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email"  require />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" require />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccpted} type="checkbox" label={<>Accept <Link to='terms'>Terms and conditions</Link></>} />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <Form.Text>
          {error}
         </Form.Text>
      </Form>
    );
};

export default Register;