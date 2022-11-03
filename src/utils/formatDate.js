const formatDate = (date) => {
  const originalDate = new Date(date);
  const options = {
    month: "long",
    day: "numeric",
    weekday: "short",
  };
  const formattedDate = originalDate.toLocaleDateString("kr-KR", options);
  return formattedDate;
};

export default formatDate;
