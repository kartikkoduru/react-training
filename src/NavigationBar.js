import { Input, Menu } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function NavigationBar() {
  var name;
  const navigate = useNavigate();

  const items = [
    { label: (<Link to="/"><Button type="primary">Gallary</Button></Link>) },
    { label: (<Link to="/login"><Button type="primary">Login</Button></Link>) },
    { label: (<Link to="/signup"><Button type="primary">Sign up</Button></Link>) },
    { label: (<Link to="/checkout"><Button type="primary">Checkout</Button></Link>) },
    {
      icon: (
        <>
          <Input placeholder="Search" onChange={handleSearchText}></Input>
          <SearchOutlined onClick={searchCake}></SearchOutlined>
        </>
      )
    }
  ];

  function searchCake() {
    var url = '?q=' + name;
    navigate('/search' + url);
  }

  function handleSearchText(event) {
    name = event.target.value;
  }

  return (
    <div>
      <Menu theme='dark' mode="horizontal" items={items} />
    </div>
  );
}