import React, { Suspense } from "react";
import UserTable from "@/app/users/UserTable";
import Link from "next/link";

interface IProps {
  searchParams: { sortOrder: string; direction: "asc" | "desc" };
}
const UsersPage = async ({ searchParams }: IProps) => {
  return (
    <>
      <h1 className="underline">Users</h1>
      <br />
      <p>{JSON.stringify(searchParams)}</p>
      <Link href="/users/new" className="btn btn-accent">
        NEW USER
      </Link>
      <br />
      {/*  Component wrapped inside a suspense to handle loading when users are bin fetched from the api*/}
      <Suspense>
        <UserTable
          sortOrder={searchParams.sortOrder}
          direction={searchParams.direction}
        />
      </Suspense>
    </>
  );
};

export default UsersPage;
