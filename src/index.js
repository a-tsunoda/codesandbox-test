/**
 * 変数の宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数は上書きが可能";
// console.log(val1);

// var val1 = "varは再宣言が可能";
// console.log(val1);

// let val2 = "val変数";
// console.log(val2);

// val2 = "valは変数の上書き可能";
// console.log(val2);

// let val2 = "valは再宣言不可";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "constは上書き不可";
// console.log(val3);

// const val3 = "constは際宣言も不可";
// console.log(val3);

// const val4 = {
//   name: "あやの",
//   age: "31",
// }
// console.log(val4);

// val4.name = "aya";
// console.log(val4);

// val4.address = "神奈川";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "あやの";
//  const age = "31";
//  「私の名前はあやのです。年齢は31歳です。」

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

//  従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) =>  num1 + num2;
// console.log(func4(10,20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "あやの",
//    age: 31,
//  };

//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//  console.log(message1);

//  const { name, age } = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

// const myProfile = ['あやの', 31];
// const message3 = `名前は${myProfile[0]}です。${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();
sayHello("あやの");
