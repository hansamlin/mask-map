import React, { createContext, useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FilterProvider } from "./filterProvider";

export const MaskProvider = createContext();

export default ({ children }) => {
  const { allMaskdataJson } = useStaticQuery(graphql`
    {
      allMaskdataJson {
        nodes {
          type
          features {
            type
            properties {
              address
              available
              mask_adult
              mask_child
              name
              note
              phone
              updated
              id
            }
            geometry {
              coordinates
              type
            }
          }
        }
      }
    }
  `);

  const { filter } = useContext(FilterProvider);

  const [geoJson] = allMaskdataJson.nodes;

  let [store, setStore] = useState([]);
  console.log(store);
  if (!filter.all && store.length > 0) {
    if (filter.adult) {
      store = store.filter(item => item.properties.mask_adult > 0);
    } else {
      store = store.filter(item => item.properties.mask_child > 0);
    }
  }

  return (
    <MaskProvider.Provider value={{ store, setStore, geoJson }}>
      {children}
    </MaskProvider.Provider>
  );
};
