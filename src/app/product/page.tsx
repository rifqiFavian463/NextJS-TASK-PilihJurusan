import React from "react";
import CardComics from "../_components/card-comics";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Comics",
};

function comicView() {
  return (
    <div>
      <CardComics />
    </div>
  );
}

export default comicView;
