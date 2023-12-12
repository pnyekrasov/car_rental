import { useState } from 'react';
import { FaCar } from "react-icons/fa";

import { ModalWindow } from 'components/Modal/Modal';

import {
  Block,
  Button,
  Desc,
  Gallery,
  Item,
  Lead,
  ModalPhoto,
  ModalTitle,
  Photo,
  Subtitle,
  Tagline,
  Text,
  Title,
} from './Car.styled';

export const Car = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  functionalities,
  rentalConditions,

}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const dispatch = useDispatch();

  // const isClose = () => setModalEditOpen(false);

  const [, city, country] = address.match(/,\s*([^,]+),\s*([^,]+)$/);
  return (
    <Item>
      <Photo src={img} alt={make} />
      <Title>
        <p>
          {make}&nbsp;<Subtitle>{model},</Subtitle>&nbsp;{year}
        </p>
        <p>{rentalPrice}</p>
      </Title>
      <Text>
        {city} | {country} | {rentalCompany}
      </Text>
      <p>
        {type} | {mileage} | {fuelConsumption}
      </p>
      <Button type="button" onClick={() => setModalOpen(true)}>
        Learn more
      </Button>
      <ModalWindow isOpen={modalOpen} isClose={() => setModalOpen(false)}>
        <>
          <ModalPhoto src={img} alt={make} />
          <ModalTitle>
            {make}&nbsp;<Subtitle>{model},</Subtitle>&nbsp;{year}
          </ModalTitle>
          <Text>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </Text>
          <Lead>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </Lead>
          <Desc>
            <p>{description}</p>
            <Tagline>Accessories and functionalities:</Tagline>
          </Desc>
          <Text>
            {accessories.join(' | ')}
          </Text>
          <p>
            {functionalities.join(' | ')}
          </p>
          <Desc>           
            <Tagline>Rental Conditions:</Tagline>
          </Desc>
          <Gallery>
            <Block>{rentalConditions.split("\n")[0].split(": ")[0]}:&nbsp;<Subtitle>{rentalConditions.split("\n")[0].split(": ")[1]}</Subtitle></Block>
            <Block>{rentalConditions.split("\n")[1]}</Block>
            <Block>{rentalConditions.split("\n")[2]}</Block>
            <Block>Mileage: <Subtitle>{mileage}</Subtitle></Block>
            <Block>Price: <Subtitle>{rentalPrice}</Subtitle></Block>
          </Gallery>
        </>
      </ModalWindow>
    </Item>
  );
};
