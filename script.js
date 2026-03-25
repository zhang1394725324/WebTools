window.onload = function(){

let btn = document.getElementById("btn")
let input = document.getElementById("url")

if(btn){
btn.addEventListener("click", translate)
}

if(input){
input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
translate()
}
})
}

}

function translate(){

let url = document.getElementById("url").value.trim()

if(!url){
alert("请输入网址")
return
}

// 自动补全 https
if(!url.startsWith("http")){
url = "https://" + url
}

// Google 翻译
let translateURL =
"https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" 
+ encodeURIComponent(url)

// 打开翻译
window.open(translateURL, "_blank")

}
