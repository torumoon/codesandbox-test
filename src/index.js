/**4-19 テンプレート文字列 */
// const name = "じゃけぇ";
// const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// 従来の方法
// const message1 = "私の名前は" + name +"です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**アロー関数 */

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

//↓こうも書ける
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => { //{}で囲った時は必ずreturnしないと値が返されないので注意
//   return str;
// }
// console.log(func2("func2です"));

//こう書いても良い
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10,20));

/**分割代入 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const{ name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile; //配列の分割代入の場合は、順番通りに要素を抜き出すので注意
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**デフォルト値、引数など */

// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");

// ↓引数を入れないと
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello(); //こんにちは！undefinedさん！ となってしまう

//↓こんな時はデフォルト値を設定する
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello(); //すると　　こんにちは！ゲストさん！ と表示される

/**スプレッド構文 ... */

//配列の展開
// const arr1 = [1, 2];
//console.log(arr1);
// (2) [1, 2]
// 0: 1
// 1: 2
//console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);  // 3
// sumFunc(...arr1);  // 3  順番に処理される

// まとめる (配列の分割代入と一緒に使われることが多い)
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2
// console.log(num1);  // 1
// console.log(num2);  // 2
// console.log(arr3);  // [3, 4, 5]

// 配列のコピー、結合 ※Reactでもよく使う
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //配列のコピー
// console.log(arr6);  // [10, 20]

// const arr7 = [...arr4, ...arr5]; //配列の結合
// console.log(arr7); //  [10,20,30,40]

// コピーなら = で書けばいいんじゃない？
// const arr8 = arr4;
// console.log(arr8);  //[10, 20] コピーできている
// arr8[0] = 100;
// console.log(arr8); // [100, 20]に変わっているが。。
// console.log(arr4); // arr4の値も [100, 20]に変わってしまう！！！ =で繋げると同じところを参照してしまうので
// コピーするときは上記のような方法で書く
// ※参照渡しの資料を確認する

// ではスプレッド構文では、このようなことにはならないのか確認！
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);  //[100, 20]
// console.log(arr4);  //[10, 20] arr4は変更されていない！！
// 配列構文をコピーしたいときは、スプレッド構文を使ってコピーすると良い

/**mapやfilterを使った配列の処理 */

// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapの基本的な構文
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// ①returnされた結果に基づいて新しい配列を生成する新しい配列を生成するやり方

// アロー関数で１行に
// nameArr.map((name) => console.log(name)); //②mapは配列をmapで使って、中に順番に要素が引数にに設定されるので、
//それを関数内で処理する（配列をループして何か処理する何か処理する使い方）
//①と② 二つのやり方がある

// filter 【ある条件に一致したものだけ返却して、新しい配列を生成するような関数】
// この配列から奇数の値だけ取り出して、新しい配列を作りたい
//

// 何番目は◯◯という出力をしたい場合
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// } //０から始まってしまうので、+1をして１から始まるようにする

// mapでやってみると
// nameArr.map((name, index) => console.log(`${index +1}番目は${name}です`));
// ここには順番の概念がないが、mapの場合第１引数には配列の要素が順番に入ってくる。第２引数も取ることができ、順番が０から入る。

// じゃけぇ 以外には”さん”をつけて表示してみる
// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけぇ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**4-25 三項演算子 */
// 使いすぎると可読性は悪くなるので、注意して使う。

// ある条件　 ？  条件がtrueの時　　　:  条件がfalseの時
// 条件がtrueの時は　　？以降が返却されて、条件がfalseの時は　　: 以降が返却される
//
// const num = 1300;
//  console.log(num.toLocaleString()); //jsで用意されている関数で、数字に , をつけててくれる（数値のみ）
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

//関数のreturn部分に三項演算子を使う例
// 引数を受け取ってそのその値を合計したときに、その数値が許容範囲内かどうかチェックしてくれる
// const checkSum = (num1, num2) => {
//   return num1+ num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

/**4-26 論理演算子の本当の意味を知ろう　 && || */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// || は左側がfalseなら右側を返す（左側がtrueなら左側を返す）
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す（左側がfalseなら左側を返す）
// const num2 = 100;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);
