import { LogoType, HMenuType } from "../types/DataTypes";
import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";

export const fetchHeaderMainLogo = async (): Promise<LogoType> => {
  const data = await GeneralizedFetch<LogoType>("header", "logo");
  return data || { logo: null };
};

export const fetchHeaderMenuData = async (): Promise<HMenuType[]> => {
  const data = await GeneralizedFetch<{ Data: HMenuType[] }>("header", "menu");
  return data?.Data || [];
};
