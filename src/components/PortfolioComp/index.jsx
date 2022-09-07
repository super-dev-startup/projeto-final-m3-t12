/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Carousel from 'react-elastic-carousel'

import api from "../../api/api";
import { InfoItem, Item, Items, ItemsWraper, Portfolio } from "./styles";

const PortfolioComp = () => {
  const [services, setServices] = useState([]);

  const [images, setImages] = useState([]);

  const { id } = useParams("/services/:id");

  useEffect(() => {
    api.get(`/services/${id}`).then((response) => {
      setServices(response.data);
      setImages(response.data.portfolio);
    });
  }, []);

  return (
    <Portfolio>
      <ItemsWraper>
        <Items>
          <Carousel>
      {images.map((item) => (
        <Item>
          <img src={item} alt="" />
        </Item>
      ))}
          </Carousel>
        </Items>
      </ItemsWraper>
      
      <InfoItem>
        <h3>{services.name}</h3>

        <span>$ {services.price},00</span>

        <Link to='/contacts'><button type="button"> send a mensage</button></Link>
      </InfoItem>
    </Portfolio>
  );
};


export default PortfolioComp;
