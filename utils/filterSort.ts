export const filterSort = (sort: string): string => {
  if (sort === "total") return "전체";
  if (sort === "exhibition") return "전시/미술";
  if (sort === "classic") return "클래식";
  if (sort === "concert") return "콘서트";
  if (sort === "festival") return "축제";
  if (sort === "music") return "국악";
  if (sort === "culture") return "문화교양/강좌";
  if (sort === "education") return "교육/체험";
  if (sort === "solo") return "독주/독창회";
  if (sort === "opera") return "뮤지컬/오페라";
  if (sort === "dancing") return "무용";
  if (sort === "theater") return "연극";
  if (sort === "etc") return "기타";

  return "total";
};
