import { Button } from "antd";
import axios from "axios";

export default function SignUp() {

  // variable User is created JSON Object
  var user = {};

  function addUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/register",
      method: "post",
      data: user
    }).then((response) => {
      console.log('User signed-up', response)
    }, (error) => {
      console.log('Error from API', error)
    })
  }

  function handleUserName(event) {
    user.name = event.target.value;
  }

  function handlePassword(event) {
    user.password = event.target.value;
  }

  function handleEmail(event) {
    user.email = event.target.value;
  }

  return (
    <>
      <input type="text" placeholder="User Name" onChange={handleUserName}></input>
      <br></br>
      <input type="password" placeholder="Password" onChange={handlePassword}></input>
      <br></br>
      <input type="text" placeholder="Email" onChange={handleEmail}></input>
      <br></br>
      <Button onClick={addUser} type="primary">Sign Up</Button>
    </>
  )
}