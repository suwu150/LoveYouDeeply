---
title: 基于react-native实现情侣小游戏
date: 2018-06-25 11:19:33
tags: react-native
--- 

--
#### 一、背景    

前段时间，突发奇想，想要自己做一款能够上架的app，就根据react-native进行了开发，其中具有的功能点就是情侣了解度的测试，通过一些
情侣应该知道的问题进行测试双方的了解程度，了解的越多，则得分也就越高，在这个app里边区分男方和女方，用户点击进如对应的题库进行答
题，最终获取分值    

#### 二、效果
![image](https://github.com/suwu150/LoveYouDeeply/blob/master/loveyou.gif?raw=true)  

#### 三、下载安装与查看
1.首先，通过命令进行克隆项目
```shell
git clone https://github.com/suwu150/LoveYouDeeply.git
```
也可以直接到网站[https://github.com/suwu150/LoveYouDeeply](https://github.com/suwu150/LoveYouDeeply)进行直接下载到本地
2.在下载之后，进入到项目中，执行下面命令进行安装依赖
```shell
npm install
```
确保安装没有出错，然后运行下面命令
`react-native run-ios`或者`react-native run-android`
注意，在mac系统中可直接运行`react-native run-ios`命令，windows系统中，运行react-native run-android这个之前需要确定有模拟器是
启动着的或者有真机是连接着的。
按照上面的过程实施之后，就可以看到效果了
####四、代码及实现过程
1.项目结构如下所示： 
其中，具体代码写在src中，在src中`assets`中放置静态资源，components中放置使用到的组件，constants中放置静态常量，pages中放置具体的页面
utils中放置工具类 

1.主页面代码(home)   
2.内容界面(content)
#### 五、下一版本待做功能
[].增加远程服务器，进行数据存储      
[].增加用户自己提交问题的功能

#### 六、仓库地址
欢迎访问代码仓库：[https://github.com/suwu150/LoveYouDeeply](https://github.com/suwu150/LoveYouDeeply) 点赞加星星

#### 七、发布地址
安卓app已经发布到[百度手机助手](http://shouji.baidu.com/software/24185511.html),点击下载装到你的手机吧！！
其他发布地址正在跟进中...
    
    
