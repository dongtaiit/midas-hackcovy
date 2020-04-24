import moment from "moment";

export function getDate(timestamp) {
  if (typeof timestamp !== "number") return timestamp;
  return moment(timestamp).format("DD/MM/YYYY");
}

export function getTimes(timestamp) {
  if (typeof timestamp !== "number") return timestamp;
  return moment.unix(timestamp).format("HH:mm");
}

export function convertDatetime(timeStamp) {
  return moment.unix(timeStamp).format("YYYY-MM-DD HH:mm:ss");
}

export function convertToRelativeTime(timestamp) {
  return moment(timestamp)
    .locale("vi")
    .startOf("hour")
    .fromNow();
}
