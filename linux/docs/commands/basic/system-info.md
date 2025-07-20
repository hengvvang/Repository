# 基础命令 - 系统信息

## 概述

了解系统信息是 Linux 系统管理的基础。这些命令帮助用户获取硬件信息、系统状态、资源使用情况等重要信息，是诊断问题和监控系统的重要工具。

---

## 系统基本信息

### `uname` - 系统信息

**功能**: 显示系统信息

```bash
uname [OPTION]...
```

**常用选项**:
- `-a` - 显示所有信息
- `-s` - 显示内核名称（默认）
- `-n` - 显示网络节点主机名
- `-r` - 显示内核版本
- `-v` - 显示内核版本详情
- `-m` - 显示机器硬件架构
- `-p` - 显示处理器类型
- `-i` - 显示硬件平台
- `-o` - 显示操作系统

**示例**:
```bash
# 显示所有系统信息
uname -a
# 输出示例: Linux hostname 5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux

# 只显示内核版本
uname -r

# 显示架构
uname -m

# 显示主机名
uname -n
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `hostname` - 主机名管理

**功能**: 显示或设置系统主机名

```bash
hostname [OPTION]... [NAME]
```

**常用选项**:
- `-I` - 显示所有网络IP地址
- `-i` - 显示主机IP地址
- `-f` - 显示完全限定域名(FQDN)
- `-s` - 显示短主机名
- `-d` - 显示域名

**示例**:
```bash
# 显示当前主机名
hostname

# 显示完整域名
hostname -f

# 显示所有IP地址
hostname -I

# 设置主机名（需要root权限）
sudo hostname newhostname

# 显示域名部分
hostname -d
```

**权限**: 🟢 普通用户查看，🔴 root设置 | **危险级别**: ⚪ 安全查看，🟡 注意设置

---

### `whoami` - 当前用户

**功能**: 显示当前有效用户名

```bash
whoami
```

**示例**:
```bash
# 显示当前用户
whoami
# 输出: username

# 常与其他命令结合使用
echo "当前用户是: $(whoami)"
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `id` - 用户和组信息

**功能**: 显示用户和组ID信息

```bash
id [OPTION]... [USER]
```

**常用选项**:
- `-u` - 只显示用户ID
- `-g` - 只显示主组ID
- `-G` - 显示所有组ID
- `-n` - 显示名称而不是数字ID
- `-r` - 显示实际ID而不是有效ID

**示例**:
```bash
# 显示当前用户的所有ID信息
id
# 输出示例: uid=1000(username) gid=1000(username) groups=1000(username),4(adm),24(cdrom),27(sudo)

# 只显示用户ID
id -u

# 显示用户名
id -un

# 显示所属的所有组
id -Gn

# 查看其他用户信息
id root
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 系统状态

### `uptime` - 系统运行时间

**功能**: 显示系统运行时间和负载

```bash
uptime [OPTION]...
```

**常用选项**:
- `-p` - 以友好格式显示运行时间
- `-s` - 显示系统启动时间

**示例**:
```bash
# 显示系统运行时间和负载
uptime
# 输出示例: 14:30:15 up 2 days, 4:25, 3 users, load average: 0.15, 0.20, 0.18

# 友好格式显示
uptime -p
# 输出示例: up 2 days, 4 hours, 25 minutes

# 显示启动时间
uptime -s
# 输出示例: 2023-07-18 10:05:12
```

**输出解释**:
- 当前时间: 14:30:15
- 运行时间: up 2 days, 4:25
- 登录用户数: 3 users  
- 负载平均值: 1分钟、5分钟、15分钟的系统负载

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `date` - 日期时间

**功能**: 显示或设置系统日期

```bash
date [OPTION]... [+FORMAT]
date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
```

**常用格式**:
- `%Y` - 四位年份
- `%m` - 月份 (01-12)
- `%d` - 日期 (01-31)
- `%H` - 小时 (00-23)
- `%M` - 分钟 (00-59)
- `%S` - 秒 (00-59)
- `%A` - 星期几全称
- `%B` - 月份全称

**示例**:
```bash
# 显示当前日期时间
date

