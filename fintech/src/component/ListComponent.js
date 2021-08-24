import React, { useState } from "react";

const ListComponent = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: 12, height: 180 },
    { name: "동", age: 18, height: 180 },
    { name: "길동", age: 16, height: 180 },
  ]);

  return (
    <div>
      {users.map((user) => {
        return (
          <p>
            {user.name} {user.age} {user.height}
          </p>
        );
      })}
    </div>
  );
};

export default ListComponent;
