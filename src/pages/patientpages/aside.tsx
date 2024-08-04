import type { FC } from 'react';
import { useState } from 'react';
import { Typography, Form, Input, Button, DatePicker, Select, Modal } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const SidePage: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (values: any) => {
    console.log('Received values:', values);
    setIsModalVisible(true); // Show the modal when form is submitted
  };

  const handleOk = () => {
    setIsModalVisible(false); // Close the modal when "OK" is clicked
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Title level={2}>Appointment Scheduling</Title>
      <Paragraph style={{ textAlign: 'center', marginBottom: '40px' }}>
        Seamlessly schedule consultations with your patients using our platform. Fill in the patient
        details below to get started.
      </Paragraph>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: '100%', margin: 'auto', padding: '0 20px' }}
      >
        <Form.Item
          name="name"
          label="Patient Name"
          rules={[{ required: true, message: 'Please enter the patient name' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <Input placeholder="Enter patient name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Patient Email"
          rules={[{ required: true, message: 'Please enter the patient email', type: 'email' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <Input placeholder="Enter patient email" />
        </Form.Item>
        <Form.Item
          name="age"
          label="Patient Age"
          rules={[{ required: true, message: 'Please enter the patient age' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <Input type="number" placeholder="Enter patient age" />
        </Form.Item>
        <Form.Item
          name="reason"
          label="Reason for Scheduling"
          rules={[{ required: true, message: 'Please enter the reason for scheduling' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <Input.TextArea rows={4} placeholder="Enter reason for scheduling" />
        </Form.Item>
        <Form.Item
          name="dateTime"
          label="Select Date and Time"
          rules={[{ required: true, message: 'Please select date and time' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="platform"
          label="Meeting Platform"
          rules={[{ required: true, message: 'Please select a meeting platform' }]}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          <Select placeholder="Select a meeting platform">
            <Option value="zoom">Zoom</Option>
            <Option value="googleMeet">Google Meet</Option>
          </Select>
        </Form.Item>
        <br></br>
        <Form.Item style={{ width: '100%', maxWidth: '600px', margin: '0 auto', marginBottom: '20px' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Schedule Consultation
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Appointment Scheduled"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button key="close" type="primary" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <p>Your appointment has been successfully scheduled.</p>
      </Modal>
    </div>
  );
};

export default SidePage;
