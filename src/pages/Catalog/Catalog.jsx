import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import { CarsList } from "../../components/CarsList";
import{Filters} from "../../components/Filters";
// import { CarsList } from "../components/CarsList/CarsList";
// import { Filters } from "../components/Filters/Filters";
// import { fetchCars, filterCarsByMake, loadMoreCars } from "../redux/operations";
// import { useEffect, useState } from "react";

// import {
//   selectCars,
//   selectIsLoading,
//   selectMake,
//   selectMileageFrom,
//   selectMileageTo,
//   selectPrice,
// } from "../redux/selectors";
// import { Circles } from "react-loader-spinner";

const Catalog = () => {
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 12;
//   const [hasMoreCars, setHasMoreCars] = useState(true);

//   useEffect(() => {
//     dispatch(fetchCars({ page: 1, pageSize: pageSize })).then((data) => {
//       data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
//     });
//   }, [dispatch]);

//   const price = useSelector(selectPrice);
//   const make = useSelector(selectMake);
  const isLoading = useSelector(selectIsLoading);
//   const mileageFrom = useSelector(selectMileageFrom);
//   const mileageTo = useSelector(selectMileageTo);

//   let cars = useSelector(selectCars);

//   if (price !== "" && mileageFrom !== "" && mileageTo !== "") {
//     cars = cars.filter(
//       (car) =>
//         Number(car.rentalPrice) <= price &&
//         Number(car.mileage) >= mileageFrom &&
//         Number(car.mileage) <= mileageTo
//     );
//   }

//   const handleSearchFilters = () => {
//     dispatch(filterCarsByMake({ make })).then((data) => {
//       data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
//     });
//   };

//   const handleLoadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     dispatch(loadMoreCars({ page: nextPage, pageSize: pageSize })).then(
//       (data) => {
//         data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
//       }
//     );
//   };

  return (
    <>
      <Filters />
      {isLoading ? (
        <Loader
        />
      ) : (
        <CarsList
        />
      )}
    </>
  );
};

export default Catalog;



{/* <Filters onClick={handleSearchFilters} />
{isLoading ? (
  <Circles
    height="80"
    width="80"
    color="blue"
    ariaLabel="circles-loading"
    wrapperStyle={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  />
) : (
  <CarsList
    cars={cars}
    hasMoreCars={hasMoreCars}
    onClick={handleLoadMore}
  />
)} */}