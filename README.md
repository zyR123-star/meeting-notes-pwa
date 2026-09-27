# 多多的会议速记

零后端、离线可用的移动端会议记录 PWA。

## 本地运行

在项目目录启动任意静态文件服务器，然后通过 `http://localhost` 访问。

```powershell
python -m http.server 8080
```

语音识别和录音需要 HTTPS 或 `localhost` 环境，并需要浏览器麦克风权限。

## GitHub Pages 部署

1. 在仓库 `Settings > Pages` 中选择 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`。
2. 打开 `https://<用户名>.github.io/meeting-notes-pwa/`。

## 数据与隐私

会议、录音和 AI 设置保存在浏览器 IndexedDB 中。使用“生成纪要”时，正文会发送到用户配置的 OpenAI 兼容接口。JSON 备份包含 API Key，请妥善保管备份文件。
