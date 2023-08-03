
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import styled from 'styled-components';
import AppMenu from '@/components/menu';
import { getPurchases } from '@/services/purchaseService';
import { checkPrimeSync } from 'crypto';
import axios from 'axios';

const Flexbox = styled.div`
 
`;

const source = [
    {
        key: '1',
        UserToken: '54354534',
        children: [
            {
                key: '30',

                PublicIp: '127.30.340.56',
                ProductToken: 'ppdfsdpfpdsfpsfsdp',
                ProductName: "ProductName"
            },
            {
                key: '31',

                PublicIp: '127.30.340.56',
                ProductToken: 'ppdfsdpfpdsfpsfsdp',
                ProductName: "ProductName"
            }
        ]
    },
    {
        key: '2',
        UserToken: '34543543543',
        children: [
            {
                key: '32',

                PublicIp: '200.30.340.56',
                ProductToken: 'ppdfsdpfpdsfpsfsdp',
                ProductName: "ProductName"
            },
            {
                key: '33',

                PublicIp: '200.30.340.56',
                ProductToken: 'ppdfsdpfpdsfpsfsdp',
                ProductName: "ProductName"
            }
        ]
    },
    {
        key: '3',
        UserToken: '34534534',
        children: [
            {
                key: '34',
                PublicIp: '127.30.30.56',
                ProductToken: 'ppdfsdpfpdsfpsfsdp',
                ProductName: "ProductName"
            }
        ]
    }
];

const columns = [
    { title: 'User  Token', dataIndex: 'UserToken', key: 'UserToken', },
    { title: 'Public IP', dataIndex: 'PublicIp', key: 'PublicIp', },
    { title: 'Product Token', dataIndex: 'ProductToken', key: 'ProductToken' },
    { title: 'Product Name', dataIndex: 'ProductName', key: 'ProductName' },
];



function Resume() {
    useEffect(() => {
        // Función para hacer la petición GET al endpoint
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/purchases');
            //setData(response.data);
            console.log("RESPONSE", response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    

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

export default Resume;
