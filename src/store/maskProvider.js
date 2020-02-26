import React, { createContext, useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FilterProvider } from "./filterProvider";

export const MaskProvider = createContext();

export default ({ children }) => {
  const source = useStaticQuery(graphql`
    {
      maskdata {
        getMasks {
          total
          status
          message
          errors
          payload {
            code
            name
            phone
            address
            adult_count
            child_count
            business_hours
            updated_at
            location {
              lat
              lon
            }
          }
        }
      }
    }
  `);

  const { filter } = useContext(FilterProvider);

  let data = source.maskdata.getMasks.payload.filter(item => {
    return item.location;
  });

  let [store, setStore] = useState([]);

  if (!filter.all) {
    if (filter.adult) {
      data = data.filter(item => item.adult_count > 0);
      store = store.filter(item => item.adult_count > 0);
    } else {
      data = data.filter(item => item.child_count > 0);
      store = store.filter(item => item.child_count > 0);
    }
  }

  return (
    <MaskProvider.Provider value={{ store, setStore, data }}>
      {children}
    </MaskProvider.Provider>
  );
};
