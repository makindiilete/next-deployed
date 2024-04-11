import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  name: string;
  id: number;
  email: string;
}

interface IProps {
  sortOrder: string;
  direction: "asc" | "desc";
}

const UserTable = async ({ sortOrder, direction }: IProps) => {
  //Fetching data in server components : - We fetch directly, no useState, no useEffect, no 'handleGetUsers' function
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();
  const sortedUsers =
    direction === "asc"
      ? sort(users).asc(sortOrder === "name" ? "name" : "email")
      : sort(users).desc(sortOrder === "name" ? "name" : "email");

  return (
    <div className="overflow-x-auto">
      <p>{JSON.stringify(sortOrder)}</p>
      <p>{JSON.stringify(direction)}</p>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <Link href="/users?sortOrder=name&direction=asc" className="px-2">
                Name ASC
              </Link>
              <Link href="/users?sortOrder=name&direction=desc">DESC</Link>
            </th>
            <th>
              <Link
                href="/users?sortOrder=email&direction=asc"
                className="px-2"
              >
                Email ASC
              </Link>
              <Link href="/users?sortOrder=email&direction=desc">DESC</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </th>

              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