# 自定义格式显示
date "+%Y-%m-%d %H:%M:%S"

# 显示UTC时间
date -u

# 显示时间戳
date +%s

# 转换时间戳为日期
date -d @1234567890

# 显示昨天日期
date -d "yesterday"

# 显示一周后的日期
date -d "1 week"

# 设置系统时间（需要root）
sudo date -s "2023-07-20 14:30:00"
```

**权限**: 🟢 普通用户查看，🔴 root设置 | **危险级别**: ⚪ 安全查看，🟡 注意设置

---

### `cal` - 日历

**功能**: 显示日历

```bash
cal [OPTION]... [MONTH [YEAR]]
cal [OPTION]... [FULL-YEAR]
```

**常用选项**:
- `-3` - 显示上月、本月、下月
- `-A NUM` - 显示后NUM个月
- `-B NUM` - 显示前NUM个月
- `-y` - 显示整年日历

**示例**:
```bash
# 显示当前月日历
cal

# 显示2023年7月日历
cal 7 2023

# 显示2023年全年日历
cal 2023

# 显示三个月日历
cal -3

# 显示整年日历
cal -y
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 硬件信息

### `lscpu` - CPU信息

**功能**: 显示CPU架构信息

```bash
lscpu [OPTION]...
```

**常用选项**:
- `-p` - 解析格式输出
- `-e` - 扩展格式
- `-J` - JSON格式输出

**示例**:
```bash
# 显示CPU信息
lscpu

# JSON格式输出
lscpu -J

# 只显示在线CPU
lscpu -e
```

**关键信息解释**:
- Architecture: 架构类型 (x86_64, ARM等)
- CPU(s): CPU核心总数
- Thread(s) per core: 每核心线程数
- Core(s) per socket: 每插槽核心数
- Model name: CPU型号

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `lsmem` - 内存信息

**功能**: 显示可用内存范围和状态

```bash
lsmem [OPTION]...
```

**示例**:
```bash
# 显示内存信息
lsmem

# 以摘要格式显示
lsmem --summary=only
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `lsblk` - 块设备信息

**功能**: 以树状格式列出所有块设备

```bash
lsblk [OPTION]... [DEVICE]...
```

**常用选项**:
- `-f` - 显示文件系统信息
- `-m` - 显示权限信息
- `-t` - 显示拓扑信息
- `-J` - JSON格式输出

**示例**:
```bash
# 显示所有块设备
lsblk

# 显示文件系统信息
lsblk -f

# 显示权限信息
lsblk -m

# JSON格式
lsblk -J
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `lsusb` - USB设备

**功能**: 显示USB设备信息

```bash
lsusb [OPTION]...
```

**常用选项**:
- `-v` - 详细信息
- `-s` - 指定设备
- `-t` - 树状格式

**示例**:
```bash
# 列出所有USB设备
lsusb

# 显示详细信息
lsusb -v

# 树状格式显示
lsusb -t
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `lspci` - PCI设备

**功能**: 显示PCI设备信息

```bash
lspci [OPTION]...
```

**常用选项**:
- `-v` - 详细信息
- `-vv` - 更详细信息  
- `-k` - 显示内核驱动
- `-t` - 树状格式

**示例**:
```bash
# 列出所有PCI设备
lspci

# 显示详细信息
lspci -v

# 显示内核驱动信息
lspci -k

# 只显示网卡信息
lspci | grep -i network
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 资源使用情况

### `free` - 内存使用情况

**功能**: 显示系统内存使用情况

```bash
free [OPTION]...
```

**常用选项**:
- `-h` - 人类可读格式
- `-m` - 以MB为单位
- `-g` - 以GB为单位
- `-s SEC` - 每SEC秒刷新一次
- `-t` - 显示总计行

**示例**:
```bash
# 显示内存使用情况
free

# 人类可读格式
free -h

# 以MB为单位显示
free -m

# 每2秒刷新一次
free -s 2

# 显示总计
free -t
```

