# @faiflow/template-faicomponent

这是一个 faicomponent 项目模板，默认安装了 faicomponent，同时单元测试等基础设施都已配置完成。

## 使用

使用这个模板需要先安装好 faiflow [http://gitlab.faidev.cc/frontend/faiflow](http://gitlab.faidev.cc/frontend/faiflow)

### 初始化
```sh
mkdir faicomponent
cd faicomponent
fai init -t faicomponent
```

通过如上命令便可以完成项目的初始化

### 测试
```sh
fai test
```

### 开发
```sh
fai dev
```

### 构建
```sh
fai build
```

> 注意： 生成文件默认会去掉 vue.js、moment.js 的依赖，可能需要你自行到运行时环境中引入。

### 发布
```
fai publish
```

请根据需要更改 `.faiflow/pipe.yml` 进行配置