import type { FC } from 'react';
import MyButton from '@/components/basic/button'; // Ensure this component is correct
import MyForm from '@/components/core/form'; // Ensure this component is correct
import { Upload, Input, Select, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { TextArea } = Input;
const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface MessageData {
  messageType: string;
  name: string;
  email: string;
  upload: any[];
  message: string;
}

const SendMessagePage: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (value: MessageData) => {
    console.log('Form Submitted:', value);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1 style={{ marginBottom: '24px' }}>Send us a message</h1>
      <p style={{ marginBottom: '24px' }}>
        We value your feedback and are here to assist you. Please fill out the form below to send us a message.
        You can choose the type of message you want to send from the options provided.
      </p>
      <MyForm<MessageData> form={form} onFinish={onFinish}>
        <Form.Item
          label="Type of Message"
          name="messageType"
          rules={[{ required: true, message: 'Please select the type of message!' }]}
        >
          <Select placeholder="Select message type">
            <Option value="feedback">Feedback Message</Option>
            <Option value="complaint">Complaint</Option>
            <Option value="featureRequest">Feature Request</Option>
            <Option value="general">General Message</Option>
          </Select>
        </Form.Item>

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

        <Form.Item label="Upload Item" name="upload">
          <Upload name="file" listType="text">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <TextArea rows={4} placeholder="Enter your message here" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Send
          </MyButton>
        </Form.Item>
      </MyForm>
      <Modal title="Message Sent" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <p>Your message has been sent successfully.</p>
      </Modal>
    </div>
  );
};

export default SendMessagePage;
