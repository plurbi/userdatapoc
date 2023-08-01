
'use client';
import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { setUserData } from './storeUserData/consumerData';
import { UserData } from '../models/userData';
import { loadUserDataFromLocalStorage } from '@/localStorageService';
import products from './../mock/productsList';



const Home = () => {
  const [inputData, setInputData] = useState<string>("");
  const [users, setUsers] = useState<UserData[]>(loadUserDataFromLocalStorage);



  const setData = async () => {
    await setUserData(inputData);
    setUsers(loadUserDataFromLocalStorage);
  };

  return (
    <div className="App">
      
      <Row>
        <Col>
          <Input placeholder="Basic usage" onChange={(e) => { setInputData(e.target.value) }} value={inputData} />
        </Col>
        <Col>
          <Button type="primary" onClick={setData}>Log In</Button>
        </Col>


      </Row>

      <hr></hr>
      <Row>
        <Col span={8}> USERS</Col>
        {/* <Col span={2}> Platform</Col> */}
        <Col span={2}> Height</Col>
        <Col span={2}> Width</Col>
        <Col span={2}> Is Mobile</Col>
        <Col span={2}> Public IP</Col>
        <Col span={2}> Latitude</Col>
        <Col span={2}> Longitude</Col>
        <Col span={2}> Conn Type</Col>
      </Row>
      <hr></hr>
      <Row>
        <Col span={24}>
          {users.map((u, i) => {
            return (
              <Row key={i}>
                <Col span={8}> {u.userToken}</Col>
                {/* <Col span={2}> {u.platform}</Col> */}
                <Col span={2}> {u.deviceScreenSizeHeight}</Col>
                <Col span={2}> {u.deviceScreenSizeWidth}</Col>
                <Col span={2}> {u.isMobile ? "True" : "False"}</Col>
                <Col span={2}> {u.publicIP}</Col>
                <Col span={2}> {u.latitude}</Col>
                <Col span={2}> {u.longitude}</Col>
                <Col span={2}> {u.connectionType}</Col>
              </Row>
            );
          })}
        </Col>
      </Row>
     
      <hr></hr>
      <Row>
        <Col span={4}>PRODUCT</Col>
        <Col span={4}>Precio</Col>
        <Col span={4}>Stock</Col>
        <Col span={4}>Token</Col>
      </Row>
      <hr></hr>
      <Row>
        <Col span={24}>
          {products.map((u, i) => {
            return (
              <Row key={i}>
                <Col span={4}>{u.nombre}</Col>
                <Col span={4}>{u.precio}</Col>
                <Col span={4}>{u.stock}</Col>
                <Col span={4}>{u.token}</Col>

                <Button type="primary" >Purchase</Button>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Home;