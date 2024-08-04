import type { FC } from 'react';
import { Form, Input, Button, Radio, Space, Row, Col, Modal } from 'antd';
import { useState } from 'react';
import { useLocale } from '@/locales';

const { Item: FormItem } = Form;

interface SearchData {
  name?: string;
  age?: string;
  diseaseHistory?: string;
  currentMedication?: string;
  smokingStatus?: string;
  alcoholConsumption?: string;
  dietRoutine?: string;
  sex?: number;
}

const SearchPage: FC = () => {
  const { formatMessage } = useLocale();
  
  const [form] = Form.useForm();

  const onSearch = () => {
    const values = form.getFieldsValue();

    // Create dummy data based on search criteria
    const dummyData: SearchData = {
      name: values.name || 'John Doe',
      age: values.age || '45',
      diseaseHistory: values.diseaseHistory || 'Heart disease',
      currentMedication: values.currentMedication || 'Blood pressure pills',
      smokingStatus: values.smokingStatus || 'Smoker',
      alcoholConsumption: values.alcoholConsumption || 'Frequent',
      dietRoutine: values.dietRoutine || 'Three meals a day',
      sex: values.sex || 1
    };
    
    showModal(dummyData);
  };

  const showModal = (data: SearchData) => {
    Modal.info({
      title: 'Search Results',
      content: (
        <Form layout="vertical" initialValues={data}>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'component.search.name' })} name="name">
                <Input readOnly />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'age' })} name="age">
                <Input readOnly />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Disease History' })} name="diseaseHistory">
                <Input readOnly />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Medication' })} name="currentMedication">
                <Input readOnly />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Smoking Status' })} name="smokingStatus">
                <Input readOnly />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Alcohol Consumption' })} name="alcoholConsumption">
                <Input readOnly />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Diet Routine' })} name="dietRoutine">
                <Input readOnly />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={formatMessage({ id: 'Sex' })} name="sex">
                <Input readOnly />
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Button
              type="primary"
              onClick={() => window.open('mailto:c.kioko@alustudent.com', '_blank')}
            >
              Contact
            </Button>
          </FormItem>
        </Form>
      ),
      onOk() {},
    });
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1>Search Patient Records</h1>
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'component.search.name' })} name="name">
              <Input placeholder="Enter patient's name" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'age' })} name="age">
              <Input placeholder="Enter patient's age" />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Disease History' })} name="diseaseHistory">
              <Input placeholder="Enter disease history" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Medication' })} name="currentMedication">
              <Input placeholder="Enter current medication" />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Smoking Status' })} name="smokingStatus">
              <Input placeholder="Enter smoking status" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Alcohol Consumption' })} name="alcoholConsumption">
              <Input placeholder="Enter alcohol consumption" />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Diet Routine' })} name="dietRoutine">
              <Input placeholder="Enter diet routine" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={formatMessage({ id: 'Sex' })} name="sex">
              <Radio.Group>
                <Radio value={1}>{formatMessage({ id: 'component.search.male' })}</Radio>
                <Radio value={2}>{formatMessage({ id: 'component.search.female' })}</Radio>
              </Radio.Group>
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Space>
            <Button type="primary" onClick={onSearch}>Search</Button>
          </Space>
        </FormItem>
      </Form>
    </div>
  );
};

export default SearchPage;
