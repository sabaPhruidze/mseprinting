import {
  HomeServicesFullType,
  HomeServicesFullDatasType,
} from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchHomeServicesData =
  async (): Promise<HomeServicesFullType> => {
    const data = await GeneralizedFetch<HomeServicesFullType>(
      "products-services",
      "data"
    );
    return (
      data || {
        DirectMailAndMailingServices: null,
        FulfillmentServices: null,
        GraphicDesign: null,
        IndustrySpecific: null,
        LabelsAndPackaging: null,
        MarketingServices: null,
        OnlineOrderingPortals: null,
        PrintingAndCopying: null,
        Signs: null,
        TradeshowsAndEvents: null,
        left: [],
      }
    );
  };

export const fetchHomeServicesDatas =
  async (): Promise<HomeServicesFullDatasType> => {
    const data = await GeneralizedFetch<HomeServicesFullDatasType>(
      "products-services",
      "datas"
    );
    return (
      data || {
        DirectMailAndMailingServices: null,
        FulfillmentServices: null,
        GraphicDesign: null,
        IndustrySpecific: null,
        LabelsAndPackaging: null,
        MarketingServices: null,
        OnlineOrderingPortals: null,
        PrintingAndCopying: null,
        Signs: null,
        TradeshowsAndEvents: null,
        left: [],
      }
    );
  };
