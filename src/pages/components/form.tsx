import type { FC } from 'react';
import MyButton from '@/components/basic/button'; // Ensure this component is correct
import MyForm from '@/components/core/form'; // Ensure this component is correct
import { Upload, Input, InputNumber, Button, Form, Divider, DatePicker, Radio, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface Data {
  name: string;
  age: number;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  allergies: string;
  familyHistory: string;
  pastSurgeries: string;
  vaccinationHistory: string;
  height: number;
  weight: number;
  bloodType: string;
  primaryCarePhysician: string;
  emergencyContact: string;
  smokingStatus: string;
  alcoholConsumption: string;
  exerciseFrequency: string;
  dietRoutine: string;
  insuranceProvider: string;
  policyNumber: string;
  diseaseHistory: string;
  currentMedication: string;
  livingConditions: string;
  prescriptionFiles: any[];
  xrayReports: any[];
  medicalReports: any[];
}

const FormPage: FC = () => {
  const onFinish = (value: Data) => {
    console.log('Form Submitted:', value);
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1 style={{ marginBottom: '24px' }}>Add a New Patient to the Register</h1>
      <MyForm<Data> onFinish={onFinish}>
        {/* Personal Information Section */}
        <div style={{ marginBottom: '24px' }}>
          <h2>Personal Information</h2>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the patient\'s name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[{ required: true, message: 'Please input the patient\'s date of birth!' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please select the patient\'s gender!' }]}
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please input the patient\'s phone number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input the patient\'s email address!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input the patient\'s address!' }]}
          >
            <Input />
          </Form.Item>
        </div>

        <Divider />

        {/* Lifestyle Choices Section */}
        <div style={{ marginBottom: '24px' }}>
          <h2>Lifestyle Choices</h2>

          <Form.Item
            label="Smoking Status"
            name="smokingStatus"
          >
            <Radio.Group>
              <Radio value="Smoker">Smoker</Radio>
              <Radio value="Non-Smoker">Non-Smoker</Radio>
              <Radio value="Former Smoker">Former Smoker</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Alcohol Consumption"
            name="alcoholConsumption"
          >
            <Select placeholder="Select frequency">
              <Option value="Never">Never</Option>
              <Option value="Occasionally">Occasionally</Option>
              <Option value="Regularly">Regularly</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Exercise Frequency"
            name="exerciseFrequency"
          >
            <Select placeholder="Select frequency">
              <Option value="Never">Never</Option>
              <Option value="Occasionally">Occasionally</Option>
              <Option value="Regularly">Regularly</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Diet Routine"
            name="dietRoutine"
          >
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <Divider />

        {/* Medical Records Section */}
        <div style={{ marginBottom: '24px' }}>
          <h2>Medical Records</h2>
          <Form.Item
            label="Disease History"
            name="diseaseHistory"
            rules={[{ required: true, message: 'Please input the patient\'s disease history!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Current Medication"
            name="currentMedication"
            rules={[{ required: true, message: 'Please input the current medication!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Living Conditions"
            name="livingConditions"
            rules={[{ required: true, message: 'Please input the living conditions!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <Divider />

        {/* Document Uploads Section */}
        <div style={{ marginBottom: '24px' }}>
          <h2>Document Uploads</h2>
          <Form.Item
            label="Prescription Files"
            name="prescriptionFiles"
          >
            <Upload
              action="/upload"
              listType="picture"
              name="file"
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload Prescriptions</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="X-ray Reports"
            name="xrayReports"
          >
            <Upload
              action="/upload"
              listType="picture"
              name="file"
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload X-ray Reports</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Medical Reports"
            name="medicalReports"
          >
            <Upload
              action="/upload"
              listType="picture"
              name="file"
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload Medical Reports</Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Add patient
          </MyButton>
        </Form.Item>
      </MyForm>
    </div>
  );
};

export default FormPage;
