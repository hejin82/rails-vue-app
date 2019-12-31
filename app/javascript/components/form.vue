<template>
	<div id="app" class="container py-4">
		<div class="row">
			<div class="col-12">
				<form>
					<BaseInput label="First Name:" v-model="form.first_name"/>
					<BaseInput label="Last Name:" v-model="form.last_name"/>
					<BaseInput label="Email:" v-model="form.email"/>
					<BaseSelect label="What do you love most about Vue?" :options="loveOptions" v-model="form.love"/>
					<div class="form-group">
						<button :disabled="!formIsValid" @click.prevent="onSubmit" type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '../src/lib/utils/axios_utils';
	import BaseInput from './BaseInput';
	import BaseSelect from './BaseSelect';

  export default {
    components: {
      BaseInput,
			BaseSelect
		},
    data: function() {
      return {
        form: {
          first_name: '',
					last_name: '',
					email: '',
					love: 'fun'
				},
				loveOptions: [
					{ label: 'fun to user', value: 'fun' },
					{ label: 'friendly learning curve', value: 'curve' }
				]
      };
    },
		methods: {
      onSubmit() {
        console.log('click', this.formIsValid());
        if (!this.formIsValid()) {
          return;
				}
        axios.post('/forms', {form: this.form})
					.then(response => {
					  console.log('from has been posted', response)
					})
					.catch(err => {
					  console.log('an error occurred', err);
					});
			},
			formIsValid() {
        return (
          this.form.first_name.length > 0 &&
					this.form.last_name.length > 0 &&
					this.form.email.length > 0
				)
			}
		}
  };
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>