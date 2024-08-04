import type { FC, ReactElement } from 'react';
import { Form, Input, Upload, Button, DatePicker, message, Select, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';

const { TextArea } = Input;
const { Option } = Select;

const dummySubscribers = Array.from({ length: 50 }, (_, index) => ({
  key: (index + 1).toString(),
  name: `Patient ${index + 1}`,
  age: 20 + (index % 50),
  medicalHistory: index % 2 === 0 ? 'Diabetes' : 'Hypertension',
}));

const MassCommunicationPage: FC = (): ReactElement => {
  const handleSend = (values: any) => {
    message.success('Mass communication has been sent successfully');
    console.log('Values:', values);
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h2>Mass Communication</h2>
      <p>
        Use this section to send mass communication to all your subscribers and patients. You can select recipients, enter a message, attach files, and schedule the send time.
      </p>
      <Form
        layout="vertical"
        onFinish={handleSend}
        style={{ maxWidth: 800, margin: '0 auto' }}
      >
        <Form.Item
          label="Select Patients"
          name="patients"
          rules={[{ required: true, message: 'Please select patients!' }]}
        >
          <Select mode="multiple" placeholder="Select patients">
            {dummySubscribers.map(subscriber => (
              <Option key={subscriber.key} value={subscriber.name}>{subscriber.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Message Subject"
          name="subject"
          rules={[{ required: true, message: 'Please enter the message subject!' }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>

        <Form.Item
          label="Message Content"
          name="content"
          rules={[{ required: true, message: 'Please enter the message content!' }]}
        >
          <TextArea rows={4} placeholder="Enter your message here" />
        </Form.Item>

        <Form.Item
          label="Attach Files"
          name="attachments"
        >
          <Upload
            listType="picture"
            maxCount={5}
            beforeUpload={(file: RcFile) => {
              // Return false to prevent auto upload
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Images/Videos</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Schedule Send"
          name="schedule"
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="default" htmlType="reset">
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MassCommunicationPage;
