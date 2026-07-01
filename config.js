// config.js - 独立yml配置加载器
let APP_CONFIG = null;

/**
 * 加载并解析 tools.yml 配置文件
 * @returns Promise<Object> 配置对象 {storageKey, defaultTools}
 */
async function loadYamlConfig() {
    try {
        // 请求本地yml文件
        const res = await fetch("./tools.yml");
        if (!res.ok) throw new Error("tools.yml 配置文件加载失败");
        const yamlText = await res.text();
        // 解析yaml为js对象
        APP_CONFIG = jsyaml.load(yamlText);
        return APP_CONFIG;
    } catch (err) {
        console.error("配置文件加载异常，使用兜底默认配置：", err);
        // yml加载失败兜底常量（防止文件丢失页面崩溃）
        APP_CONFIG = {
            storageKey: "web_tools_nav_list",
            defaultTools: [
                { id: "tool_translate", name: "网页翻译工具", link: "WEB-Translation/index.html", icon: "🌐", desc: "智能翻译，跨语言阅读" },
                { id: "tool_json_kangaroo", name: "Kangaroo2 JSON工具", link: "JSON-Tools/to-json.html", icon: "🦘", desc: "JSON 格式化 / 转换 / 校验" },
                { id: "nav_site", name: "web导航工具", link: "WEB-Nav-site/index.html", icon: "🌐", desc: "web导航工具" }
            ]
        };
        return APP_CONFIG;
    }
}

// 全局导出配置访问方法
window.getAppConfig = () => APP_CONFIG;
window.loadYamlConfig = loadYamlConfig;
