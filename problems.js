// ==============================================
// ================= 1-masala ==================
// ==============================================
// Shoxrux kosmosdagi parolini tekshirmoqchi 🚀
// Uning paroli "space" bilan boshlanadi va "2023" bilan tugaydimi? 😎
// Input: const password = "spaceadventure2023";
// startsWith va endsWith metodlaridan foydalaning.
// Output: true

// const password = "spaceadventure2023"

// function checkSpacePassword(password) {
//   let start = password.startsWith("space")
//   let end = password.endsWith(2023)
//   if(start && end) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }

// checkSpacePassword (password)

// ==============================================
// ================= 2-masala ==================
// ==============================================
// Zafarjon sirli xabarni ochmoqchi 🔍
// Xabarda "code" so'zi borligini tekshirib, uni katta harflarga aylantiring! 😜
// Input: const message = "secret code revealed";
// includes va toUpperCase metodlaridan foydalaning.
// Output: "SECRET CODE REVEALED"

// const message = "secret code revealed"

// function decodeMessage(message) {
//   let code = message.includes("code")

//   if (code) {
//     console.log(message.toUpperCase(message))
//   } else console.log("uxladiz")
// }

// decodeMessage(message)

// ==============================================
// ================= 3-masala ==================
// ==============================================
// Ne'matjon super qahramon kostyumini tayyorlamoqda 💪
// Uning ismini katta harflarga aylantirib, oxiriga "MAN" qo'shing! 😂🦸‍♂️
// Input: const hero = "spider";
// toUpperCase va concat metodlaridan foydalaning.
// Output: "SPIDERMAN"

// const hero = "spider";

// function makeSuperHero(hero) {
//   let bigLettters = hero.toUpperCase();

//   console.log(bigLettters.concat("MAN"));
// }

// makeSuperHero(hero)

// ==============================================
// ================= 4-masala ==================
// ==============================================
// Doniyor ninja kodini yashirmoqchi 🙈
// Uning kodini kichik harflarga aylantirib, boshidagi bo'shliqlarni olib tashlang! 🥷
// Input: const ninjaCode = "   STEALTH MODE";
// toLowerCase va trimStart metodlaridan foydalaning.
// Output: "stealth mode"

// function hideNinjaCode(code) {
//   const codeNinja ="    STEALTH MODE"
//   let lower = codeNinja.toLowerCase()
//   console.log(lower.trim())
// }

// hideNinjaCode()

// ==============================================
// ================= 5-masala ==================
// ==============================================
// Hamidulloh pitsa buyurtmasini tozalamoqchi 🍕
// Pitsa nomidagi barcha bo'shliqlarni olib tashlab, oxiriga "pizza" qo'shing! 😅
// Input: const pizza = "  spicy  pepperoni  ";
// trim va concat metodlaridan foydalaning.
// Output: "spicypepperonipizza"

// function cleanPizzaOrder(pizza) {
//   const pizz = "   spicy  pepperoni  ";

//   let trimk = pizz.trim()
//   console.log(trimk.concat("pizza"))
// }

// cleanPizzaOrder()

// ==============================================
// ================= 6-masala ==================
// ==============================================
// Hayitali o'z qo'shig'ini 3 marta takrorlab, katta harflarga aylantirmoqchi 🎶
// Qo'shiqni takrorlang va katta harflarga o'zgartiring! 😄
// Input: const song = "la la la";
// repeat va toUpperCase metodlaridan foydalaning.
// Output: "LA LA LALA LA LALA LA LA"

// function amplifySong(songs) {
//   const song = "la la la"

//   let songBig = song.toUpperCase()

//   console.log(songBig.repeat(3))
// }

// amplifySong()

// ==============================================
// ================= 7-masala ==================
// ==============================================
// Azizbek jamoasiga ikkita yangi o'yinchi qo'shmoqchi ⚽
// Ikkita o'yinchini ro'yxat oxiriga qo'shib, ro'yxatni teskari qiling! 😎
// Input: const team = ["Messi", "Ronaldo"];
// push va reverse metodlaridan foydalaning.
// Output: ["Mbappe", "Neymar", "Ronaldo", "Messi"]

