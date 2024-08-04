import { useState } from 'react';
import type { FC } from 'react';
import { Card, Col, Row, Divider, Button } from 'antd';

const { Meta } = Card;

interface ContentCard {
  image: string;
  title: string;
  description: string;
}

const contentCards: ContentCard[] = [
  { image: '/src/assets/login/five.png', title: 'Educational Video 1', description: 'An informative video about health and wellness practices.' },
  { image: '/src/assets/login/three.jfif', title: 'Blog Post 1', description: 'A detailed blog post on managing chronic conditions.' },
  { image: '/src/assets/login/four.jfif', title: 'Online Course 1', description: 'A comprehensive course on basic first aid skills.' },
  { image: '/src/assets/login/two.jpg', title: 'Webinar 1', description: 'A live webinar on the latest advancements in medical technology.' },
  { image: '/src/assets/login/six.jpg', title: 'Educational Video 2', description: 'An engaging video about nutrition and healthy eating.' },
  { image: '/src/assets/login/seven.jfif', title: 'Blog Post 2', description: 'An insightful blog post on mental health awareness.' },
  { image: '/src/assets/login/eight.jfif', title: 'Online Course 2', description: 'A course focused on preventive healthcare strategies.' },
  { image: '/src/assets/login/four.jfif', title: 'Webinar 2', description: 'A webinar on effective communication in healthcare settings.' },
  { image: '/src/assets/login/eleven.jfif', title: 'Educational Video 3', description: 'A new educational video on exercise routines.' },
  { image: '/src/assets/login/nine.jfif', title: 'Blog Post 3', description: 'Latest blog post on healthy living.' },
  { image: '/src/assets/login/ten.jfif', title: 'Online Course 3', description: 'Course on stress management techniques.' },
  { image: '/src/assets/login/two.jpg', title: 'Webinar 3', description: 'Webinar on the impact of sleep on health.' },
  // more cards here if needed
];

const ITEMS_PER_ROW = 4;
const INITIAL_VISIBLE_CARDS = 4;

const ContentLibraryPage: FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + INITIAL_VISIBLE_CARDS, contentCards.length));
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      {/* My Content Library Section */}
      <div style={{ marginBottom: '24px' }}>
        <h2>My Content Library</h2>
        <p>
          This section is where healthcare professionals can post educational content, including videos, blogs, and images. 
          It also features online courses and webinars tailored for patients and healthcare providers.
        </p>
        <Divider />
      </div>

      <Row gutter={16}>
        {contentCards.slice(0, visibleCount).map((card, index) => (
          <Col span={24 / ITEMS_PER_ROW} key={index} style={{ marginBottom: '16px' }}>
            <a href="https://medium.com/read-or-die-hq/toxoplasma-is-a-common-parasite-that-causes-birth-defects-but-the-us-doesnt-screen-for-it-9cef04abafc2" target="_blank" rel="noopener noreferrer">
              <Card
                cover={<img alt={card.title} src={card.image} />}
                hoverable
                style={{ width: '100%' }}
              >
                <Meta title={card.title} description={card.description} />
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {visibleCount < contentCards.length && (
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <Button
            type="primary"
            onClick={handleLoadMore}
            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContentLibraryPage;
