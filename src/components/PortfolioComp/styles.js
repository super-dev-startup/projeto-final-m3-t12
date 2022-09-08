/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Portfolio = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ItemsWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  button {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  margin-top: 5px;

  width: 100%;
  max-width: 500px;

  @media (min-width: 768px) {
    max-width: 800px;
  }

  @media (min-width: 1400px) {
    max-width: 1000px;
  }

  @media (min-width: 1800px) {
    max-width: 1200px;
  }
`;

export const Item = styled.div`
  /* flex: none; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 600px;
  overflow: hidden;

  img {
    width: 100%;

    object-fit: cover;
    /* object-position: bottom; */
  }
`;

export const InfoItem = styled.aside`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
  gap: 10px;

  h3 {
    text-transform: uppercase;
    font: 600 16px/16px 'Inter';
  }

  span {
    font: 400 16px/16px 'Inter';
  }

  button {
    background: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font: 500 12px/16px 'Inter';
  }

  button:hover {
    background: #fff;
    color: #000;

    border: solid 0.5px;
  }

  @media (min-width: 768px) {
    border-left: solid 1px #000;
    gap: 50px;
  }

  @media (min-width: 1400px) {
    h3 {
      font-size: 22px;
    }
    span {
      font-size: 22px;
    }

    button {
      padding: 14px;
      font-size: 14px;
    }
  }

  @media (min-width: 1400px) {
    h3 {
      font-size: 24px;
    }
    span {
      font-size: 24px;
    }

    button {
      padding: 16px;
      font-size: 16px;
    }
  }

  @media (min-width: 1400px) {
    h3 {
      font-size: 28px;
    }
    span {
      font-size: 28px;
    }

    button {
      padding: 22px 18px;
      font-size: 20px;
    }
  }
`;