// function updateTeam(teams) {
//   const team = ["messi", "ronaldo"];

//   team.push("neymar", "mbappe")

//   console.log(team.reverse())
// }

// updateTeam()

// ==============================================
// ================= 8-masala ==================
// ==============================================
// Asilbek jamoasidan oxirgi o'yinchini olib tashlab, ro'yxatni qatorga aylantirmoqchi 😢
// Oxirgi o'yinchini olib tashlang va ro'yxatni vergul bilan birlashtiring! 😣
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// pop va join metodlaridan foydalaning.
// Output: "Messi,Ronaldo"

// function shrinkTeam(teams) {
//   const team = ["messi", "ronaldo", "neymar"]

//   team.pop()

//   console.log(team.join())
// }

// shrinkTeam()

// ==============================================
// ================= 9-masala ==================
// ==============================================
// Fayzullo ranglar ro'yxatini teskari qilib, ularni bo'shliq bilan birlashtirmoqchi 🌈
// Ro'yxatni teskari qilib, stringga aylantiring! 😄
// Input: const colors = ["red", "blue", "green"];
// reverse va join metodlaridan foydalaning.
// Output: "green blue red"

// function mixColors(colors) {
//   const color = ["red", "green", "blue"]

//   color.reverse()

//   console.log(color.join(" "))
// }

// mixColors()

// ==============================================
// ================= 10-masala ==================
// ==============================================
// Shoxrux o'z jamoasini tekshirib, agar "Messi" bo'lsa, ro'yxatni qatorga aylantirmoqchi 📋
// "Messi" borligini tekshirib, ro'yxatni vergul bilan birlashtiring! 😎
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// includes va join metodlaridan foydalaning.
// Output: "Messi,Ronaldo,Neymar"

// function checkTeam(teams) {
//   const team = ["messi", "ronaldo", "neymar"]

//   let teamTrue = team.includes("messi")

//   if (teamTrue) {
//     console.log(team.join())
//   }
// }

// checkTeam()

// ==============================================
// ================= 11-masala ==================
// ==============================================
// Zafarjon o'z ismini boshqa ism bilan birlashtirib, katta harflarga aylantirmoqchi 🤝
// Ikkita ismni birlashtirib, katta harflarga o'zgartiring! 😄
// Input: const name1 = "Zafar"; const name2 = "jon";
// concat va toUpperCase metodlaridan foydalaning.
// Output: "ZAFARJON"

// function combineAndUpper(name1, name2) {
//   const name3 = "zafar"
//   const name4 = "jon"

//   let name = name3.concat(name4)

//   console.log(name.toUpperCase())
// }

// combineAndUpper()

// ==============================================
// ================= 12-masala ==================
// ==============================================
// Ne'matjon parolida "secret" so'zi borligini tekshirib, uni teskari qilmoqchi 🔐
// Parolni tekshirib, agar "secret" bo'lsa, katta harflarga aylantiring! 😎
// Input: const password = "mysecretpassword";
// includes va toUpperCase metodlaridan foydalaning.
// Output: "MYSECRETPASSWORD"

// function reversePassword(password) {
//   const passwords = "mysecretpassword"

//   let pass = passwords.includes("secret")

//   if(pass){
//     console.log(passwords.toUpperCase())
//   }
// }

// reversePassword()

// ==============================================
// ================= 13-masala ==================
// ==============================================
// Doniyor jamoasiga yangi o'yinchi qo'shib, ro'yxatni teskari qilmoqchi ⚽
// Boshiga o'yinchi qo'shib, ro'yxatni teskari qiling! 😄
// Input: const team = ["Messi", "Ronaldo"];
// unshift va reverse metodlaridan foydalaning.
// Output: ["Ronaldo", "Messi", "Mbappe"]

// function starTeam(teams) {
//   const team = ["messi", "ronaldo"]
//   team.unshift("mbappe")

//   console.log(team.reverse())
// }

// starTeam()

