# 多多速记

纯前端 PWA，用于课堂或会议的录音、转写、时间戳整理和 AI 笔记。课堂模式与会议模式共用同一套数据与录音能力，但使用不同的 AI 提示词。

## 运行

IndexedDB 在 `file://` 下会被浏览器拦截，不能双击 `index.html` 打开。请在项目目录启动静态服务器：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080/`。

## 功能

- 首页“会议 / 课程”双模式，按标题、正文、笔记和标签搜索。
- 课程卡包含颜色、老师、学期、课时数、加课时和编辑入口。
- 课时支持正文、语音草稿、录音、时间戳目录和 AI 笔记。
- MediaRecorder 超过 10 分钟自动切成新片段，每次切片都会新建 MediaRecorder。
- 音频按片段 `start` 顺序拼接播放，转写时统一加上片段起始偏移。
- 设置页提供硅基流动、Groq、OpenAI 和自定义服务商预设。
- 支持 JSON 全量备份、恢复、单条 Markdown 导出和清理音频保留文字。

## AI 配置

- 转写：`POST {转写 Base URL}/audio/transcriptions`
- 笔记：`POST {笔记 Base URL}/chat/completions`
- 服务商必须允许浏览器跨域请求。
- 笔记 API Key 和转写 API Key 分开保存；转写 Key 为空时兼容旧版，回退使用笔记 Key。
- 课堂、会议和录音保存在 IndexedDB 数据库 `mtx`。

## iOS Safari

- 需要 HTTPS 或 `localhost` 才能稳定使用麦克风和 PWA。
- 录音时保持页面在前台，并建议关闭自动锁屏；iOS 息屏可能中断录音。
- 首次录音时请允许麦克风权限。
- 旧版应用需要联网重新打开一次，新 Service Worker 接管后会自动刷新。

## GitHub Pages 部署

1. 在仓库 `Settings > Pages` 中选择 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`。
2. 打开 `https://<用户名>.github.io/meeting-notes-pwa/`。

更新时直接提交到 `main`，GitHub Pages 自动重建。项目不使用 Release 或 Tag，提交历史和 `CHANGELOG.md` 共同作为更新记录。
