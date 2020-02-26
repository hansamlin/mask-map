import { getBuinessHours } from "./block";

export const popup = item => {
  const now = new Date();
  const day = now.getDay();
  const business = getBuinessHours(day, item.business_hours);

  return `
  <h1>${item.name}</h1>
  <div class="popup-info">
    <div class="address">${item.address}</div>
    <div class="business-houres">營業時間 | ${business}</div>
    <div class="phone">聯絡電話 | ${item.phone}</div>
    <div class="quantity">
      <div class="common adult">成人口罩 ${1000}個</div>
      <div class="common child">兒童口罩 ${10000}個</div>
    </div>
  </div>
  `;
};
