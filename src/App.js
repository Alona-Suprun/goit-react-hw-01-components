import Profile from './components/Profile/Profile.js';
import StatisticsList from './components/Statistics/StatisticsList.js';
import FriendList from './components/FriendList/FriendList';
import statisticalData from './statistical-data.json';
import user from './user.json';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList items={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}
