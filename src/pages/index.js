import React from "react";

import Seo from "../components/seo";
import Map from "../components/map";
import Sidebar from "../components/sidebar";

const IndexPage = () => {
  return (
    <>
      <Seo title="Mask map" />
      <Sidebar />
      <Map />
    </>
  );
};

export default IndexPage;
