import React, { useState } from "react";
import { Typography } from "antd";
import { PostsContainer } from "./layout/theme/style";
import data from "../posts/posts";
import MyImage from "./common/img";
import CustomButton from "./common/customButton";

const { Title } = Typography;

const PostCards = () => {
  const [limit, setLimit] = useState(3);
  const slice = data.posts.slice(0, limit);

  const loadMore = () => {
    setLimit(limit + limit);
  };

  return (
    <PostsContainer>
      <div className="row-container">
        <div className="cards-wrapper">
          {slice.map((card) => (
            <div key={card.id} className="card">
              <div className="image grow">
                <MyImage src={card.image} alt={card.title} height={400} />
              </div>
              <div className="content scale">
                <Title className="content-text">{card.title}</Title>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more-wrapper">
          <CustomButton type="primary" onClick={loadMore}>
            Load More...
          </CustomButton>
        </div>
      </div>
    </PostsContainer>
  );
};

export default PostCards;
