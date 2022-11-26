

const userId = process.env.USER_ID;
const date = new Date();
const now = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const prefix = `Bearer`;
const token = process.env.TOKEN;

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${prefix} ${token}`,
  },
  //body: 'false'
};

fetch(
  `https://api-rest.elice.io/org/swtrack/user/stay_seconds/get/?user_id=${userId}&date=${now}`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(isPassed(response.stay_seconds)))
  .catch((err) => console.error(err));

function isPassed(sec) {
  const hour = Math.floor(sec / 3600);
  const LIMIT = 7;
  return hour >= LIMIT ? `PASS` : `NONPASS`;
}

function getNeedTime(sec) {
  const NOW = sec; //130분
  const LIMIT = 7 * 3600;
  const diff = LIMIT - NOW;

  if (diff >= 0) {
    // 채우면
    const overTime = Math.abs(diff);
    return;
  }
  const min = sec % 3600; // 나머지
  const hour = Math.floor(minutes / 3600);
}

// console.log(stay_time)
