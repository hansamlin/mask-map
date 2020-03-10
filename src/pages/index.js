import React from "react";

import Seo from "../components/seo";
import Map from "../components/realtime/map";
import Sidebar from "../components/realtime/sidebar";
import Provider from "../store/provider";
import Layout from "../components/layout";
import Rule from "../components/pullMaskRule";
import Search from "../components/realtime/search";

export default () => {
  return (
    <Layout>
      <Seo title="Mask map" />
      <Rule />
      <Provider>
        <Search />
        <Sidebar />
        <Map />
      </Provider>
    </Layout>
  );
};
