import { useDispatch } from 'react-redux';
import { useEffect} from 'react';

import { Car } from '../../components/Car/Car';
import { useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/selectors';
import { fetchCatalog } from '../../redux/operations';
import { Gallery, Item } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();


  const currentPage = 1;
  const limit = 12; 


  useEffect(() => {
    dispatch(fetchCatalog({ page: currentPage, limit }))
  }, [dispatch]);

  const cars = useSelector(selectCatalog);
  console.log(cars);


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

export default Catalog;
