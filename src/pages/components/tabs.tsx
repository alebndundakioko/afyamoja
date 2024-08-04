import { useState } from 'react';
import type { MyTabsOption } from '@/components/business/tabs';
import type { FC } from 'react';
import { Space, Divider, Button } from 'antd';
import MyTable from '@/components/core/table';
import MyTabs from '@/components/business/tabs';

const { Column, ColumnGroup } = MyTable;

interface Appointment {
  patientName: string;
  age: number;
  location: string;
  reason: string;
  notes: string;
}

const options: MyTabsOption[] = [
  {
    label: 'Upcoming Appointments',
    value: 1,
  },
  {
    label: 'Past Appointments',
    value: 2,
  },
  {
    label: 'Canceled/Rejected Appointments',
    value: 3,
  },
];

// data for appointments
const generateDummyData = (prefix: string): Appointment[] => {
  return [
    { patientName: 'John Doe', age: 34, location: 'Nairobi', reason: 'Routine Checkup', notes: 'All vitals are normal.' },
    { patientName: 'Jane Smith', age: 28, location: 'Mombasa', reason: 'Fever', notes: 'Prescribed antibiotics.' },
    { patientName: 'Robert Johnson', age: 45, location: 'Kisumu', reason: 'Chest Pain', notes: 'Referred to cardiology.' },
    { patientName: 'Emily Davis', age: 38, location: 'Eldoret', reason: 'Headache', notes: 'Undergoing further tests.' },
    { patientName: 'Michael Brown', age: 50, location: 'Nakuru', reason: 'Diabetes Follow-up', notes: 'Adjusted medication dose.' },
    { patientName: 'Sarah Wilson', age: 22, location: 'Kericho', reason: 'Allergy', notes: 'Allergy tests scheduled.' },
    { patientName: 'David Miller', age: 40, location: 'Naivasha', reason: 'Back Pain', notes: 'Physical therapy recommended.' },
    { patientName: 'Laura Taylor', age: 29, location: 'Machakos', reason: 'Skin Rash', notes: 'Topical cream prescribed.' },
    { patientName: 'James Anderson', age: 33, location: 'Kitale', reason: 'Asthma', notes: 'Inhaler refilled.' },
    { patientName: 'Sophia Martinez', age: 47, location: 'Vihiga', reason: 'Blood Pressure Check', notes: 'Blood pressure stable.' },
    { patientName: 'William Garcia', age: 52, location: 'Bungoma', reason: 'Vision Problems', notes: 'Eye specialist referral.' },
    { patientName: 'Olivia Rodriguez', age: 31, location: 'Bomet', reason: 'Pregnancy Checkup', notes: 'Routine ultrasound done.' },
    { patientName: 'Daniel Lee', age: 27, location: 'Embu', reason: 'Ear Infection', notes: 'Antibiotics prescribed.' },
    { patientName: 'Isabella Martinez', age: 42, location: 'Kajiado', reason: 'Chronic Cough', notes: 'Further tests needed.' },
    { patientName: 'Henry Taylor', age: 36, location: 'Meru', reason: 'Joint Pain', notes: 'Pain management plan created.' },
    { patientName: 'Mia Robinson', age: 26, location: 'Garissa', reason: 'Cold and Flu', notes: 'Rest and fluids advised.' },
    { patientName: 'Jacob Walker', age: 39, location: 'Homa Bay', reason: 'Stomach Ache', notes: 'Possible gastroenteritis.' },
    { patientName: 'Charlotte Hall', age: 30, location: 'Nandi Hills', reason: 'Thyroid Issues', notes: 'Thyroid function tests ordered.' },
    { patientName: 'Ethan Young', age: 55, location: 'Nyeri', reason: 'Cardiac Checkup', notes: 'Heart monitor attached.' },
    { patientName: 'Amelia Hernandez', age: 24, location: 'Taita Taveta', reason: 'Vaccination', notes: 'Vaccination completed.' },
    { patientName: 'Alexander Scott', age: 48, location: 'Uasin Gishu', reason: 'Kidney Stones', notes: 'Pain management and follow-up required.' },
  ];
};

const dummyData: Record<number, Appointment[]> = {
  1: generateDummyData('Upcoming'),
  2: generateDummyData('Past'),
  3: generateDummyData('Canceled'),
};

const ITEMS_PER_PAGE = 5;

const TabsPage: FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTabChange = (value: number) => {
    setSelectedTab(value);
    setCurrentPage(1); // Reset to first page when tab changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = dummyData[selectedTab].slice(startIndex, endIndex);

  const totalPages = Math.ceil(dummyData[selectedTab].length / ITEMS_PER_PAGE);

  const handleDelete = (patientName: string) => {
    alert(`Delete button clicked for ${patientName}`);
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <MyTabs options={options} onChange={handleTabChange} />
      <Divider />
      <MyTable<Appointment>
        dataSource={paginatedData}
        rowKey={(record) => record.patientName}
        pagination={false}
      >
        <ColumnGroup title="Appointment Details">
          <Column
            title="Patient Name"
            dataIndex="patientName"
            key="patientName"
            render={(text) => (
              <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>
            )}
          />
          <Column
            title="Age"
            dataIndex="age"
            key="age"
            render={(text) => (
              <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>
            )}
          />
          <Column
            title="Location"
            dataIndex="location"
            key="location"
            render={(text) => (
              <div style={{ background: '#e6f7ff', padding: '8px' }}>{text}</div>
            )}
          />
          <Column
            title="Reason"
            dataIndex="reason"
            key="reason"
            render={(text) => (
              <div style={{ background: '#fff7e6', padding: '8px' }}>{text}</div>
            )}
          />
          <Column
            title="Notes"
            dataIndex="notes"
            key="notes"
            render={(text) => (
              <div style={{ background: '#fff7e6', padding: '8px' }}>{text}</div>
            )}
          />
        </ColumnGroup>

        <Column
          title="Actions"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Button
                type="primary"
                style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
                onClick={() => handleDelete(record.patientName)}
              >
                Delete
              </Button>
            </Space>
          )}
        />
      </MyTable>

      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span style={{ margin: '0 16px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TabsPage;
