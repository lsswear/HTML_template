**semantic_wj**
## 文件说明
	test.html 测试后文件
	admin 后台模板
	app 前台模板 
		blog 博客模板
		首页、登录、文章编辑、文章类型编辑
	dist 编译后的css js 
		基于官方代码修改
## 文件差别
	app/blog/semantic2016/semantic.css 已修改颜色背景等 改动较大
	admin/public/dist/semantic.css和dist/semantic.css 改动较小
		居中等 
		admin/public/dist/semantic.css：
			.ui.centeralign {
			  text-align: center;
			}

			.ui.leftalign {
			  text-align: left;
			}

			.ui.rightalign {
			  text-align: right;
			}
		dist/semantic.css:
			.rightaligned {
			  text-align: right;
			}

			.leftaligned {
			  text-align: left;
			}

			.centeraligned {
			  text-align: center;
			}
	建议用 
## 待修改css
	.ui.error{ 
		color:@red;
	}
	.ui.hidden{ 
		display:none;
	}