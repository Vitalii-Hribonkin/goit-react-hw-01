import friends from "./friends.json";
import FriendListItem from "./components/friendlist/FriendListItem.jsx";

function FriendList() {
  return (
    <div>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
}

export default FriendList;
