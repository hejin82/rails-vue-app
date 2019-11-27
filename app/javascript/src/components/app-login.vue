<template>
	<div class="login-container">
		<div class="title-container">
			<h3 class="title">
				Login
			</h3>
			<form class="login-form">
				<div>
					<input class="input form-item " type="text"/>
				</div>
				<div>
					<input class="input form-item " type="password"/>
				</div>
				<button class="btn btn-primary">Login</button>
			</form>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'app-login',
		data:  {

		}
	}
</script>
<style lang="scss">
	.login-container {
		.input {
			display: inline-block;
			height: 47px;
			width: 85%;
		}
		input {
			height: 47px;
			background: transparent;
			border: 0px;
			border-radius: 0px;
			padding: 12px 5px 12px 15px;
			color: #2a69a0;
			-webkit-appearance: none;
			&:-webkit-autofill {
				box-shadow: 0 0 0px 1000px #2a69a0 inset !important;
				-webkit-text-fill-color: #2a69a0 !important;
			}
		}
	}
	.title-container {
		position: relative;

		.title {
			font-size: 26px;
			color: #2a69a0;
			margin: 0px auto 40px auto;
			text-align: center;
			font-weight: bold;
		}

		.set-language {
			color: #fff;
			position: absolute;
			top: 3px;
			font-size: 18px;
			right: 0px;
			cursor: pointer;
		}
	}
	.login-form {
		position: relative;
		width: 520px;
		max-width: 100%;
		padding: 160px 35px 0;
		margin: 0 auto;
		overflow: hidden;
	}
	.form-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		color: #454545;
	}
</style>