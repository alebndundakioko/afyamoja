import { useState } from 'react';
import type { FC } from 'react';
import { Button, Form, Input, Select, Upload, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const ContentLibraryPage: FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFinish = (values: any) => {
    console.log('Form Values:', values);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      {/* Uploading and Launching Content Section */}
      <div style={{ marginBottom: '24px' }}>
        <h2>Upload and Launch Content to Your Subscribers</h2>
        <p>
          This section allows you to upload and launch new educational content for your subscribers. 
          You can add videos, blogs, artworks, or other types of media, and provide relevant details and tags.
        </p>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <Form.Item
            name="contentType"
            label="Content Type"
            rules={[{ required: true, message: 'Please select the type of content!' }]}
          >
            <Select placeholder="Select content type">
              <Option value="blog">Blog</Option>
              <Option value="video">Video</Option>
              <Option value="artwork">Artwork</Option>
              <Option value="course">Online Course</Option>
              <Option value="webinar">Webinar</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title!' }]}
          >
            <Input placeholder="Enter the title" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter the description!' }]}
          >
            <Input.TextArea placeholder="Enter a brief description" rows={4} />
          </Form.Item>

          <Form.Item
            name="externalLink"
            label="External Link"
            rules={[{ required: true, message: 'Please enter the external link!' }]}
          >
            <Input placeholder="Enter the external link" />
          </Form.Item>

          <Form.Item
            name="tags"
            label="Relevant Tags"
            rules={[{ required: true, message: 'Please select relevant tags!' }]}
          >
            <Select mode="tags" placeholder="Select or add tags" style={{ width: '100%' }}>
              <Option value="health">Health</Option>
              <Option value="wellness">Wellness</Option>
              <Option value="nutrition">Nutrition</Option>
              <Option value="fitness">Fitness</Option>
              <Option value="medicine">Medicine</Option>
              {/* Add more tags as needed */}
            </Select>
          </Form.Item>

          <Form.Item>
            <Upload
              beforeUpload={() => false} // Prevent auto upload
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => {
                  onSuccess?.({}, file);
                }, 0);
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />} type="default">
                Upload Content
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Success Modal */}
      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="OK"
      >
        <p>Content has been successfully uploaded!</p>
      </Modal>
    </div>
  );
};

export default ContentLibraryPage;
