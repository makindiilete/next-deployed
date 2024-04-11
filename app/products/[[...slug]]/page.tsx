import React from "react";
interface IProps {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductDetails = ({
  params: { slug },
  searchParams: { sortOrder },
}: IProps) => {
  return (
    <>
      <div>{`Product routes ==> ${slug}`}</div>
      <p>{`SortOrder ==> ${sortOrder}`}</p>
    </>
  );
};

export default ProductDetails;
