import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTr,
  TransactionTh,
  TransactionTBody,
  TransactionThead,
  Transaction,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>
      <TransactionTBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTr key={id}>
            <Transaction>{type}</Transaction>
            <Transaction>{amount}</Transaction>
            <Transaction>{currency}</Transaction>
          </TransactionTr>
        ))}
      </TransactionTBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';

// export const TransactionHistory = ({ items }) => {
//   return (
//     <table className={css.transactionHistory}>
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map(({ id, type, amount, currency }) => (
//           <tr key={id}>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// TransactionHistory.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
