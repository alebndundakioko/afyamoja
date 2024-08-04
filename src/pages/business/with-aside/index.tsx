import type { FC, ReactElement } from 'react';
import { Card, Input, Button, Divider, message } from 'antd';
import { useState } from 'react';

const dummyReviews = [
  { name: 'Alice Johnson', review: 'Great content! Very informative and engaging.', contentTitle: 'Educational Video: How to Manage Diabetes' },
  { name: 'Bob Smith', review: 'The video was quite helpful. Thanks for sharing!', contentTitle: 'Blog Post: Understanding Hypertension' },
  { name: 'Charlie Brown', review: 'I found the blog post to be a bit lengthy, but overall useful.', contentTitle: 'Artwork: Anatomy of the Human Heart' },
  { name: 'David Wilson', review: 'Very well organized and presented.', contentTitle: 'Online Course: Basics of Nutrition' },
  { name: 'Eva Green', review: 'The webinar was a great learning experience.', contentTitle: 'Webinar: Latest Advances in Cancer Research' },
  { name: 'Frank Miller', review: 'Highly recommended for anyone looking to improve their health.', contentTitle: 'Video Series: Managing Stress Effectively' },
  { name: 'Grace Lee', review: 'Informative and easy to understand.', contentTitle: 'Blog: Tips for a Healthy Lifestyle' },
  { name: 'Henry Carter', review: 'An insightful read. Thank you for sharing!', contentTitle: 'E-Book: Comprehensive Guide to Mental Health' },
  { name: 'Ivy Moore', review: 'Great visuals and useful information.', contentTitle: 'Infographic: Understanding Blood Pressure' },
  { name: 'Jack Harris', review: 'Very engaging and helpful content.', contentTitle: 'Podcast: Nutrition and Wellness Tips' },
  
];

const ReviewsPage: FC = (): ReactElement => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 4, dummyReviews.length));
  };

  const handleRespond = () => {
    message.success('Response to your review has been posted');
  };

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h2>Reviews on Your Content</h2>
      <p>
        This section displays feedback from viewers or readers about your content. 
        You can respond to reviews to engage with your audience and address their comments.
      </p>
      
      <Divider />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {dummyReviews.slice(0, visibleCount).map((review, index) => (
          <Card
            key={index}
            style={{ width: '300px' }}
            cover={<img alt="Profile" src={`https://i.pravatar.cc/150?img=${index + 1}`} style={{ borderRadius: '50%', width: '100px', height: '100px', margin: 'auto' }} />}
          >
            <Card.Meta
              title={`Review for: ${review.contentTitle}`}
              description={review.review}
            />
            <div style={{ marginTop: '16px' }}>
              <Input.TextArea rows={2} placeholder="Write a response..." />
              <Button 
                type="primary" 
                style={{ marginTop: '8px' }}
                onClick={handleRespond}
              >
                Respond
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {visibleCount < dummyReviews.length && (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
