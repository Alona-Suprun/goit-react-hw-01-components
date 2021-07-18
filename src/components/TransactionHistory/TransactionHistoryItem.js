import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <tr key={id} className={s.text}>
      <td className={s.textItem}>{type}</td>
      <td className={s.textItem}>{amount}</td>
      <td className={s.textItem}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
