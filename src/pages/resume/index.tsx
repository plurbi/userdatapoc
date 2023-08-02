
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import styled from 'styled-components';
import AppMenu from '@/components/menu';


const Flexbox = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 10%;
  margin: 10%;
`;

const source = [
    {
        key: '1',
        Code: 'SP',
        children: [
            {
                key: '11',
                Code: '5001',
                DisplayName: 'audi',
                Name: 'r8',
                Type: '2012'
            },
            {
                key: '12',
                Code: '313',
                DisplayName: 'audi',
                Name: 'rs5',
                Type: '2013'
            }
        ]
    },
    {
        key: '2',
        Code: 'Code',
        children: [
            {
                key: '21',
                Code: '243',
                DisplayName: 'ford',
                Name: 'mustang',
                Type: '2012'
            },
            {
                key: '22',
                Code: '503431',
                DisplayName: 'ford',
                Name: 'fusion',
                Type: '2015'
            }
        ]
    },
    {
        key: '3',
        Code: 'Message',
        children: [
            {
                key: '31',
                Code: '4311',
                DisplayName: 'kia',
                Name: 'optima',
                Type: '2012'
            }
        ]
    }
];

const columns = [
    {
        title: 'Code',
        dataIndex: 'Code',
        key: 'Code',
        filters: [
            { text: 'SP', value: 'SP' },
            { text: 'Code', value: 'Code' },
            { text: 'Message', value: 'Message' }
        ],

    },
    {
        title: 'Display Name',
        dataIndex: 'DisplayName',
        key: 'DisplayName',
        filters: [
            { text: 'audi', value: 'audi' },
            { text: 'ford', value: 'ford' },
            { text: 'kia', value: 'kia' }
        ],

    },
    { title: 'Name', dataIndex: 'Name', key: 'Name' },
    { title: 'Type', dataIndex: 'Type', key: 'Type' }
];

function NestedTables() {
    return (
        <>
            <AppMenu />
            <h1>Mock Data</h1>
            <Flexbox>
                <Table
                    size="small"
                    indentSize={0}
                    columns={columns}
                    dataSource={source}
                />
            </Flexbox>
        </>
    );
}

export default NestedTables
