import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/movements');
  }, [navigate])
  
  return null;
}

export default LoginPage