**输出解释**:
```
              total        used        free      shared  buff/cache   available
Mem:           7.7G        2.1G        3.2G        234M        2.4G        5.1G
Swap:          2.0G          0B        2.0G
```

- total: 总内存
- used: 已使用内存
- free: 空闲内存
- shared: 共享内存
- buff/cache: 缓冲/缓存
- available: 可用内存

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `df` - 磁盘空间使用

**功能**: 显示文件系统磁盘空间使用情况

```bash
df [OPTION]... [FILE]...
```

**常用选项**:
- `-h` - 人类可读格式
- `-T` - 显示文件系统类型
- `-i` - 显示inode使用情况
- `-x TYPE` - 排除指定类型
- `--total` - 显示总计

**示例**:
```bash
# 显示所有挂载点
df

# 人类可读格式
df -h

# 显示文件系统类型
df -hT

# 显示inode使用情况
df -i

# 只显示本地文件系统
df -hT --exclude-type=tmpfs

# 显示特定目录所在分区
df -h /home
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `du` - 目录空间使用

**功能**: 显示目录空间使用情况

```bash
du [OPTION]... [FILE]...
```

**常用选项**:
- `-h` - 人类可读格式
- `-s` - 只显示总计
- `-a` - 显示所有文件
- `-d NUM` - 限制目录深度
- `-x` - 只处理当前文件系统
- `--max-depth=N` - 最大深度N

**示例**:
```bash
# 显示当前目录及子目录大小
du -h

# 只显示当前目录总大小
du -sh

# 显示所有文件和目录大小
du -ah

# 限制深度为1级
du -h --max-depth=1

# 按大小排序
du -sh * | sort -rh

# 找出最大的几个目录
du -sh */ | sort -rh | head -10
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 进程信息

### `ps` - 进程状态

**功能**: 显示当前运行的进程

```bash
ps [OPTION]...
```

**常用选项**:
- `aux` - 显示所有进程详细信息
- `-ef` - 显示所有进程全格式
- `-u USER` - 显示指定用户进程
- `-p PID` - 显示指定PID进程
- `--sort` - 按指定字段排序

**示例**:
```bash
# 显示所有进程
ps aux

# 显示所有进程（System V风格）
ps -ef

# 显示当前用户进程
ps -u $(whoami)

# 显示进程树
ps -ef --forest

# 按CPU使用率排序
ps aux --sort=-pcpu

# 按内存使用排序
ps aux --sort=-pmem

# 查找特定进程
ps aux | grep nginx
```

**输出字段解释** (ps aux):
- USER: 进程所有者
- PID: 进程ID
- %CPU: CPU使用率
- %MEM: 内存使用率
- VSZ: 虚拟内存大小
- RSS: 物理内存大小
- TTY: 终端类型
- STAT: 进程状态
- START: 启动时间
- TIME: CPU累计时间
- COMMAND: 命令行

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 网络信息

### `ip` - 网络配置

**功能**: 显示和管理网络接口、路由等

```bash
ip [OPTION] OBJECT [COMMAND [ARGUMENTS]]
```

**常用对象**:
- `addr` - 网络地址
- `route` - 路由表
- `link` - 网络接口

**示例**:
```bash
# 显示所有网络接口
ip addr show
# 或简写
ip a

# 显示特定接口
ip addr show eth0

# 显示路由表
ip route show
# 或简写
ip r

# 显示网络接口状态
ip link show
# 或简写
ip l

# 显示统计信息
ip -s link show
```

**权限**: 🟢 普通用户查看 | **危险级别**: ⚪ 安全

---

### `netstat` - 网络连接

**功能**: 显示网络连接、路由表、接口统计等

```bash
netstat [OPTION]...
```

**常用选项**:
- `-t` - TCP连接
- `-u` - UDP连接  
- `-l` - 监听端口
- `-p` - 显示进程信息
- `-n` - 数字格式显示
- `-r` - 路由表
- `-i` - 接口统计

