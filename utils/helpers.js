module.exports = {
  // The custom helper format_date to set up a format ('M/D/YYYY')
  format_date: (date) => {
    return date.toLocaleDateString("en-US");
  },
};
