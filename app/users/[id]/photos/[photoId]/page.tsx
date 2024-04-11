import React from "react";

interface IProps {
  params: { id: number; photoId: number };
}
const PhotoDetail = ({ params: { photoId, id } }: IProps) => {
  return <div>{`User Id - ${id} ==> Photo Id - ${photoId}`}</div>;
};

export default PhotoDetail;
