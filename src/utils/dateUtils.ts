export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-GB');
  return formattedDate;
}