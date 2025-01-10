
import Profile from "./components/profile/profile.jsx";
import FriendList from "./FriendList.jsx";
import TransactionHistory from "./components/transaction/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./Friends.json";
import transactions from "./transaction.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;