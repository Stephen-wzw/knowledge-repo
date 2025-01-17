---
title: 起步
date: 2023-09-28
icon: creative
category:
  - READING
tag:
  - git
---

## 关于版本控制

版本控制系统类型：

1. 本地版本控制——复制项目保存不同版本
2. 集中式版本控制——服务器损坏则丢失所有数据
3. 分布式版本控制——本地和服务器都保存版本历史

## Git 是什么

### 直接记录快照，而非差异比较

大部分版本控制系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce、Bazaar 等等） 将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 （它们通常称作 **基于差异（delta-based）** 的版本控制）。

![存储每个文件与初始版本的差异。](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/deltas.png)

Git 将数据视为一系列快照。每当提交更新或保存项目状态时，Git 就会对当时的全部文件创建一个快照并保存这个快照的索引。如果文件没有修改，Git 不会重新存储该文件，而是只保留一个链接指向之前存储的文件。整个方式更像是一个 **快照流**。

![Git 存储项目随时间改变的快照。](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/snapshots.png)

### 近乎所有操作都是本地执行

Git 绝大多数操作都只需要访问本地文件和资源，一般不需要网络。

### Git 保证完整性

Git 中的所有数据在存储前都会使用哈希值来计算校验和，因此可以保证整个项目的完整性。

SHA-1 散列（hash, 哈希）由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：

```
24b9da6552252987aa493b52f8696cd6d3b00373
```

### Git 一般只添加数据

执行的 Git 操作，几乎只往 Git 数据库中 **添加** 数据，Git 几乎不会执行任何可能导致文件不可恢复的操作。

### Git 三种状态

Git 有三种状态，你的文件可能处于其中之一： **已提交（committed）**、**已修改（modified）** 和 **已暂存（staged）**。

- 已提交表示数据已经安全地保存在本地数据库中。
- 已修改表示修改了文件，但还没保存到数据库中。
- 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。

![工作区、暂存区以及 Git 目录。](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/areas.png)

工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。 按照 Git 的术语叫做「索引」，不过一般说法还是叫「暂存区」。

Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据。

基本的 Git 工作流程如下：

1. 在工作区中修改文件。
2. 将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。
3. 提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。

如果 Git 目录中保存着特定版本的文件，就属于 **已提交** 状态。 如果文件已修改并放入暂存区，就属于 **已暂存** 状态。 如果自上次检出后，作了修改但还没有放到暂存区域，就是 **已修改** 状态。

## 初始化配置

Git 自带一个 `git config` 工具帮助设置控制 Git 外观和行为的配置变量，这些变量存储在三个不同的位置：

1. `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果在执行 `git config` 时带上 `--system` 选项，那么它就会读写该文件中的配置变量。 （由于它是系统配置文件，因此你需要管理员或超级用户权限来修改它。）
2. `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 你可以传递 `--global` 选项让 Git 读写此文件，这会对你系统上 **所有** 的仓库生效。
3. 当前使用仓库的 Git 目录中的 `config` 文件（即 `.git/config`）：针对该仓库。 你可以传递 `--local` 选项让 Git 强制读写此文件，虽然默认情况下用的就是它。（当然，你需要进入某个 Git 仓库中才能让该选项生效。）

每一个级别会覆盖上一级别的配置，所以 `.git/config` 的配置变量会覆盖 `/etc/gitconfig` 中的配置变量。

使用以下命令查看所有配置及它们所在的文件：

```shell
git config --list --show-origin
```

### 用户信息

每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### 检查配置信息

可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置。

```shell
git config --list
```

## 获取帮助

使用 `git help` 获取 Git 命令的全面帮助手册。

使用 `git -h` 获取更加简明的输出。
