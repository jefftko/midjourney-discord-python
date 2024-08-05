#!/bin/bash

# 激活虚拟环境
source /root/venv/mid/bin/activate

# 进入工作目录
cd /home/wwwroot/@mid_api_python@

# 安装或更新依赖
pip install -r requirements.txt

# 重启 pm2 应用
pm2 restart ecosystem.config.js

# 可选：保存 pm2 配置
pm2 save

