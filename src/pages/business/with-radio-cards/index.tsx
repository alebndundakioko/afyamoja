import type { FC, ReactElement } from 'react';
import { Table, Button, message } from 'antd';

const dummySubscribers = Array.from({ length: 50 }, (_, index) => ({
  key: (index + 1).toString(),
  name: `Patient ${index + 1}`,
  age: 20 + (index % 50),
  medicalHistory: index % 2 === 0 ? 'Diabetes' : 'Hypertension',
}));

const SubscribersPage: FC = (): ReactElement => {
  const handleContact = (name: string) => {
    window.open(`mailto:c.kioko@alustudent.com?subject=Contact Request&body=Hello ${name},%0D%0A%0D%0A`);
    message.info(`Contacting ${name}`);
  };

  const subscriberColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Medical History',
      dataIndex: 'medicalHistory',
      key: 'medicalHistory',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, { name }) => (
        <Button type="primary" onClick={() => handleContact(name)}>Contact</Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h2>Subscribers and Readers</h2>
      <Table
        columns={subscriberColumns}
        dataSource={dummySubscribers}
        pagination={{ pageSize: 10 }} // Adjusting pageSize for pagination
        style={{ marginTop: '16px' }}
      />
    </div>
  );
};

export default SubscribersPage;
