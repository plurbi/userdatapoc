import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const items: MenuProps['items'] = [  
  {
    label: 'Actions',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Options',
        children: [
          {
            label: 'Register',
            key: 'register',
          },
          {
            label: 'Purchase',
            key: 'purchase',
          },  {
            label: 'Resume',
            key: 'resume',
          },
        ],
      },      
    ],
  },
   
];

const AppMenu =  () => {
    const [current, setCurrent] = useState('mail');
    const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    
    router.push(`${e.key}`)
    setCurrent(e.key);
  };

  return (
    <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </>
  );
};

export default AppMenu;