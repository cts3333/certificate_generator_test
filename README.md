# 设备操作培训合格证生成器

一个简单易用的设备操作培训合格证生成工具，可以自定义诊所名称并导出为高清图片。

## 功能特点

- 自定义诊所名称
- 实时预览证书效果
- 调整诊所名称垂直位置
- 导出高清JPEG格式图片
- 简单直观的用户界面

## 技术栈

- HTML5 Canvas
- JavaScript
- CSS3

## 项目文件结构

```
设备操作培训合格证生成器/
├── index.html      # 主页面结构
├── script.js       # 核心功能实现
├── style.css       # 样式文件
└── README.md       # 使用说明文档
```

## 使用方法

### 方法一：使用Python本地服务器（推荐）

1. 确保您的计算机上已安装Python（Python 3.x）

2. 打开命令行工具（Windows: 命令提示符或PowerShell；Mac/Linux: Terminal）

3. 进入项目文件所在目录：
   ```bash
   cd /path/to/设备操作培训合格证生成器
   ```

4. 启动本地服务器：
   ```bash
   python -m http.server 8000
   ```

5. 打开浏览器，访问：
   ```
   http://localhost:8000
   ```

### 方法二：使用Node.js本地服务器

1. 确保您的计算机上已安装Node.js

2. 全局安装http-server：
   ```bash
   npm install -g http-server
   ```

3. 进入项目文件所在目录并启动服务器：
   ```bash
   cd /path/to/设备操作培训合格证生成器
   http-server -p 8000
   ```

4. 打开浏览器，访问：
   ```
   http://localhost:8000
   ```

## 操作指南

1. 在"诊所名称"输入框中输入您想要显示的诊所名称

2. 点击"生成合格证"按钮，即可在画布中预览效果

3. 使用"名称垂直位置"滑块调整诊所名称的垂直位置

4. 点击"下载图片"按钮，将生成的合格证保存为JPEG格式图片

## 自定义配置

### 修改证书模板图片

在`script.js`文件中，找到以下代码并替换为您自己的证书模板图片URL：

```javascript
// 使用占位图片，实际应用中应替换为真实的证书模板图片URL
certificateImage.src = 'https://ysbweb.ysbang.cn/prod/data/img/filesUpload/2025/12/19/686f1563-3e99-468d-bb2e-d25f46aaa8b6.jpg';
```

### 调整字体样式

在`script.js`文件中，修改`drawClinicName`函数中的字体设置：

```javascript
// 设置文字样式（思源宋体粗体，32px，颜色#294980）
ctx.font = 'bold 32px "Source Han Serif SC", "Noto Serif SC", "思源宋体", serif';
ctx.fillStyle = '#294980';
```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项

1. 由于浏览器的安全策略，直接双击打开HTML文件可能会遇到跨域问题，导致图片无法加载
2. 建议使用上述本地服务器方法运行程序
3. 确保您的网络连接正常，以便加载证书模板图片
4. 导出的图片默认文件名：`设备操作培训合格证.jpg`

## 发布建议

1. 将所有项目文件（index.html, script.js, style.css）打包发送给同事
2. 附上本README.md文件作为使用说明
3. 提醒同事需要使用本地服务器方式运行

## 故障排除

### 图片无法加载
- 检查网络连接是否正常
- 确保证书模板图片URL正确且可访问
- 确认已使用本地服务器方式运行程序

### 下载失败
- 检查浏览器是否允许文件下载
- 确保画布已成功生成证书内容
- 尝试刷新页面后重新生成

## 版本历史

- v1.0: 初始版本，支持基本功能
- v1.1: 优化导出图片清晰度
- v1.2: 调整字体大小为32px，支持位置调整

## 联系方式

如有问题或建议，请联系开发人员。