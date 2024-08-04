import type { FC } from 'react';
import MyButton from '@/components/basic/button'; // Ensure this component is correct
import MyForm from '@/components/core/form'; // Ensure this component is correct
import { Input, Select, Button, Form, Modal } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;
const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  medicalPractice: string;
}

const AccountSettingsPage: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (value: ProfileData) => {
    console.log('Form Submitted:', value);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1 style={{ marginBottom: '24px' }}>Account Settings</h1>
      <p style={{ marginBottom: '24px' }}>
        Update your profile details below. You can edit your name, email, bio description, and select the type of medical practice you specialize in.
      </p>
      <MyForm<ProfileData> form={form} onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Bio Description"
          name="bio"
          rules={[{ required: true, message: 'Please enter your bio description!' }]}
        >
          <TextArea rows={4} placeholder="Enter your bio description here" />
        </Form.Item>

        <Form.Item
          label="Type of Medical Practice"
          name="medicalPractice"
          rules={[{ required: true, message: 'Please select the type of medical practice!' }]}
        >
          <Select placeholder="Select medical practice">
            <Option value="generalPractitioner">General Practitioner</Option>
            <Option value="cardiologist">Cardiologist</Option>
            <Option value="dermatologist">Dermatologist</Option>
            <Option value="neurologist">Neurologist</Option>
            <Option value="pediatrician">Pediatrician</Option>
            <Option value="surgeon">Surgeon</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Save Changes
          </MyButton>
        </Form.Item>
      </MyForm>
      <Modal title="Profile Updated" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <p>Your profile has been updated successfully.</p>
      </Modal>
    </div>
  );
};

export default AccountSettingsPage;
