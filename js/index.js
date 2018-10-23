var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var defaultFields = {
  email: '',
  password: '',
  remember: false };


new Vue({
  el: '#login-form',
  data: {
    hasErrors: false,
    passwordIsText: false,
    isLoading: false,
    isSuccess: false,
    fields: _extends({},
    defaultFields) },


  methods: {
    submitLogin: function submitLogin() {var _this = this;
      this.isLoading = true;
      axios.post(
      'https://reqres.in/api/login?delay=1', _extends({},

      this.fields)).


      then(function () {
        _this.isLoading = false;
        _this.isSuccess = true;
        _this.fields = _extends({},
        defaultFields);

      }).
      catch(function () {
        _this.isLoading = false;
        _this.hasErrors = true;
      });
    } } });

Vue.component('my-modal', {
  template: 
  `
  <div class="Modal-rootOverlay" v-show='show' @click.self='close'>
    <div class="Modal-Card" :class='[mod, position]'>
      <div v-if='title' class="title">{{ title }}</div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="actions">
        <slot name="actions">
          <button class="btn red" @click='close'>Cerrar</button>
        </slot>
      </div>
    </div>
  </div>
  `,
  props: {
    show: Boolean,
    mod: String,
    title: String,
    position: {
      type: String,
      default: 'Y_center'
    }
  },
  watch: {
    show(isShow) {
      document.body.style.cssText = (isShow) ? "height:100vh;overflow:hidden;" : "";
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false);
      document.body.style = '';
    },
  }
});


const vm = new Vue({
  el: "#app",
  data: {
    showModal_1: false,
    showModal_2: false,
    showModal_3: false,
    showModal_4: false,
    showModal_5: false,
    showModal_6: false,
    showModal_7: false
  }
});