import PropTypes from 'prop-types';
import Statistic from 'Components/Statistic/Statistic';
import css from './StatisticsList.module.css';

export default function StatisticsList({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul type="none" className={css.statList}>
        {stats.map(stat => (
          <Statistic
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.exact).isRequired,
};
