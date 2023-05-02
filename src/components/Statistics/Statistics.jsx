import PropTypes from 'prop-types';
import {SectionStatistics, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsPercentage, StatisticsLabel} from './Statistics.styled';
import getRandomColor from '../utils/getRandomColor'

export const Statistics = ({title, stats}) => {
  return (
    <SectionStatistics>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} 
          style={{backgroundColor: getRandomColor()}}
          >
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage+"%"}</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


  // ========================== варіант css-модулі ==================


// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
// import getRandomColor from '../utils/getRandomColor'

// export const Statistics = ({title, stats}) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}

//       <ul className={css.statList}>
//         {stats.map(({ id, label, percentage }) => (
//           <li key={id} className={css.item} style={{backgroundColor: getRandomColor()}}>
//             <span className={css.label}>{label}</span>
//             <span className={css.percentage}>{percentage+"%"}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };