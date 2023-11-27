export const getEventStatus = (dateRange: string): string => {
  const dateArray = dateRange.split("~");

  const currentDate = new Date();

  const startDate = new Date(dateArray[0]);
  const endDate = new Date(dateArray[1]);

  if (currentDate < startDate) {
    return "진행예정";
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return "진행중";
  } else {
    return "종료";
  }
};

export const elapsedTime = (dateString: string): string => {
  const year = parseInt(dateString.substr(0, 4), 10);
  const month = parseInt(dateString.substr(4, 2), 10) - 1;
  const day = parseInt(dateString.substr(6, 2), 10);

  const start = new Date(year, month, day);
  const end = new Date();

  const secondsDiff = Math.floor((end.getTime() - start.getTime()) / 1000);

  const timeUnits = [
    { name: "년", secondsInUnit: 60 * 60 * 24 * 365 },
    { name: "개월", secondsInUnit: 60 * 60 * 24 * 30 },
    { name: "일", secondsInUnit: 60 * 60 * 24 },
    { name: "시간", secondsInUnit: 60 * 60 },
    { name: "분", secondsInUnit: 60 },
  ];

  for (const { name, secondsInUnit } of timeUnits) {
    const elapsedUnits = Math.floor(secondsDiff / secondsInUnit);

    if (elapsedUnits > 0) {
      return `${elapsedUnits}${name} 전`;
    }
  }

  return "방금 전";
};
