import React from "react";
import { notFound } from "next/navigation";

interface IProps {
  params: { id: number };
}
const UserDetails = ({ params: { id } }: IProps) => {
  if (id > 8) {
    // return a 404 page
    notFound();
  }
  return <div>User details page {id}</div>;
};

export default UserDetails;

/*export async function generateMetaData(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title: `....`,
    description: `....`,
  };
}*/
