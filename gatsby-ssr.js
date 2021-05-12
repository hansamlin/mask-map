/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react");
// import Layout from "./src/components/layout";
// import Provider from "./src/store/provider";

// export const wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };

// export const wrapRootElement = ({ element }) => {
//   return <Provider>{element}</Provider>;
// };

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV === "production") {
    const ga = (
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-195589302-4`}
        key="ga-id"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-195589302-4');`
        }}
      ></script>
    );

    const gTag = (
      <script
        key="g-tag"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WWFL932');`
        }}
      ></script>
    );

    const gtagNoScript = (
      <noscript key="gtagNoScript">
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-WWFL932`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="googletagmanager"
        ></iframe>
      </noscript>
    );

    setHeadComponents([ga, gTag]);
    setPreBodyComponents([gtagNoScript]);
  }
};
