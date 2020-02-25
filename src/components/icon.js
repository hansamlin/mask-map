export const green = () => {
  const source = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><style>.a,.b{fill:#46c657;}.a{opacity:0.4;}</style></defs><g transform="translate(-630.19 -287.813)"><path class="a" d="M12.7,3C9.827,3,7.5,7.046,7.5,12.049c0,6.786,5.2,16.8,5.2,16.8s5.2-10.018,5.2-16.8C17.907,7.046,15.58,3,12.7,3Zm0,12.28c-1.026,0-1.858-1.448-1.858-3.232s.833-3.232,1.858-3.232,1.858,1.448,1.858,3.232S13.729,15.28,12.7,15.28Z" transform="translate(663.616 301.858) rotate(39)"/><path class="b" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(637.5 300)"/></g></svg>`;

  return getDataUrl(source);
};

export const orange = () => {
  const source = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><style>.a,.b{fill:#ff973b;}.a{opacity:0.4;}</style></defs><g transform="translate(-753.19 -228.813)"><path class="a" d="M12.7,3C9.827,3,7.5,7.046,7.5,12.049c0,6.786,5.2,16.8,5.2,16.8s5.2-10.018,5.2-16.8C17.907,7.046,15.58,3,12.7,3Zm0,12.28c-1.026,0-1.858-1.448-1.858-3.232s.833-3.232,1.858-3.232,1.858,1.448,1.858,3.232S13.729,15.28,12.7,15.28Z" transform="translate(786.616 242.858) rotate(39)"/><path class="b" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(761.5 241)"/></g></svg>`;

  return getDataUrl(source);
};

export const red = () => {
  const source = `<svg xmlns="http://www.w3.org/2000/svg" width="66.552" height="68.835" viewBox="0 0 66.552 68.835"><defs><style>.a,.b{fill:#e6541d;}.a{opacity:0.4;}</style></defs><g transform="translate(-630.19 -287.813)"><path class="a" d="M12.7,3C9.827,3,7.5,7.046,7.5,12.049c0,6.786,5.2,16.8,5.2,16.8s5.2-10.018,5.2-16.8C17.907,7.046,15.58,3,12.7,3Zm0,12.28c-1.026,0-1.858-1.448-1.858-3.232s.833-3.232,1.858-3.232,1.858,1.448,1.858,3.232S13.729,15.28,12.7,15.28Z" transform="translate(663.616 301.858) rotate(39)"/><path class="b" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(637.5 300)"/></g></svg>`;

  return getDataUrl(source);
};

const getDataUrl = svgrect => {
  return encodeURI("data:image/svg+xml," + svgrect).replace("#", "%23");
};
