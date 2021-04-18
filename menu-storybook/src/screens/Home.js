import React, {useState, useEffect} from 'react';
import { MenuItem } from '../components/storybook-menu/MenuItem';

export function Home() {
  const [menuData, setMenuData] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      'appMenuData.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json,'
        },
      }
    );

    return response.json()
  };

  useEffect(  () => {
    loadData().then(data => {console.log(data); setMenuData(data)});
  },[]);

  let hasData = menuData.length > 0;
  return (
    <div>
      {hasData &&
        menuData.map(item => MenuItem(item))
      }
    </div>
  )
}
