function translate(){
}

```javascript

document.getElementById("btn").addEventListener("click", translate);

document.getElementById("url").addEventListener("keypress", function(e){
if(e.key === "Enter"){
translate();
}
});

function translate(){

let url = document.getElementById("url").value.trim();

if(!url){
alert("请输入网址");
return;
}

// 自动补全协议
if(!url.startsWith("http")){
url = "https://" + url;
}

// Google 翻译地址
let translateURL =
"https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url);

// 在 iframe 打开
let viewer = document.getElementById("viewer");
viewer.src = translateURL;

}

```javascript

function translate(){

let url = document.getElementById("url").value.trim();

if(!url){
alert("请输入网址");
return;
}

// 自动补全 https
if(!url.startsWith("http")){
url = "https://" + url;
}

// Google Translate 代理
let translateURL =
"https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url);

// 跳转方式（更稳定）
window.location.href = translateURL;

}

```javascript

function translate(){

let url=document.getElementById("url").value

if(!url){
alert("请输入网址")
return
}

let translateURL=

"https://translate.googleusercontent.com/translate?sl=auto&tl=zh-CN&u="

let viewer=document.getElementById("viewer")

viewer.src=translateURL+encodeURIComponent(url)

}
