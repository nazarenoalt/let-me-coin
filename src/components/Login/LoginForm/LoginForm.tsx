import React, { useState } from 'react';
import { Form, InputsContainer } from './LoginForm.styles';
import TextInput from '../../../particles/TextInput/TextInput';
import Button from '../../../particles/Button/Button';
import { Link } from 'react-router';

const LoginForm = ({ setIsUserLogged }: { setIsUserLogged: (isLogged: boolean) => void }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUserLogged(true);
  }
  return (
    <Form onSubmit={onFormSubmit}>
      <InputsContainer>
        <label className="form-label" htmlFor="email">Email</label>
        <TextInput
          color="violet"
          id="email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          aria-required="true"
        />
        <label className="form-label" htmlFor="password">Password</label>
        <TextInput
          color="violet"
          id="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          aria-required="true"
        />
      </InputsContainer>

      <Button type="submit">Log In</Button>
      <span className="signup-span">
        ¿Not a user? <Link to="/signup">Sign up here</Link>
      </span>
    </Form>
  )
}

export default LoginForm