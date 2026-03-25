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
