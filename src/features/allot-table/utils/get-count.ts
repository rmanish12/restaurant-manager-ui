export const getTotalTableCount = () => {
  const tables = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    tables.push(i);
  }

  return tables;
};

export const getPersonsCount = () => {
  const persons = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    persons.push(i);
  }

  return persons;
};
