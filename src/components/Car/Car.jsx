export const Car = ({
  id,
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
  const [, city, country] = address;
  return(
    <div>
    <img src={img} alt={make}/>
    <div>
      <p>
      {make}&nbsp;<span>{type},</span>&nbsp;{year}
      </p>
      <p>{rentalPrice}</p>
    </div>
          <p>
      {city} | {country} | {rentalCompany} | {type} | {id} | {fuelConsumption}
      </p> 
      </div>   
  )
  
};


{/* 

return (
  <List>
    {items.map(item => (
      <ListItem key={item.id}>
        <ContactCard>
          {item.name}:&nbsp;<span>{item.number}</span>
          <Button type="button" onClick={() => onDelete(item.id)}>
            Delete
          </Button>
        </ContactCard>
      </ListItem>
    ))}
  </List>  */}