export const Car = ({
  img,
  make,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  fuelConsumption,
}) => {
   <ul>
    <li>{img}</li>
    <li>{make}</li>
    <li>{year}</li>
    <li>{rentalPrice}</li>
    <li>{address}</li>
    <li>{rentalCompany}</li>
    <li>{type}</li>
    <li>{mileage}</li>
    <li>{fuelConsumption}</li>
    </ul>  
};
