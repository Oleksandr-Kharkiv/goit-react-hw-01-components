import styled from '@emotion/styled';
import getRandomColor from '../utils/getRandomColor'

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 100%;
  padding-left: 15px;
  background-color: var(--background-color-component);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border: 2px dotted grey;
  border-radius: 5px;

  border-color: ${getRandomColor()};
`;

export const Name = styled.p`
  padding: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.06em;
`;
