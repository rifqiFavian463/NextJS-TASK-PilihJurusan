import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    comicEndpoint: [];
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Comics - ${params.comicEndpoint[params.comicEndpoint.length - 1]}`,
  };
};
async function comicEndpoint({ params }: { params: { comicEndpoint: [] } }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  });
  return (
    <div className="flex flex-col items-center justify-center h-48" data-item="detail-endpoint">
      Endpoint comic : {params.comicEndpoint.join("/")}
    </div>
  );
}

export default comicEndpoint;
