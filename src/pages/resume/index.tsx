
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import styled from 'styled-components';
import AppMenu from '@/components/menu';
import { getPurchases } from '@/services/purchaseService';
import { checkPrimeSync } from 'crypto';
import axios from 'axios';
import { GroupedData } from '@/models/groupedData';

const Flexbox = styled.div`
 
`;


const columns = [
    { title: 'Public IP', dataIndex: 'PublicIp', key: 'PublicIp', },
    { title: 'User  Token', dataIndex: 'UserToken', key: 'UserToken', },
    { title: 'Product Token', dataIndex: 'ProductToken', key: 'ProductToken' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
];



function Resume() {
    
    const [groupedData, setGroupedData] = useState<GroupedData[]>([]);

    useEffect(() => {
        // Función para hacer la petición GET al endpoint
        const fetchData = async () => {
          try {
            const response = await axios.get<GroupedData[]>('https://poc-be2.onrender.com/purchases');
            //setData(response.data);
            console.log("RESPONSE", response);
            setGroupedData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    

    return (
        <>
            <AppMenu />          
            <Flexbox>
                <Table
                    size="small"
                    indentSize={0}
                    columns={columns}
                    dataSource={groupedData}
                />
            </Flexbox>
        </>
    );
}

export default Resume;
