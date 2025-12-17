import "./App.css";
// import Product from "./Product";
// import { Alert } from "../Alert/Alert";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "./FriendList/FriendList";
import transaction from "../transaction.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        status={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />

      {/* <h1>Products</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert> */}
    </>
  );
}

export default App;
