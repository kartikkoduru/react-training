import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Card, Image, Row } from "antd";

export default function CakeDetails() {

  var params = useParams();
  var cakeid = params.cakeid;
  var [cake, setCake] = useState();
  var navigate = useNavigate();

  useEffect(() => {
    getCakeDetails()
  }, []);

  function getCakeDetails() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/cake/" + cakeid,
      method: "get",
    }).then((response) => {
      setCake(response.data.data);
      console.log('Cake:' + cake);
    }, (error) => {
      console.log('Error from API', error);
    })
  }

  function addToCart() {
    if (!localStorage.token) {
      navigate('/login');
      return;
    }
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api/addcaketocart",
      method: "post",
      data: {
        cakeid: cake.cakeid,
        name: cake.name,
        price: cake.price,
        image: cake.image,
        weight: cake.weight
      },
      headers: {
        Authorization: localStorage.token
      }
    }).then((response) => {
      setCake(response.data.data);
      alert('Added to cart');
      navigate('/cake/' + cakeid);
    }, (error) => {
      console.log('Error in Cake Details Page', error);
    })
  }

  return (
    <>
      <Row>
        {cake &&
          <Card style={{ width: 500, marginLeft: 40 }}>
            <Image preview={false} height={450} src={cake.image} width={450}></Image>
          </Card>
        }
        {cake &&
          <Card style={{ width: 500, marginLeft: 40 }}>
            <p>Name: {cake.name}</p>
            <p>Price: {cake.price}</p>
            <p>Ratings: {cake.ratings}</p>
            <Button onClick={addToCart} type="primary">Add To Cart</Button>
          </Card>
        }
      </Row>
    </>
  );
}