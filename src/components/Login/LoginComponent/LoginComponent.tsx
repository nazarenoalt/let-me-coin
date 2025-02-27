import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { LoginWrapper } from './LoginComponent.styles';
import LoginForm from '../LoginForm/LoginForm';

const LoginComponent = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(isUserLogged) {
      navigate('/movements');
    }

    setIsLoading(false);
  }, [navigate, isLoading, isUserLogged]);
  
  return (
    <LoginWrapper>
      <LoginForm setIsUserLogged={setIsUserLogged} />
    </LoginWrapper>
  )
}

export default LoginComponent