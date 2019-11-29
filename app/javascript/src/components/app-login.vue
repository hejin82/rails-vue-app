<template>
	<div id="app"><div data-v-f30d123c="" class="login-container">
		<form data-v-f30d123c="" class="el-form login-form el-form--label-left">
			<div data-v-f30d123c="" class="title-container">
				<h3 data-v-f30d123c="" class="title">
					系统登录
				</h3>
			</div>
			<div data-v-f30d123c="" class="el-form-item is-success el-form-item--medium"><!---->
				<div class="el-form-item__content">
					<span data-v-f30d123c="" class="svg-container">
						<svg data-v-f30d123c="" version="1.1" viewBox="0 0 130 130" class="svg-icon svg-fill" style="width: 1em; height: 1em;">
							<path pid="0" d="M63.4 65c20.7 0 37.4-14.3 37.4-32 0-17.6-16.7-32-37.4-32-20.6 0-37.3 14.4-37.3 32 0 17.7 16.7 32 37.3 32zm17.2 10.7H49.4C22.8 75.7 1.2 94 1.2 116.9v2.7c0 9.3 21.6 9.3 48.2 9.3h31.2c26.6 0 48.2-.3 48.2-9.3v-2.7c0-22.8-21.6-41.2-48.2-41.2z" _stroke="#979797"></path>
						</svg>
					</span><div data-v-f30d123c="" class="el-input el-input--medium"><!---->
					<input type="text" placeholder="账号" name="username" class="el-input__inner"><!----><!----><!----><!---->
				</div><!---->
				</div>
			</div>
			<div data-v-f30d123c="" class="el-form-item is-success el-form-item--medium"><!---->
				<div class="el-form-item__content"><span data-v-f30d123c="" class="svg-container"><svg data-v-f30d123c="" version="1.1" viewBox="0 0 128 128" class="svg-icon svg-fill" style="width: 1em; height: 1em;"><path pid="0" d="M108.8 44.3H89.6V39c0-9-3.3-24.2-25.6-24.2-23.1 0-25.6 16.9-25.6 24.2v5.3H19.2V39C19.2 15.3 36.8 0 64 0c27.2 0 44.8 15.3 44.8 39v5.3zm-32 39.4c0-5.5-5.8-9.9-12.8-9.9-7 0-12.8 4.4-12.8 9.9 0 3.7 2.6 6.8 6.4 8.5v11.2c0 2.7 2.9 5 6.4 5 3.5 0 6.4-2.3 6.4-5V92.2c3.8-1.7 6.4-4.8 6.4-8.5zM128 64v49.2c0 8.2-8.6 14.8-19.2 14.8H19.2C8.7 128 0 121.4 0 113.2V64c0-8.2 8.6-14.8 19.2-14.8h89.6c10.6 0 19.2 6.6 19.2 14.8z"></path></svg></span><div data-v-f30d123c="" class="el-input el-input--medium"><!----><input type="" autocomplete="on" placeholder="密码" name="password" class="el-input__inner"><!----><!----><!----><!----></div><span data-v-f30d123c="" class="show-pwd"><svg data-v-f30d123c="" version="1.1" viewBox="0 0 1024 1024" class="svg-icon svg-fill" style="width: 1em; height: 1em;"><defs></defs><path pid="0" d="M512 128q69.7 0 135.5 21.2t115.5 55 93.5 74.8 73.7 82 51.6 74.8 32.2 54.9l10 21.3-6.3 13.5q-4 8.5-18.8 34.7t-31.7 51.6-44.3 60-56.9 64.4-69.5 60.1-82.3 51.5-94.9 34.7T512 896q-69.7 0-135.5-21.2T261 820t-93.5-74.3-73.7-81.5-51.6-74.5-32.2-55l-10-21 6.3-13.5q4-8.5 18.8-34.8t31.7-51.8 44.3-60.4 56.9-64.6 69.5-60.4 82.3-51.8 94.9-34.8T512 128zm0 85.3q-46.7 0-91.6 12.4t-81.2 31.8-70.7 47.1-59.6 54.5-48.9 57.7-37.6 52.8-26.4 44q12.4 21.7 26.4 43.5t37.6 52.4 48.9 57 59.6 53.8 70.7 46.7 81.2 31.5 91.6 12.2 91.6-12.4 81.2-31.6 70.7-46.9 59.6-54.2 48.9-57.3 37.6-52.7T928 512q-12.4-21.7-26.4-43.6T864 415.7t-49-57.3-59.6-54.2-70.7-46.9-81.2-31.6-91.6-12.4zm0 128q70.7 0 120.7 50t50 120.7-50 120.7-120.7 50-120.7-50-50-120.7 50-120.7 120.7-50zm0 85.4q-35.3 0-60.3 25t-25 60.3 25 60.3 60.3 25 60.3-25 25-60.3-25-60.3-60.3-25z"></path></svg></span><!----></div></div><button data-v-f30d123c="" type="button" class="el-button el-button--primary el-button--medium" style="width: 100%; margin-bottom: 30px;"><!----><!----><span>
      登录
    </span></button></form></div><!----></div>
