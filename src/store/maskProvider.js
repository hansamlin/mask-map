import React, { createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

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

  const data = source.maskdata.getMasks.payload.filter(item => {
    return item.location;
  });
  // console.log(source.maskdata.getMasks.payload.length, data.length);
  return (
    <MaskProvider.Provider value={{ data }}>{children}</MaskProvider.Provider>
  );
};
