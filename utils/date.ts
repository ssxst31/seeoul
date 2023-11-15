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
