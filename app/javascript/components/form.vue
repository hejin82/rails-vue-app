<template>
	<div id="app" class="container py-4">
		<div class="row">
			<div class="col-12">
				<form>
					<BaseInput label="First Name:"
										 v-model="$v.form.first_name.$model"
										 :validator="$v.form.first_name"/>
					<BaseInput label="Last Name:"
										 v-model="$v.form.last_name.$model"
										 :validator="$v.form.last_name"/>
					<BaseInput label="Email:"
										 v-model="$v.form.email.$model"
										 :validator="$v.form.email"/>
					<BaseSelect label="What do you love most about Vue?"
											:options="loveOptions"
											v-model="$v.form.love.$model"
											:validator="$v.form.love"/>
					<input type="text" v-model="form.telephone" v-mask="'(###)####-####'">
					<input type="text" v-model="$v.form.website.$model" class="form-control"
						:class="{
							'is-valid': !$v.form.website.$error && $v.form.website.$dirty,
							'is-invalid': $v.form.website.$error
						}">
					<pre>{{$v}}</pre>
					<div class="form-group">
						<button :disabled="$v.$error"
										@click.prevent="onSubmit"
										type="submit"
										class="btn btn-primary">Submit</button>
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
	import { url, alpha, email, required } from 'vuelidate/lib/validators';

  export default {
    validations: {
      form: {
        first_name: {
          alpha, required
				},
				last_name: {
          alpha
				},
				email: {
          email, required
				},
        website: {
          url
				},
				love: {
          required
				}
			}
		},
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
					love: 'fun',
          telephone: '',
          website: ''
        },
				loveOptions: [
					{ label: 'fun to user', value: 'fun' },
					{ label: 'friendly learning curve', value: 'curve' }
				],
      };
    },
		methods: {
      onSubmit() {
        // console.log('click', this.formIsValid());
        this.$v.$touch();
        console.log(('this.$v.$invalid:', this.$v.$invalid))
        if (this.$v.$invalid) {
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
			// formIsValid() {
      //   return (
      //     this.form.first_name.length > 0 &&
			// 		this.form.last_name.length > 0 &&
			// 		this.form.email.length > 0
			// 	)
			// }
		}
  };
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>