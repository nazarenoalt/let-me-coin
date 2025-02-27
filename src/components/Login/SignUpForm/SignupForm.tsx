import { useState } from "react";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("lol")
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <form>
      <div>
      <label>First Name</label>
      <input type="text" value={userData.firstName} onChange={handleChange} />
      <label>Last Name</label>
        <input type="text" value={userData.lastName} onChange={handleChange} />
        <label>Email</label>
        <input type="email" value={userData.email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" value={userData.password} onChange={handleChange} />
      </div>

      <input type="submit" value="Sign up"/>
    </form>
  )
}

export default SignupForm