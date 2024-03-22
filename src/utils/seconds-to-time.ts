export function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const min = Math.floor((seconds / 60) % 60);
  const sec = Math.floor((seconds % 60) % 60);
  return `${hours}:${min}:${sec}`;
}
