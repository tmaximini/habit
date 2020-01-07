export const secondsSince: (date: Date) => number = date => {
  const now = new Date().getTime();
  const seconds = (now - date.getTime()) / 1000;

  return seconds;
};

export const minutesSince: (date: Date) => number = date => {
  return secondsSince(date) / 60;
};

export const hoursSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60);
};

export const daysSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24);
};

export const weeksSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 7);
};

export const monthsSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 30);
};

export const yearsSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 365);
};

export const formatDate: (date: Date) => String = date => {
  return new Intl.DateTimeFormat().format(new Date(date));
};
