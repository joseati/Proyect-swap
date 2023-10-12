export const getDate = ( item ) => {
  // Divide la fecha en partes (día, mes y año)
  const dateParts = item?.slice(0, 10).split('-');

  // Invierte el orden de las partes
  const reversedDate = dateParts?.reverse().join('-');

  return reversedDate;
}