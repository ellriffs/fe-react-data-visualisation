import {useState, useEffect} from 'react';
import Search from './Search';

const Results = () => {
  useEffect(() => {
    fetch(
      'http://store.steampowered.com/api/getappsincategory/?category=cat_newreleases&cc=us&l=english/',
      {
        method: 'GET',
        mode: 'cors',
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <main>
      <Search />
    </main>
  );
};

export default Results;
