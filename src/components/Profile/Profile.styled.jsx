import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: var(--background-color-component);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: auto;
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 7px 29px 0px;
`;

export const UserName = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(26 / 18);
  letter-spacing: 0.06em;
`;

export const Tag = styled.p`
  margin: 0;
  text-align: center;
`;

export const Location = styled.p`
  margin: 0;
  text-align: center;
`;

export const Stats = styled.ul`
  max-width: 100%;
  margin: 0;
  padding: 5px;
  display: flex;
  gap: 3px;
  justify-content: space-evenly;
  list-style: none;
  border-radius: 5px;
`;

export const StatsItem = styled.li`
  flex-basis: calc((100% - 1px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  background-color: var(--accent-color);
  border-radius: 5px;
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(26 / 18);
  letter-spacing: 0.06em;
`;