</template>
<script>
	export default {
	  name: 'app-login',
		data:  {

		}
	}
</script>
<style lang="css">
	.el-button--medium {
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 4px;
	}
	.el-button--primary {
		color: #fff;
		background-color: #1890ff;
		border-color: #1890ff;
	}
	.el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		color: #1f2d3d;
		-webkit-appearance: none;
		text-align: center;
		-webkit-box-sizing: border-box;
		outline: none;
		margin: 0;
		-webkit-transition: .1s;
		transition: .1s;
		font-weight: 400;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
	}
	*, :after, :before {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	#app, body, html {
		height: 100%;
	}
	.login-container {
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-color: #2d3a4b;
	}
	.login-container .login-form {
		position: relative;
		width: 520px;
		max-width: 100%;
		padding: 160px 35px 0;
		margin: 0 auto;
		overflow: hidden;
	}
	.el-form-item:after, .el-form-item:before,.el-form-item__content:after, .el-form-item__content:before {
		display: table;
		content: "";
	}
	.el-form-item:after, .el-form-item__content:after {
		clear: both;
	}
	.el-form-item--medium .el-form-item__content,
	.el-form-item--medium .el-form-item__label {
		line-height: 36px;
	}
	.el-form-item__content {
		line-height: 40px;
		position: relative;
		font-size: 14px;
	}
	.login-container .el-form-item {
		border: 1px solid hsla(9,9%,100%,.1);
		background: rgba(0,0,0,.1);
		border-radius: 5px;
		color: #454545;
	}
	.svg-container {
		padding: 6px 5px 6px 15px;
		color: #889aa4;
		vertical-align: middle;
		width: 30px;
		display: inline-block;
	}
	.el-input {
		display: inline-block;
		height: 47px;
		width: 85%;
	}
	.el-input::-webkit-scrollbar {
		z-index: 11;
		width: 6px;
	}
	.el-input::-webkit-scrollbar-corner,
	.el-input::-webkit-scrollbar-track {
		background: #fff;
	}
	.el-input::-webkit-scrollbar-thumb {
		border-radius: 5px;
		width: 6px;
		background: #b4bccc;
	}
	.el-input::-webkit-scrollbar-track-piece {
		background: #fff;
		width: 6px;
	}
	.el-input input {
		height: 47px;
		background: transparent;
		border: 0;
		border-radius: 0;
		padding: 12px 5px 12px 15px;
		color: #eee;
		caret-color: #fff;
		-webkit-appearance: none;
	}
	.el-input--medium .el-input__inner {
		height: 36px;
		line-height: 36px;
	}
	.el-input__inner {
		-webkit-appearance: none;
		box-sizing: border-box;
		display: inline-block;
		font-size: inherit;
		outline: none;
		/*transition: border-color .2s cubic-bezier(.645,.045,.355,1);*/
		width: 100%;
	}
</style>