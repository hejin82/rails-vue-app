<template>
	<div id="app" class="container py-4">
		<div class="row">
			<div class="col-12">
				<form>
					<div class="form-group">
						<label>First Name:</label>
						<input v-model="form.first_name" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Last Name:</label>
						<input v-model="form.last_name" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Email:</label>
						<input v-model="form.email" type="email" class="form-control">
					</div>
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

  export default {
    data: function() {
      return {
        form: {
          first_name: '',
					last_name: '',
					email: ''
				}
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