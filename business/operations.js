exports.firstCondition = function(a, b, flag) {

  if (a > 0) {
      return 1;
  }
  if (flag && b < 10) {
      return 2;
  }
  return 3;
};
