import React, { useState } from 'react';
import { Form, InputsContainer } from './LoginForm.styles';
import TextInput from '../../../particles/TextInput/TextInput';
import Button from '../../../particles/Button/Button';
import { Link } from 'react-router';
import { useTranslations } from '../../../utils/translate';

const LoginForm = ({ setIsUserLogged }: { setIsUserLogged: (isLogged: boolean) => void }) => {
  const { t } = useTranslations();

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
        <label className="form-label" htmlFor="email">{t("Login.Email")}</label>
        <TextInput
          color="violet"
          id="email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          aria-required="true"
        />
        <label className="form-label" htmlFor="password">{t("Login.Password")}</label>
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

      <Button type="submit">{t("Login.Submit")}</Button>
      <span className="signup-span">
      {t("Login.NotAUser")} <Link to="/signup">{t("Login.SignUpHere")}</Link>
      </span>
    </Form>
  )
}

export default LoginForm