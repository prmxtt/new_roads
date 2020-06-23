<template>
  <div class="fasol_body">
    <form class="fasol_body_form">
      <h5 class="fasol_body_form_headline">FORM</h5>

      <div class="form-row fasol_body_form_line">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input  type="email" class="form-control fasol_body_form_line_inp" id="inputEmail4" v-on:click="sendTextToApp('email')"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control fasol_body_form_line_inp" id="inputPassword4" />
        </div>
      </div>
      <div class="form-group fasol_body_form_line">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control fasol_body_form_line_inp" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div class="form-group fasol_body_form_line">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control fasol_body_form_line_inp"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-row fasol_body_form_line">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control fasol_body_form_line_inp" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control fasol_body_form_line_inp">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control fasol_body_form_line_inp" id="inputZip" />
        </div>
      </div>
      <div class="form-group fasol_body_form_line">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">Check me out</label>
        </div>
      </div>
      <div class="fasol_body_form_btn">
        <button type="submit" class="btn">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FasolBody",
  el: '#fasol',
  data(){
    return{
      nameMsg: '',
    }
  },
  methods:{
     sendTextToApp(text){
       this.$emit('sendTextToApp', {
          nameMsg: text,     
        })
     }
  }
};
</script>

<style lang="scss">
.fasol_body_form {
  width: 50%;
  margin: 5% 25%;
  border: 1px solid #800080;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
}
.fasol_body_form_line {
  padding: 0 2%;
}

.fasol_body_form_btn {
  //   margin: 0 40%;
  background: #800080;
  color: #f5de01;
  width: 20%;
  border-radius: 3px;
  margin: 2% auto;
  //   display: flex;
  //   justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
}

.fasol_body_form_headline {
  text-align: center;
  padding: 2%;
}

.fasol_body_form_line_inp:hover {
  border: 2px solid #800080;
}
.btn {
  color: #f5de01;
  padding: 4% 30%;
}
</style>
