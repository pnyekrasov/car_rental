import { useSelector } from "react-redux";

import { CarsList } from "../../components/CarsList/CarsList";
import { Loader } from "../../components/Loader/Loader";
import { selectIsLoading } from "../../redux/selectors";

const Catalog = () => {

  const isLoading = useSelector(selectIsLoading);

  return (
    <>  
          {/* {<CarsList />}   */}
      {isLoading ? <Loader /> : <CarsList />}
    </>
  );
};


export default Catalog;