import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistic({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
