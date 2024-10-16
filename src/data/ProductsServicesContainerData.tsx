import { HomeServicesFullDatasType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchHomeServicesDatas =
  async (): Promise<HomeServicesFullDatasType | null> => {
    return GeneralizedFetch<HomeServicesFullDatasType>(
      "products-services",
      "datas"
    );
  };
