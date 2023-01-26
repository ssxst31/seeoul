export const DDay = (date: string): string => {
  const endDate = date.indexOf("~") + 1;
  const fullEndDate = new Date(date.slice(endDate, 100));
  const fullNowDate = new Date();
  const distance = fullEndDate.getTime() - fullNowDate.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

  return distance > 0 ? "D-" + day : "종료";
};
