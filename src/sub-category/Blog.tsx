import { useState, useEffect } from "react";
import FeaturedPosts from "../importantparts/FeaturedPosts";
import {
  GlobalContainerColumn,
  GlobalMainTitle,
  GlobalBoxColumnStart,
  GlobalPart,
} from "../style/GlobalStyle";
import { fetchBlogData } from "../data/sub-category data/BlogData";
import { BlogDocument } from "../types/DataTypes";

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogDocument | undefined>();

  useEffect(() => {
    const getCarouselData = async () => {
      const data = await fetchBlogData();
      if (data && data.postArray[0]) {
        setBlogData(data);
      }
    };

    getCarouselData();
  }, []);

  return (
    <GlobalContainerColumn style={{ padding: 0 }}>
      <GlobalMainTitle style={{ marginTop: 80 }}>
        {blogData?.mainTitle}
      </GlobalMainTitle>
      <GlobalBoxColumnStart>
        <GlobalPart style={{ padding: "0 80px" }}>
          {blogData?.content}
        </GlobalPart>
      </GlobalBoxColumnStart>
      {blogData && <FeaturedPosts posts={blogData.postArray} />}
    </GlobalContainerColumn>
  );
}
