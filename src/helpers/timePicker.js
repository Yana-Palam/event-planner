export const hours = Array.from({ length: 12 }, (_, index) => index + 1).map(
  (item) => {
    const hour = item.toString();
    if (hour.length === 1) {
      return "0" + hour;
    }
    return hour;
  }
);

export const minutes = Array.from({ length: 60 }, (_, index) => index).map(
  (item) => {
    const minute = item.toString();
    if (minute.length === 1) {
      return "0" + minute;
    }
    return minute;
  }
);

export const amPm = ["AM", "PM"];
