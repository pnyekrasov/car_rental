import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Car } from '../../components/Car/Car';
import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/selectors';
import { fetchCatalog } from '../../redux/operations';
import { Gallery } from './Catalog.styled';

// import { ContactsBook } from './App.staled';
// import {} from '../ContactList/ContactList.styled';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const cars = useSelector(selectCatalog);
  console.log(cars);

  return (
    <Gallery>
      {cars.map(item => (
          <li key={item.id}>
            <Car {...item} />
          </li>
        ))}
    </Gallery>
  );
};

export default Catalog;
