import { Alert, Button } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  // variable student is created JSON Object
  var user = {};

  var navigate = useNavigate();

  function loginUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/login",
      method: "post",
      data: user
    }).then((response) => {
      console.log('Login successfull', response);
      localStorage.token = response.status === 200 ? response.data.token : null;
      if (response.status === 200) navigate('/');
      else alert('Invalid Credentials');
    }, (error) => {
      alert('Invalid Credentials');
      console.log('Invalid credentials', error);
      localStorage.token = undefined;
    })
  }

  function handlePassword(event) {
    user.password = event.target.value;
  }

  function handleEmail(event) {
    user.email = event.target.value;
  }

  return (
    <>
      User ID: <input type="text" placeholder="Email" onChange={handleEmail}></input>
      <br />
      Password: <input type="password" placeholder="Password" onChange={handlePassword}></input>
      <br />
      <br />
      <Button onClick={loginUser} type="primary">Login In</Button>
      &nbsp;&nbsp;
      <Link to='/forgot'><Button type="primary">Forgot Password?</Button></Link>
      <br />
      <br />
    </>
  )
}