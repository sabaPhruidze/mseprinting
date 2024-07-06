import { GeneralizedFetch } from "../../importantparts/GeneralizedFetch";
import { BlogDocument } from "../../types/DataTypes";

export const fetchBlogData = async (): Promise<BlogDocument | null> => {
  return GeneralizedFetch<BlogDocument>("sub-category", "Blog");
};
