import styled from 'styled-components';

export const DropDownContact = styled.div`
  .dropdown-menu {
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          color: #000;
          font-size: 20px;
          text-align: center;
          padding: 5px;
          width: 12px;
          height: 20px;
        }
      }
    }
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
    transform: translateX(-20px);

    transition: 0.2s ease;
  }

  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition: 0.2s;
  }

  .menu-trigger {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
      background-color: #585858;

      height: 50px;
      width: 50px;

      @media (min-width: 768px) {
        height: 65px;
        width: 65px;
      }

      @media (min-width: 1400px) {
        height: 80px;
        width: 80px;
      }

      @media (min-width: 1800px) {
        height: 90px;
        width: 90px;
      }
    }
  }
`;
