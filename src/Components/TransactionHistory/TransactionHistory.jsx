import PropTypes from 'prop-types';
import Transaction from 'Components/Transaction/Transaction';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map(item => (
          <Transaction
            key={item.id}
            amount={item.amount}
            currency={item.currency}
            type={item.type}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact).isRequired,
};