**示例**:
```bash
# 显示所有连接
netstat -tuln

# 显示监听端口
netstat -tlnp

# 显示路由表
netstat -r

# 显示接口统计
netstat -i

# 查找占用端口的进程
netstat -tlnp | grep :80
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 系统日志

### `dmesg` - 内核消息

**功能**: 显示内核环形缓冲区消息

```bash
dmesg [OPTION]...
```

**常用选项**:
- `-T` - 显示人类可读时间
- `-w` - 等待新消息
- `-f FACILITY` - 过滤设施
- `-l LEVEL` - 过滤级别
- `-c` - 清空缓冲区（需要权限）

**示例**:
```bash
# 显示内核消息
dmesg

# 显示带时间戳的消息
dmesg -T

# 实时监控内核消息
dmesg -w

# 只显示错误消息
dmesg -l err

# 过滤USB相关消息
dmesg | grep -i usb

# 显示最近的内核消息
dmesg | tail -20
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 环境变量

### `env` - 环境变量

**功能**: 显示环境变量或在修改的环境中运行程序

```bash
env [OPTION]... [NAME=VALUE]... [COMMAND [ARG]...]
```

**示例**:
```bash
# 显示所有环境变量
env

# 显示特定环境变量
env | grep PATH

# 在修改的环境中运行命令
env PATH="/usr/bin" ls

# 清空环境运行命令
env -i bash
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

### `printenv` - 打印环境变量

**功能**: 打印环境变量值

```bash
printenv [VARIABLE]...
```

**示例**:
```bash
# 显示所有环境变量
printenv

# 显示特定变量
printenv PATH
printenv HOME USER

# 检查变量是否存在
printenv NONEXISTENT || echo "变量不存在"
```

**权限**: 🟢 普通用户 | **危险级别**: ⚪ 安全

---

## 实用组合命令

### 系统概览

```bash
# 系统基本信息一览
echo "=== 系统信息 ==="
uname -a
echo -e "\n=== 运行时间 ==="
uptime
echo -e "\n=== 内存使用 ==="
free -h
echo -e "\n=== 磁盘使用 ==="
df -h
echo -e "\n=== CPU信息 ==="
lscpu | head -15
```

### 快速故障排查

```bash
# 系统资源检查
echo "=== TOP 10 CPU进程 ==="
ps aux --sort=-pcpu | head -11

echo -e "\n=== TOP 10 内存进程 ==="
ps aux --sort=-pmem | head -11

echo -e "\n=== 磁盘使用TOP 5 ==="
du -sh /* 2>/dev/null | sort -rh | head -5

echo -e "\n=== 网络连接数 ==="
netstat -an | wc -l
```

### 硬件信息汇总

```bash
# 硬件信息脚本
#!/bin/bash
echo "=== 硬件信息汇总 ==="
echo "CPU: $(lscpu | grep 'Model name' | cut -d: -f2 | xargs)"
echo "内存: $(free -h | grep Mem | awk '{print $2}')"
echo "磁盘: $(df -h / | tail -1 | awk '{print $2}')"
echo "网卡: $(ip link show | grep '^[0-9]' | cut -d: -f2 | xargs)"
```

---

## 性能监控技巧

### 实时监控脚本

```bash
#!/bin/bash
# 系统监控脚本
while true; do
    clear
    echo "=== 系统监控 $(date) ==="
    echo "负载: $(uptime | cut -d: -f4-)"
    echo "内存: $(free | grep Mem | awk '{printf "%.1f%%", $3/$2*100}')"
    echo "磁盘: $(df / | tail -1 | awk '{print $5}')"
    echo "进程数: $(ps aux | wc -l)"
    sleep 5
done
```

---

## 最佳实践

1. **定期检查系统状态** - 建立监控习惯
2. **了解正常值** - 熟悉系统正常运行时的各项指标
3. **组合使用命令** - 多个命令组合获取完整信息
4. **脚本化监控** - 编写脚本自动化监控任务
5. **日志分析** - 结合日志文件分析系统状态

---

*参考文档*:
- [Linux System Administrator's Guide](https://tldp.org/LDP/sag/html/)
- [Proc(5) Manual Page](https://man7.org/linux/man-pages/man5/proc.5.html)
- [System Information Tools](https://www.kernel.org/doc/Documentation/admin-guide/)
