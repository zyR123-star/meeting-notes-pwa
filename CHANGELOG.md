# 更新日志

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 的格式。

## [Unreleased]

### 变更

- 将应用改名为“多多的会议速记”。
- 加入原创云朵 mascot、粉彩配色和可爱贴纸风格，保留原有功能与深色模式。
- 增加 iOS 友好的高质量录音参数，以及基于 OpenAI 兼容 `/audio/transcriptions` 接口的高精度转写。
- 将离线缓存改为联网优先、离线回退，避免更新长期停留在旧版本。

## [0.1.0] - 2026-09-27

### 新增

- 会议列表、搜索和标签筛选。
- 会议新建、编辑、Markdown 编辑与预览。
- Web Speech API 持续语音速记。
- MediaRecorder 录音、回放和删除。
- OpenAI 兼容接口生成 Markdown 会议纪要。
- 单条 Markdown 导出，以及全量 JSON 备份和恢复。
- IndexedDB 本地存储、离线缓存和 PWA 主屏幕安装支持。
- 移动端优先布局与系统深色模式。

### 安全

- 删除会议或录音前执行两次确认。
