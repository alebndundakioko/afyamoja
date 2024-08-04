import type { FC } from 'react';
import { Space, Tag, Divider, Button } from 'antd';
import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column, ColumnGroup } = MyTable;

interface ColumnType {
  key: string;
  firstName: string;
  lastName: string;
  age: number;
  diseaseHistory: string;
  currentMedication: string;
  livingConditions: string;
  smokingStatus: string;
  alcoholConsumption: string;
  dietRoutine: string;
  prescriptionFiles: string[];
  xrayReports: string[];
  medicalReports: string[];
  tags: string[];
}

const data: ColumnType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    diseaseHistory: 'Heart disease',
    currentMedication: 'Blood pressure pills',
    livingConditions: 'Rural area',
    smokingStatus: 'Smoker',
    alcoholConsumption: 'Frequent',
    dietRoutine: 'Three meals a day',
    prescriptionFiles: ['Prescription1.pdf'],
    xrayReports: ['XRay1.jpg'],
    medicalReports: ['Report1.pdf'],
    tags: ['healthy', 'client']
  },
  {
    key: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    age: 38,
    diseaseHistory: 'Diabetes',
    currentMedication: 'Insulin',
    livingConditions: 'Urban area',
    smokingStatus: 'Non-smoker',
    alcoholConsumption: 'Occasional',
    dietRoutine: 'Balanced diet',
    prescriptionFiles: ['Prescription2.pdf'],
    xrayReports: ['XRay2.jpg'],
    medicalReports: ['Report2.pdf'],
    tags: ['student', 'client']
  },
  {
    key: '3',
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 29,
    diseaseHistory: 'Asthma',
    currentMedication: 'Inhaler',
    livingConditions: 'Shared accommodation',
    smokingStatus: 'Smoker',
    alcoholConsumption: 'Frequent',
    dietRoutine: 'High-protein diet',
    prescriptionFiles: ['Prescription3.pdf'],
    xrayReports: ['XRay3.jpg'],
    medicalReports: ['Report3.pdf'],
    tags: ['worker', 'client']
  }
];

// Generate more dummy data
new Array(30).fill(undefined).forEach((_, index) => {
  data.push({
    key: (index + 4).toString(),
    firstName: 'John' + index,
    lastName: 'Doe' + index,
    age: 25 + index,
    diseaseHistory: 'Disease history ' + index,
    currentMedication: 'Medication ' + index,
    livingConditions: 'Living conditions ' + index,
    smokingStatus: 'Smoking status ' + index,
    alcoholConsumption: 'Alcohol consumption ' + index,
    dietRoutine: 'Diet routine ' + index,
    prescriptionFiles: [`Prescription${index}.pdf`],
    xrayReports: [`XRay${index}.jpg`],
    medicalReports: [`Report${index}.pdf`],
    tags: ['tag' + index]
  });
});

const TablePage: FC = () => {
  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1>Patient Records</h1>
      <Divider />

      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} pagination={{ pageSize: 10 }}>
        <ColumnGroup title="Personal Information">
          <Column
            title="First Name"
            dataIndex="firstName"
            key="firstName"
            render={(text) => <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Last Name"
            dataIndex="lastName"
            key="lastName"
            render={(text) => <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Age"
            dataIndex="age"
            key="age"
            render={(text) => <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>}
          />
        </ColumnGroup>

        <ColumnGroup title="Medical Details">
          <Column
            title="Disease History"
            dataIndex="diseaseHistory"
            key="diseaseHistory"
            render={(text) => <div style={{ background: '#fff7e6', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Current Medication"
            dataIndex="currentMedication"
            key="currentMedication"
            render={(text) => <div style={{ background: '#fff7e6', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Living Conditions"
            dataIndex="livingConditions"
            key="livingConditions"
            render={(text) => <div style={{ background: '#fff7e6', padding: '8px' }}>{text}</div>}
          />
        </ColumnGroup>

        <ColumnGroup title="Lifestyle Choices">
          <Column
            title="Smoking Status"
            dataIndex="smokingStatus"
            key="smokingStatus"
            render={(text) => <div style={{ background: '#f6ffed', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Alcohol Consumption"
            dataIndex="alcoholConsumption"
            key="alcoholConsumption"
            render={(text) => <div style={{ background: '#f6ffed', padding: '8px' }}>{text}</div>}
          />
          <Column
            title="Diet Routine"
            dataIndex="dietRoutine"
            key="dietRoutine"
            render={(text) => <div style={{ background: '#f6ffed', padding: '8px' }}>{text}</div>}
          />
        </ColumnGroup>

        <ColumnGroup title="Documents">
          <Column
            title="Prescription Files"
            dataIndex="prescriptionFiles"
            key="prescriptionFiles"
            render={(files) => (
              <div style={{ background: '#f0f5ff', padding: '8px' }}>
                {files.map(file => (
                  <div key={file}>
                    <a
                      href={`/path-to-documents/${file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'blue', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      {file}
                    </a>
                  </div>
                ))}
              </div>
            )}
          />
          <Column
            title="X-ray Reports"
            dataIndex="xrayReports"
            key="xrayReports"
            render={(reports) => (
              <div style={{ background: '#f0f5ff', padding: '8px' }}>
                {reports.map(report => (
                  <div key={report}>
                    <a
                      href={`/path-to-documents/${report}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'blue', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      {report}
                    </a>
                  </div>
                ))}
              </div>
            )}
          />
          <Column
            title="Medical Reports"
            dataIndex="medicalReports"
            key="medicalReports"
            render={(reports) => (
              <div style={{ background: '#f0f5ff', padding: '8px' }}>
                {reports.map(report => (
                  <div key={report}>
                    <a
                      href={`/path-to-documents/${report}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'blue', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      {report}
                    </a>
                  </div>
                ))}
              </div>
            )}
          />
        </ColumnGroup>

        <Column<ColumnType>
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <div style={{ background: '#f5f5f5', padding: '8px' }}>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        />

        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Button type="primary" style={{ backgroundColor: 'green', borderColor: 'green' }}>
                Invite {record.lastName}
              </Button>
              <Button type="danger" style={{ borderColor: 'red' }}>
                Delete
              </Button>
            </Space>
          )}
        />
      </MyTable>
    </div>
  );
};

export default TablePage;
