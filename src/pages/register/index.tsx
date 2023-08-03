
'use client';
import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';

import AppMenu from '@/components/menu';
 
import { setUserData } from '@/app/storeUserData/consumerData';

import { clearLocalStorage, getUserByEmail, loadUserDataFromLocalStorage } from '@/services/localStorageService';
import { UserData } from '@/models/userData';

const Register = () => {
  const [inputData, setInputData] = useState<string>("");
  const [users, setUsers] = useState<UserData[]>(loadUserDataFromLocalStorage);
  const [selectedUser, setSelectedUser] = useState<UserData>();

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
  return (
    <div className="App">
      <AppMenu />
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
        <Col span={24}>
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
    </div>
  );

};

export default Register;