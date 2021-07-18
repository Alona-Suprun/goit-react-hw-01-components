import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ id, label, percentage }) => {
  return (
    <div className={s.wrap}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
