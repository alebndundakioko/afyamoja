import layoutImage from 'src/assets/login/image.png';
import type { FC } from 'react';
import { Typography } from 'antd';
import { LocaleFormatter } from '@/locales';
import './DocumentationPage.css'; // CSS file my styles

const { Title, Paragraph } = Typography;

const DocumentationPage: FC = () => {
  return (
    <div className="documentation-page">
      <div className="header">
        <Title>
          <LocaleFormatter id="app.documentation.introduction.title" />
        </Title>
      </div>
      
      <section className="introduction-section">
        <img src="src/assets/login/image.png" alt="Healthcare" className="intro-image" />
        <Paragraph>
          <LocaleFormatter id="app.documentation.introduction.description" />
        </Paragraph>
      </section>
      
      <section className="key-features">
        <Title>
          <LocaleFormatter id="app.documentation.catalogue.title" />
        </Title>
        <Paragraph>
          <LocaleFormatter id="app.documentation.catalogue.description" />
        </Paragraph>
      </section>

      <div className="sections-container">
        {[
          'layout',
          'routes',
          'request',
          'theme',
          'typescript',
          'international'
        ].map((section) => (
          <section
            key={section}
            id={section}
            className="section-card"
          >
            <div className="section-card-image">
              <img
                src={`src/assets/login/image.png`}
                alt={`${section} header`}
                className="section-image"
              />
              <Title level={2} className="section-title">
                <LocaleFormatter id={`app.documentation.catalogue.list.${section}`} />
              </Title>
            </div>
            <Paragraph className="section-paragraph">
              {section === 'layout' && (
                <>The detailed analytics dashboard for Afya Moja offers comprehensive insights into patient health metrics, treatment efficacy, and overall clinic performance. By integrating real-time data visualization, predictive analytics, and user-friendly interfaces, it empowers healthcare professionals to make informed decisions, optimize resource allocation, and enhance patient outcomes.</>
              )}
              {section === 'routes' && (
                <>The comprehensive patient registry for Afya Moja meticulously consolidates patient information, medical histories, and treatment plans into a centralized, easily accessible database. This robust registry facilitates seamless coordination among healthcare providers, ensuring accurate, up-to-date patient records, which enhance care continuity and improve health outcomes.</>
              )}
              {section === 'request' && (
                <>Afya Moja's seamless communication channels foster efficient, real-time interaction between healthcare providers, patients, and administrative staff. By integrating secure messaging, video conferencing, and instant notifications, these channels ensure timely information exchange, enhance patient engagement, and streamline the overall healthcare delivery process.</>
              )}
              {section === 'theme' && (
                <>Afya Moja's virtual consultation setups enable patients to receive expert medical advice and care from the comfort of their homes. Utilizing high-quality video conferencing, secure data transmission, and intuitive scheduling systems, these setups provide accessible, timely, and personalized healthcare services, bridging geographical barriers and enhancing patient convenience.</>
              )}
              {section === 'typescript' && (
                <>Afya Moja's telehealth tools revolutionize healthcare delivery by offering remote monitoring, digital diagnostics, and virtual consultations. These advanced tools integrate seamlessly with existing systems, providing real-time health data, enabling proactive care management, and ensuring continuous, high-quality patient support regardless of location.</>
              )}
              {section === 'international' && (
                <>Afya Moja's disease campaign functionalities are designed to efficiently manage and track public health initiatives. These features include targeted outreach, data-driven campaign management, and real-time impact analysis, empowering health organizations to effectively address disease outbreaks, enhance community awareness, and improve overall public health outcomes.</>
              )}
            </Paragraph>
          </section>
        ))}
      </div>
      
      <footer className="footer">
        <p>Contact us at: <a href="mailto:c.kioko@alustudent.com">c.kioko@alustudent.com</a></p>
      </footer>
    </div>
  );
};

export default DocumentationPage;
