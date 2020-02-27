export const popup = item => {
  return `
  <h1>${item.name}</h1>
  <div class="popup-info">
    <div class="address">${item.address}</div>
    <div class="business-houres">營業時間 | ${item.note}</div>
    <div class="phone">聯絡電話 | ${item.phone}</div>
    <div class="quantity">
      <div class="common adult">成人口罩 ${item.mask_adult}個</div>
      <div class="common child">兒童口罩 ${item.mask_child}個</div>
    </div>
  </div>
  `;
};