// ==============================================
// ================= 14-masala ==================
// ==============================================
// Hamidulloh jamoasining birinchi o'yinchisini olib tashlab, qatorga aylantirmoqchi 😢
// Birinchi o'yinchini olib tashlab, ro'yxatni bo'shliq bilan birlashtiring! 😣
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// shift va join metodlaridan foydalaning.
// Output: "Ronaldo Neymar"

// function updateRoster(teams) {
//   const team = ["Messi", "Ronaldo", "Neymar"]
//   team.shift()

//   console.log(team.join(" "));
// }

// updateRoster()

// ==============================================
// ================= 15-masala ==================
// ==============================================
// Hayitali kodida "error" so'zini topib, uni katta harflarga aylantirmoqchi 🐞
// "error" so'zini topib, butun kodni katta harflarga o'zgartiring! 😄
// Input: const code = "debug this error now";
// search va toUpperCase metodlaridan foydalaning.
// Output: "DEBUG THIS ERROR NOW"

// function fixCode(codes) {
//   const code = "debug this error now"

//   let code_true = code.search("error")

//   if(code_true > 0) {
//     console.log(code.toUpperCase())
//   }
// }

// fixCode()

// ==============================================
// ================= 16-masala ==================
// ==============================================
// Azizbek kodini tozalab, oxiriga "done" qo'shmoqchi 📝
// Boshidagi bo'shliqlarni olib tashlab, oxiriga "done" qo'shing! 😎
// Input: const code = "   write code";
// trimStart va concat metodlaridan foydalaning.
// Output: "write codedone"

// function finishCode(cod) {
//   const code = "   write code"
//   code.trimStart()

//   console.log(code.concat("done"))
// }

// finishCode()

// ==============================================
// ================= 17-masala ==================
// ==============================================
// Asilbek kodini tozalab, boshiga "start" qo'shmoqchi 📝
// Oxiridagi bo'shliqlarni olib tashlab, boshiga "start" qo'shing! 😎
// Input: const code = "code now   ";
// trimEnd va concat metodlaridan foydalaning.
// Output: "startcode now"

// function startCode(cod) {
//   const code =" code now   "
//   let i =code.trimEnd()

//   console.log(i.concat("start"));
// }

// startCode()

// ==============================================
// ================= 18-masala ==================
// ==============================================
// Fayzullo o'z ismi "bek" bilan tugasa, uni katta harflarga aylantirmoqchi 😄
// Ismni tekshirib, agar "bek" bilan tugasa, katta harflarga o'zgartiring! 😎
// Input: const name = "Fayzullobek";
// endsWith va toUpperCase metodlaridan foydalaning.
// Output: "FAYZULLOBEK"

// function checkAndUpperName(names) {
//   const name = "Fayzullobek";

//   let nameEnd = name.endsWith("bek")

//  if(nameEnd){
//   console.log(name.toUpperCase());
//  }
// }

// checkAndUpperName()

// ==============================================
// ================= 19-masala ==================
// ==============================================
// Shoxrux ro'yxatida "pizza" borligini tekshirib, ro'yxatni qatorga aylantirmoqchi 🍕
// Agar "pizza" bo'lsa, ro'yxatni teskari qilib, bo'shliq bilan birlashtiring! 😄
// Input: const foods = ["burger", "pizza", "sushi"];
// includes, reverse va join metodlaridan foydalaning.
// Output: "sushi pizza burger"

// function checkAndJoinFoods(foods) {
//   const food = ["burger", "pizza", "sushi"]

//   let foodPizza = food.includes("pizza")

//   if(foodPizza) {
//     food.reverse()
//     console.log(food.join(" "))
//   }
// }

// checkAndJoinFoods()

// ==============================================
// ================= 20-masala ==================
// ==============================================
// Zafarjon o'z ismini katta harflarga aylantirib, "code" so'zini qidirmoqchi 😎
// Ismni katta harflarga aylantirib, unda "CODE" so'zi borligini tekshiring! 😂
// Input: const name = "zafarcodejon";
// toUpperCase va includes metodlaridan foydalaning.
// Output: true

// function checkCodeInName(names) {
//   let name = "zafarcodejon"

//   name = name.toUpperCase()
//   console.log(name.includes("CODE"))
// }

// checkCodeInName()
