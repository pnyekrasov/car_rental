import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCatalog } from 'redux/operations';
import { Car } from 'components/Car/Car';
import { useSelector } from 'react-redux';
import { selectCatalog } from 'redux/selectors';



// import { ContactsBook } from './App.staled';
// import {} from '../ContactList/ContactList.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCatalog);
 

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <ul>
      {cars.map(item => (
        <li key={item.id}>
          <Car {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
