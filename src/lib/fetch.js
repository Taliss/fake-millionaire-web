// sleep helper to simulate a network call
const sleep = (time) => new Promise((res) => setTimeout(res, time));

// since we only make a single fetch call
// we're going to use this mock fetch method
// which will simulate a short delay and return
// with exchange rates after a short period
export async function fetch(url) {
  await sleep(1000);
  const buySellPoints = {
    buyPoint: { dateTime: '2021-07-22T08:54:58.406Z', price: 5 },
    sellPoint: { dateTime: '2021-07-22T04:54:58.406Z', price: 10 },
  };
  return {
    // simulate the JSON method on the fetch response
    async json() {
      return {
        success: true,
        buySellPoints,
      };
    },
  };
}
