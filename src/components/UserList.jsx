import UserCard from "./UserCard";
import LoadingSpinner from "./LoadingSpinner";
import useFetch from "../hooks/useFetch";

function UserList() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>สมาชิก</h2>

      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;