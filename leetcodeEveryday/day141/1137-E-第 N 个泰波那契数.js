// 1137-E-第 N 个泰波那契数
/**
 * @param {number} n
 * @return {number}
 */
// T0 = 0, T1 = 1, T2 = 1,当n>2时，满足Tn = Tn-1 + Tn-2 + Tn-3
// 动态规划滚动数组
// i = 3       i = 4
// p q r s  => p q r s
// 0 0 1 1 2   0 1 1 2 4
// 时间复杂度On
// 空间复杂度O1
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let p = 0,
    q = 0,
    r = 1,
    s = 1;
  for (let i = 3; i <= n; ++i) {
    p = q;
    q = r;
    r = s;
    s = p + q + r;
  }
  return s;
};

// 检索
var tribonacci = function (n) {
  let result = [0, 1, 1, 2, 4, 7, 13, 24, 44, 81,
    149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890,
    66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591,
    29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852, 2082876103
  ];
  return result[n];
}

// 动态规划
var tribonacci = function (n) {
  if (n <= 1) return n;
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}