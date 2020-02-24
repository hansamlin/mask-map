/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import Layout from "./src/components/layout";
import Provider from "./src/store/maskProvider";
import "react-leaflet-markercluster/dist/styles.min.css";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
