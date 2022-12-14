/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from 'react';
import { Container, List, Info, Image, SeeMore } from './styles';
import api from '../../api/api';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services').then((response) => setServices(response.data));
  }, []);

  return (
    <Container>
      <h1>Services</h1>
      <List>
        {services.map((item) => (
          <li key={item.id}>
            <Image>
              <img src={item.portfolio[0]} alt="" />
            </Image>
            <Info>
              <span>Demo</span>
              <h2>{item.name}</h2>
              <SeeMore to={`/services/${item.id}`}> see More</SeeMore>
            </Info>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Services;
