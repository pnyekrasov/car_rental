import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { Car } from '../Car/Car';
import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/selectors';
import { fetchCatalog } from '../../redux/operations';
import { Gallery, Item } from './CarsList.styled';


export const CarsList = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    dispatch(fetchCatalog({ page: currentPage, limit }));
  }, [currentPage, dispatch]);

  const cars = useSelector(selectCatalog);

  // const handleLoadMore = () => {
  //   const nextPage = currentPage + 1;
  //   dispatch(fetchCatalog({ page: nextPage, limit })).then(data => {
  //     data.payload.length < 12
  //       ? console.log('STOP')
  //       : setCurrentPage(nextPage);
  //   });
  // };

  return (
    <Gallery>
      {cars.map(item => (
        <Item key={item.id}>
          <Car {...item} />
        </Item>
      ))}
    </Gallery>
  );
};

// onClick={handleLoadMore}


