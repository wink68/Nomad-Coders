import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

// useParams() : 파리미터 값을 URL을 통해 받아 사용할 수 있음
function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User with it {userId} is named: {users[Number(userId)-1].name}</h1>
      <hr />
      <Link to='followers'>See followers</Link>
      <Outlet context={{
        nameOfMyUser: users[Number(userId)-1].name,
      }} />
    </div>
  );
}
export default User;
