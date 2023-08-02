
'use client';
import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { clearLocalStorage, getUserByEmail, loadUserDataFromLocalStorage } from '@/services/localStorageService';
import AppMenu from '@/components/menu';
import { UserData } from '@/models/userData';
import { setUserData } from '@/app/storeUserData/consumerData';
import products from '../../mock/productsList';

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

      <hr></hr>
      <Row>
        <Col span={24}>
          {users.map((u, i) => {
            return (
              <>
                <Row key={i} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Token</Col>
                  <Col span={8}> {u.userToken}</Col>
                </Row>
                <Row key={u.email} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> E-mail</Col>
                  <Col span={8}> {u.email}</Col>
                </Row>
                <Row key={u.deviceScreenSizeHeight} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Height</Col>
                  <Col span={8}> {u.deviceScreenSizeHeight}</Col>
                </Row>
                <Row key={u.deviceScreenSizeWidth} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Width</Col>
                  <Col span={8}> {u.deviceScreenSizeWidth}</Col>
                </Row>
                <Row key={u.publicIP} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Public IP</Col>
                  <Col span={8}> {u.publicIP}</Col>
                </Row>
                <Row key={u.latitude} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Latitude</Col>
                  <Col span={8}> {u.latitude}</Col>
                </Row>
                <Row key={u.longitude} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Longitud</Col>
                  <Col span={8}> {u.longitude}</Col>
                </Row>
                <Row key={u.platformDescription} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Description</Col>
                  <Col span={8}> {u.platformDescription}</Col>
                </Row>
                <Row key={u.platformName} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Name</Col>
                  <Col span={8}> {u.platformName}</Col>
                </Row>
                <Row key={u.osArchitecture} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture</Col>
                  <Col span={8}> {u.osArchitecture}</Col>
                </Row>
                <Row key={u.architectureFamily} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture Family</Col>
                  <Col span={8}> {u.architectureFamily}</Col>
                </Row>
                <Row key={u.architectureVersion} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Architecture Version</Col>
                  <Col span={8}> {u.architectureVersion}</Col>
                </Row>
                <Row key={u.browserVersion} onClick={() => { getuserByEmail(u.email) }}>
                  <Col span={8}> Browser Version</Col>
                  <Col span={8}> {u.browserVersion}</Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Button type="primary" onClick={() => { cleanLocalStorage() }} >Clear Local Storage</Button>
      </Row>
    </div>
  );

};

export default Register;