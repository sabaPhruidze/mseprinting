import React, { useEffect, useState } from "react";
import { fetchHeaderMenuData, HMenuData } from "../data/HeaderData"; // Adjust the path as needed

const HeaderMenuComponent: React.FC = () => {
  const [menuData, setMenuData] = useState<HMenuData[]>([]);

  useEffect(() => {
    const getMenuData = async () => {
      const data = await fetchHeaderMenuData();
      if (data && data.length > 0 && data[0].page) {
        setMenuData(data);
      } else if (data && data.length > 0 && (data[0] as any).Data) {
        setMenuData((data[0] as any).Data);
      }
      console.log(data); // Check the structure of the data
    };

    getMenuData();
  }, []);

  return (
    <nav>
      <ul>
        {menuData.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenuComponent;
