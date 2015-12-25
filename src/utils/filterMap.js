export default function filterMap(filterArray, props) {
  const options = {};
  filterArray.map((key) => {
    const option = props[key];
    if (option !== undefined) {
      options[key] = option;
    }
  });
  return options;
}
