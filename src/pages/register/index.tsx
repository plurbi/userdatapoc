
'use client';
import React, { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

import AppMenu from '@/components/menu';

import { setUserData } from '@/app/storeUserData/consumerData';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { clearLocalStorage, getUserByEmail, loadUserDataFromLocalStorage } from '@/services/localStorageService';
import { UserData } from '@/models/userData';
import MyMap from '../myMap';

const Register = () => {
  const [inputData, setInputData] = useState<string>("");
  const [users, setUsers] = useState<UserData[]>(loadUserDataFromLocalStorage);
  const [selectedUser, setSelectedUser] = useState<UserData>();
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDi0E7R40DvyxOC0HTLDN1INlrxF3oyjGY" });


  const getuserByEmail = (email: string | undefined) => {
    const user = getUserByEmail(email ?? "");
    if (user) {
      setSelectedUser(user);
    }
  }

  const setData = async () => {
    await setUserData(inputData);
    setUsers(loadUserDataFromLocalStorage);
  };
  const cleanLocalStorage = () => {
    clearLocalStorage();
    setUsers(loadUserDataFromLocalStorage);
  }
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  return (
    <div className="App">
      <AppMenu />
      <Row>
        <Col>
          <Form
            onFinish={setData}
            name="nest-messages"
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Row>
              <Col span={20}>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                  <Input onChange={(e) => { setInputData(e.target.value) }} value={inputData} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>

        </Col>
        {/* <Col>
          <Button type="primary" onClick={setData} htmlType="submit">Log In</Button>
        </Col> */}
      </Row>
      <hr></hr>
      <Row>
        <Col span={16}>
          {users.map((u, i) => {
            return (
              <>
                <Row key={1} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Token</Col>
                  <Col span={8}> {u.userToken}</Col>
                </Row>
                <Row key={2} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> E-mail</Col>
                  <Col span={8}> {u.email}</Col>
                </Row>
                <Row key={3} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Height</Col>
                  <Col span={8}> {u.deviceScreenSizeHeight}</Col>
                </Row>
                <Row key={4} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Width</Col>
                  <Col span={8}> {u.deviceScreenSizeWidth}</Col>
                </Row>
                <Row key={5} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Public IP</Col>
                  <Col span={8}> {u.publicIP}</Col>
                </Row>

                <Row key={6} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Latitude</Col>
                  <Col span={8}> {u.latitude}</Col>
                </Row>
                <Row key={7} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Longitud</Col>
                  <Col span={8}> {u.longitude}</Col>
                </Row>
                <Row key={8} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Description</Col>
                  <Col span={8}> {u.platformDescription}</Col>
                </Row>
                <Row key={9} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Name</Col>
                  <Col span={8}> {u.platformName}</Col>
                </Row>
                <Row key={10} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture</Col>
                  <Col span={8}> {u.osArchitecture}</Col>
                </Row>
                <Row key={11} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture Family</Col>
                  <Col span={8}> {u.architectureFamily}</Col>
                </Row>
                <Row key={12} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture Version</Col>
                  <Col span={8}> {u.architectureVersion}</Col>
                </Row>
                <Row key={13} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Browser Version</Col>
                  <Col span={8}> {u.browserVersion}</Col>
                </Row>
                <Row key={14} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Color Depth</Col>
                  <Col span={8}> {u.colorDepth}</Col>
                </Row>
                <Row key={15} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Logical Processors</Col>
                  <Col span={8}> {u.logicalProcessors}</Col>
                </Row>
                <Row key={16} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Time Zone</Col>
                  <Col span={8}> {u.timeZone}</Col>
                </Row>
                <Row key={17} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Accelerometer </Col>
                  <Col span={8}> {u.accelerometer ? "True" : "False"}</Col>
                </Row>
                <Row key={18} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Giroscope </Col>
                  <Col span={8}> {u.giroscope ? "True" : "False"}</Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Button type="primary" onClick={() => { cleanLocalStorage() }} >Reset Data</Button>
      </Row>
      <Col span={8} className='map-container'>
        {isLoaded ? <MyMap lat={users[0]?.latitude ?? 0} lng={users[0]?.longitude ?? 0} /> : "Loading..."}
      </Col>
    </div>
  );

};


export default Register;