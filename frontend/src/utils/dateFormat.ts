export function dateFormat(timestamp: Date) {
  const date = timestamp.toLocaleDateString('pt-br');

  return date;
}