// 获取DOM元素
const clinicNameInput = document.getElementById('clinicName');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const canvas = document.getElementById('certificateCanvas');
const ctx = canvas.getContext('2d');
const namePositionSlider = document.getElementById('namePosition');
const positionValue = document.getElementById('positionValue');

// 图片对象
let certificateImage = null;

// 位置偏移变量
let nameYOffset = -17;

// 加载证书模板图片
function loadCertificateImage() {
    certificateImage = new Image();
    certificateImage.crossOrigin = 'anonymous';
    
    // 使用占位图片，实际应用中应替换为真实的证书模板图片URL
    certificateImage.src = 'https://ysbweb.ysbang.cn/prod/data/img/filesUpload/2025/12/19/8ca6a252-a259-4264-a0a5-6d65b436eefd.jpg';
    
    certificateImage.onload = function() {
        // 图片加载完成后，绘制到Canvas上
        ctx.drawImage(certificateImage, 0, 0, canvas.width, canvas.height);
        // 绘制默认的诊所名称
        drawClinicName('万州乔正胜诊所');
    };
    
    certificateImage.onerror = function() {
        console.error('图片加载失败，请检查图片URL是否正确');
        alert('图片加载失败，请检查图片URL是否正确');
    };
}

// 在Canvas上绘制诊所名称
function drawClinicName(name) {
    // 先绘制原始图片，清除之前的文字
    ctx.drawImage(certificateImage, 0, 0, canvas.width, canvas.height);
    
    // 设置文字样式（思源宋体粗体，32px，颜色#294980）
    ctx.font = 'bold 32px "Source Han Serif SC", "Noto Serif SC", "思源宋体", serif';
    ctx.fillStyle = '#294980';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 计算文字位置（居中，考虑垂直偏移）
    const x = canvas.width / 2;
    const y = canvas.height / 2 + nameYOffset;
    
    // 绘制文字
    ctx.fillText(name, x, y);
}

// 生成合格证
function generateCertificate() {
    const clinicName = clinicNameInput.value.trim();
    
    if (!clinicName) {
        alert('请输入诊所名称');
        return;
    }
    
    if (!certificateImage) {
        alert('证书模板图片尚未加载完成，请稍后再试');
        return;
    }
    
    // 绘制带有新诊所名称的合格证
    drawClinicName(clinicName);
    
    // 启用下载按钮
    downloadBtn.disabled = false;
    alert('合格证生成成功，可以下载了！');
}

// 下载合格证为图片
function downloadCertificate() {
    try {
        // 创建下载链接
        const link = document.createElement('a');
        link.download = '设备操作培训合格证.jpg';
        
        // 创建高分辨率临时Canvas用于导出
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        // 设置临时Canvas分辨率为原始的2倍，提高清晰度
        const scaleFactor = 2;
        tempCanvas.width = canvas.width * scaleFactor;
        tempCanvas.height = canvas.height * scaleFactor;
        
        // 提高绘图质量
        tempCtx.imageSmoothingEnabled = true;
        tempCtx.imageSmoothingQuality = 'high';
        
        // 绘制证书图片到临时Canvas
        tempCtx.drawImage(certificateImage, 0, 0, tempCanvas.width, tempCanvas.height);
        
        // 设置文字样式（与原Canvas相同，但考虑缩放因子）
        tempCtx.font = 'bold ' + (32 * scaleFactor) + 'px "Source Han Serif SC", "Noto Serif SC", "思源宋体", serif';
        tempCtx.fillStyle = '#294980';
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        
        // 计算文字位置（居中，考虑垂直偏移和缩放）
        const x = tempCanvas.width / 2;
        const y = tempCanvas.height / 2 + (nameYOffset * scaleFactor);
        
        // 获取当前诊所名称
        const currentName = clinicNameInput.value.trim() || '万州乔正胜诊所';
        
        // 绘制文字到临时Canvas
        tempCtx.fillText(currentName, x, y);
        
        // 使用高分辨率Canvas生成下载链接
        link.href = tempCanvas.toDataURL('image/jpeg', 1.0);
        link.click();
        
    } catch (error) {
        console.error('下载失败:', error);
        alert('下载失败，请重试');
    }
}

// 事件监听器
window.addEventListener('load', loadCertificateImage);
generateBtn.addEventListener('click', generateCertificate);
downloadBtn.addEventListener('click', downloadCertificate);

// 支持回车键生成
clinicNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateCertificate();
    }
});

// 滑块事件处理
namePositionSlider.addEventListener('input', function(e) {
    nameYOffset = parseInt(e.target.value);
    positionValue.textContent = nameYOffset;
    
    // 如果已有诊所名称，重新绘制
    const currentName = clinicNameInput.value.trim() || '万州乔正胜诊所';
    if (certificateImage) {
        drawClinicName(currentName);
    }
});

// 初始化滑块显示值和位置
positionValue.textContent = nameYOffset;
namePositionSlider.value = nameYOffset;