---
title: Sublime Text添加插入带当前时间作者详细说明
tags: sublime
categories: tools
abbrlink: 9b02e30a
date: 2016-03-03 16:40:12
---

### 创建插件：
<!--more-->
tools → New Plugin:

```
import datetime
import sublime_plugin
class AddInfoCommand(sublime_plugin.TextCommand):
  def run(self, edit):
    self.view.run_command("insert_snippet",
      {
        "contents": "/**""\n"
        " * @Author:	  name""\n"
        " * @DateTime:	"  "%s"  %datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") +"\n"
        " * @Description: Description""\n"
        " */"
      }
    )
```


保存为Sublime Text 2\Packages\User\ addInfo.py

### 创建快捷键：

Preference → Key Bindings - User:

```
[
    {
        "command": "add_info",
        "keys": [
            "ctrl+shift+,"
        ]
    }
]
```

此时使用快捷键 ctrl+shift+, 即可在当前光标处插入当前时间，如下：

![](http://img1.tuicool.com/ENvyIz.png!web)