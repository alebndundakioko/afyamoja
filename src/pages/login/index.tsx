import React from 'react';
import { Button, Layout, Typography, Row, Col } from 'antd';
import './HomePage.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">Afya Moja</div>
        <div className="nav-buttons">
          <Button type="primary">Create Account</Button>
          <Button>Login</Button>
        </div>
      </Header>
      <Content>
        <section className="hero-section">
          <div className="hero-content">
            <Title level={1}>Afya Moja</Title>
            <Paragraph>
              Comprehensive healthcare access and services for vulnerable populations in Kenya.
            </Paragraph>
            <Button type="primary" size="large">Access the Dashboard</Button>
          </div>
        </section>
        
        <section className="features-section">
  <Title level={2}>Our Features</Title>
  <Paragraph>
    Explore the powerful tools and features designed to improve healthcare delivery.
  </Paragraph>
  <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <Title level={4}>Detailed Analytics Dashboard</Title>
        <Paragraph>Gain insights into patient health metrics and treatment efficacy.</Paragraph>
        <img src="src/assets/login/image.png" alt="Detailed Analytics Dashboard" />
      </div>
    </Col>

    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <Title level={4}>Professional Engagement Tools</Title>
        <Paragraph>Enhance communication between healthcare providers and patients.</Paragraph>
        <img src="src/assets/login/management.jpg" alt="Professional Engagement Tools" />
      </div>
    </Col>
    
    
    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <Title level={4}>Patient Management Tools</Title>
        <Paragraph>Efficiently manage patient information, histories, and treatment plans.</Paragraph>
        <img src="src/assets/login/communication.jpg" alt="Patient Management Tools" />
      </div>
    </Col>
    
  </Row>
</section>


        <section className="about-section">
          <Row>
            <Col xs={24} md={12}>
              <img src="src/assets/login/patient.jpg" alt="About Afya Moja" className="about-image" />
            </Col>
            <Col xs={24} md={12}>
              <div className="about-content">
                <Title level={2}>The Problem we are solving</Title>
                <Paragraph>
                Afya Moja addresses the critical issue of limited healthcare access for vulnerable populations in Kenya. By providing a comprehensive platform for health information, remote consultations, and patient management, we bridge the gap between healthcare providers and patients, ensuring timely and efficient medical care.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </section>

        <section className="product-demo-section">
  <Title level={2}>Product Demo Video</Title>
  <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/isITBkdvpMM"
      title="Product Demo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ borderRadius: '20px' }}
    />
  </div>
</section>

<footer className="footer">
  <p>
    Made with love and a cup of coffee by{' '}
    <a href="https://www.instagram.com/mr_kioko/" target="_blank" rel="noopener noreferrer">
      Caleb Ndunda
    </a>
  </p>
</footer>



      </Content>
      
    </Layout>
  );
};

export default HomePage;