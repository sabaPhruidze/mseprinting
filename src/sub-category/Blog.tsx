import { useState, useEffect, useMemo, useCallback } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
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
  const [loading, setLoading] = useState<boolean>(true);

  const getCarouselData = useCallback(async () => {
    setLoading(true);
    const data = await fetchBlogData();
    if (data && data.postArray[0]) {
      setBlogData(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getCarouselData();
  }, [getCarouselData]);

  const mainTitle = useMemo(() => blogData?.mainTitle, [blogData]);
  const content = useMemo(() => blogData?.content, [blogData]);
  const posts = useMemo(() => blogData?.postArray, [blogData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GlobalContainerColumn style={{ padding: 0 }}>
      {/* HelmetComponent for SEO */}
      <HelmetComponent
        title="MSE Printing Blog | Insights and Updates on Printing, Design, and Marketing"
        description="Explore the latest insights, updates, and tips on printing, design, marketing, and more from MSE Printing. Stay informed with our featured blog posts."
      />

      <GlobalMainTitle style={{ marginTop: 80 }}>{mainTitle}</GlobalMainTitle>
      <GlobalBoxColumnStart>
        <GlobalPart style={{ padding: "0 80px" }}>{content}</GlobalPart>
      </GlobalBoxColumnStart>
      {posts && <FeaturedPosts posts={posts} />}
    </GlobalContainerColumn>
  );
}
