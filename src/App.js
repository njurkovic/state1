import React from "react";
import detailUser from "./components/detailUser";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, marka: "Škoda", tip: "Octavia", godište: "2023" },
    { id: 2, marka: "VW", tip: "Golf", godište: "2023" },
  ]);

  function AddUser({ marka, tip, godište }) {
    setUsers([
      ...users,
      { id: users.length + 1, marka: marka, tip: tip, godište: godište },
    ]);
  }

  return (
    <div>
      <h1>dodaj vozilo:</h1>
      <addUser onUserSubmit={AddUser} />
      {users.map((user) => (
        <p>
          key={user.id}
          <detailUser
            marka={user.marka}
            tip={user.tip}
            godište={user.godište}
          />
        </p>
      ))}
    </div>
  );
};

export default App;
