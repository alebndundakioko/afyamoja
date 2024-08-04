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
  { image: 'https://via.placeholder.com/300x200', title: 'Educational Video 1', description: 'An informative video about health and wellness practices.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Blog Post 1', description: 'A detailed blog post on managing chronic conditions.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Online Course 1', description: 'A comprehensive course on basic first aid skills.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Webinar 1', description: 'A live webinar on the latest advancements in medical technology.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Educational Video 2', description: 'An engaging video about nutrition and healthy eating.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Blog Post 2', description: 'An insightful blog post on mental health awareness.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Online Course 2', description: 'A course focused on preventive healthcare strategies.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Webinar 2', description: 'A webinar on effective communication in healthcare settings.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Educational Video 3', description: 'A new educational video on exercise routines.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Blog Post 3', description: 'Latest blog post on healthy living.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Online Course 3', description: 'Course on stress management techniques.' },
  { image: 'https://via.placeholder.com/300x200', title: 'Webinar 3', description: 'Webinar on the impact of sleep on health.' },
  // more cards
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
            <Card
              cover={<img alt={card.title} src={card.image} />}
              hoverable
              style={{ width: '100%' }}
            >
              <Meta title={card.title} description={card.description} />
            </Card>
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
