/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import api from '../../api/api';
import { InfoItem, Item, Items, ItemsWraper, Portfolio } from './styles';
import ContactModal from '../Modal';
// import { RouteContext } from '../../contexts/contextRoutes';

const PortfolioComp = () => {
  const [services, setServices] = useState([]);

  const [images, setImages] = useState([]);

  const { id } = useParams('/services/:id');

  // const { handleModal } = useContext(RouteContext);

  useEffect(() => {
    api.get(`/services/${id}`).then((response) => {
      setServices(response.data);
      setImages(response.data.portfolio);
    });
  }, []);

  return (
    <>
      <Portfolio>
        <ItemsWraper>
          <Items>
            <Carousel>
              {images.map((item, index) => (
                <Item key={index}>
                  <img src={item} alt="" />
                </Item>
              ))}
            </Carousel>
          </Items>
        </ItemsWraper>

        <InfoItem>
          <h3>{services.name}</h3>

          <span>{`PRICE: $${services.price},00`}</span>

          <Link to="/contacts">
            <button type="button">Send a Message</button>
          </Link>
        </InfoItem>
      </Portfolio>
      <ContactModal />
    </>
  );
};

export default PortfolioComp;
