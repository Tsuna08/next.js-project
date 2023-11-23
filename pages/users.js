import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords="Users list">
      <h1>Users list</h1>
      <ul>
        {users.map((user, index) => (
          <li>
            <Link key={index} href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
}
