/*
 * @Author: Shay shayxu217@outlook.com
 * @Date: 2022-07-10 09:37:39
 * @LastEditors: Shay shayxu217@outlook.com
 * @LastEditTime: 2022-07-10 10:23:00
 * @FilePath: \MDN\Start\scripts\main.js
 */

/*
 * document.querySelector('html').onclick = function() {
 *   alert('别戳我，我怕疼。');
 * }
 */
// 实现切换图片功能
let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-icon-2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// 实现切换用户功能
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName || myName.substring(0, 1) == " ") {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName;
} else {
  let storagedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla酷毙了，" + storagedName;
}

myButton.onclick = () => {
  setUserName();
};
