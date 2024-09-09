module.exports = {
  sum(a, b) {
    return a + b;
  },

  del() {
    return "delete";
  },

  init({ option, param }) {
    console.log("init命令执行中....", option, param);
  },
};
