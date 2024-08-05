module.exports = {
  apps: [
    {
      name: 'mid_bot',
      script: 'task_bot.py',
      interpreter: '/root/venv/mid/bin/python', // 使用新的虚拟环境中的 Python 解释器
      cwd: '/home/wwwroot/@mid_api_python@', // 更新为新的工作目录
      out_file: '/home/wwwlogs/@mid_api_python@/mid_bot_out.log',
      error_file: '/home/wwwlogs/@mid_api_python@/mid_bot_error.log',
    },
    {
      name: 'mid_server',
      script: 'server.py',
      interpreter: '/root/venv/mid/bin/python', // 使用新的虚拟环境中的 Python 解释器
      cwd: '/home/wwwroot/@mid_api_python@', // 更新为新的工作目录
      out_file: '/home/wwwlogs/@mid_api_python@/mid_server_out.log',
      error_file: '/home/wwwlogs/@mid_api_python@/mid_server_error.log',
    },
  ],
};


