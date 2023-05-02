import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 50px auto 50px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: var(--box-shadow);
`;

export const TransactionTr = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const TransactionTh = styled.th`
  width: 100%;
  padding: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(26 / 18);
  letter-spacing: 0.06em;
  background-color: var(--accent-color);
  border-radius: 5px;
`;

export const TransactionThead = styled.thead``
export const TransactionTBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Transaction = styled.td`
  width: 100%;
  padding: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(20 / 14);
  letter-spacing: 0.06em;
  background-color: var(--background-color-component);
  border-radius: 5px;

  &:first-of-type {
    text-transform: capitalize;
  }

  &:hover {
    font-weight: 800;
    background-color: var(--accent-color);
    color: var(--second-text-color);
    cursor: pointer;
  }
`;
