#!/bin/bash

# 停止 pm2 中的所有应用
pm2 stop ecosystem.config.js

# 可选：删除 pm2 中的所有应用（如果你不再需要这些应用）
# pm2 delete ecosystem.config.js

# 可选：保存 pm2 配置
pm2 save

