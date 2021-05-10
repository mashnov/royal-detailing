export const sleep = (time = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
