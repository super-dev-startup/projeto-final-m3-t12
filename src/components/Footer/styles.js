import styled from 'styled-components';

const SpanDiv = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 2px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1800px) {
    font-size: 16px;
    padding: 4px 0;
  }

  @media (min-width: 2200px) {
    font-size: 20px;
    padding: 6px 0;
  }
`;

export default SpanDiv;
