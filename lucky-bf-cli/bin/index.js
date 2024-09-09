#!/usr/bin/env node

const lib = require("lucky-bf-lib");

const argv = require("process").argv;
const command = argv[2];
const options = argv.slice(3);
if (options.length > 0) {
  let [option, param] = options;
  option = option.replace("--", ""); // 移除 --

  if (lib[command]) {
    lib[command]({ option, param });
  } else {
    console.log("命令无效，请重新输入");
  }
}

// 参数解析 --version
if (command?.startsWith("--") || command?.startsWith("-")) {
  const globalOption = command.replace(/--|-/g, "");
  //   console.log(globalOption);
  if (globalOption === "version" || globalOption === "v") {
    console.log("1.0.0");
  }
}

// console.log("welcome lucky-bf-cli!!!!", lib.sum(1, 2), lib.del());
