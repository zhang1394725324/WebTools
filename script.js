document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("btn");
    const input = document.getElementById("url");
    const viewer = document.getElementById("viewer");

    function translate(){
        let url = input.value.trim();
        if(!url){
            alert("请输入网址");
            return;
        }
        if(!url.startsWith("http")){
            url = "https://" + url;
        }

        // Google 翻译代理模式
        const translateURL = "https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url);

        // 在 iframe 内展示
        viewer.src = translateURL;
    }

    btn.addEventListener("click", translate);
    input.addEventListener("keypress", function(e){
        if(e.key === "Enter") translate();
    });
});
