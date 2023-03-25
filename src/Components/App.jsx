import Profile from './Profile/Profile';
import StatisticsList from './StatisticsList/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from '../data/index.js';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        username={user.username}
        stats={user.stats}
      />
      <StatisticsList title={'Upload Stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
