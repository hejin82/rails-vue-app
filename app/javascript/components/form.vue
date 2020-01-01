<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form>
          <BaseInput
            v-model="$v.form.first_name.$model"
            label="First Name:"
            :validator="$v.form.first_name"
            @input="updateUser('first_name', $event)"
          />
          <BaseInput v-model="$v.form.last_name.$model" label="Last Name:" :validator="$v.form.last_name" />
          <BaseInput v-model="$v.form.email.$model" label="Email:" :validator="$v.form.email" />
          <BaseSelect
            v-model="$v.form.love.$model"
            label="What do you love most about Vue?"
            :options="loveOptions"
            :validator="$v.form.love"
          />
          <input v-model="form.telephone" v-mask="'(###)####-####'" type="text" />
          <input
            v-model="$v.form.website.$model"
            type="text"
            class="form-control"
            :class="{
              'is-valid': !$v.form.website.$error && $v.form.website.$dirty,
              'is-invalid': $v.form.website.$error
            }"
          />
          <pre>{{ $v }}</pre>
          <div class="form-group">
            <button :disabled="$v.$error" type="submit" class="btn btn-primary" @click.prevent="onSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div class="row">
        <div class="col-12">
          <form>
            <Renderer v-for="(element, name) in schema" :key="name" v-model="form[name]" :element="element" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../src/lib/utils/axios_utils';
import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import { url, alpha, email, required } from 'vuelidate/lib/validators';
import { mapState } from 'vuex';
import schema from './formSchema.json';
import Renderer from './Renderer';

export default {
  validations: {
    form: {
      first_name: {
        alpha,
        required
      },
      last_name: {
        alpha
      },
      email: {
        email,
        required
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
    Renderer,
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
      schema: schema
    };
  },
  computed: {
    ...mapState({ form: 'user' })
  },
  created() {
    console.log('created()');
    this.$store.dispatch('getLoggedInUser');
  },
  methods: {
    updateUser(property, value) {
      this.$store.dispatch('updateUserData', {
        property,
        value
      });
      this.$v.form[property].$touch();
      console.log('this.$store.state.user.first_name', this.$store.state.user.first_name);
    },
    onSubmit() {
      // console.log('click', this.formIsValid());
      this.$v.$touch();
      console.log(('this.$v.$invalid:', this.$v.$invalid));
      if (this.$v.$invalid) {
        return;
      }
      axios
        .post('/forms', { form: this.form })
        .then(response => {
          console.log('from has been posted', response);
        })
        .catch(err => {
          console.log('an error occurred', err);
        });
    }
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
