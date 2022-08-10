export function dateFormat(timestamp: Date) {
  const day = timestamp.toISOString();

  return day.slice(0,10);
}