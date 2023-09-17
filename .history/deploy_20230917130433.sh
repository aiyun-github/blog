#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.aiyun.com' > CNAME

git init
# git config user.email "xxx@xx.com"
# git config user.name "xxx"
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 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
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github:aiyun-github/blog-demo.git master:main
# 执行该文件：sh deploy.sh

cd -