import styled from '@emotion/styled';
import getRandomColor from '../utils/getRandomColor'

export const SectionStatistics = styled.section`
  background-color: var(--background-color-component);
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 350px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 15px 0 10px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  gap: 3px;
  padding: 5px;
  max-width: 100%;
`;
export const StatisticsItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  color: var(--second-text-color);
  border-radius: 5px;

  /* background-color: ${getRandomColor()} */
`;
export const StatisticsPercentage = styled.span`
  font-weight: 600;
`;
export const StatisticsLabel = styled.span`
  font-weight: 400;
`;
