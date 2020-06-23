<template>
  <div class="fasol_header">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link fasol_header_link act" href="#">ACTIVE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fasol_header_link" href="#">LINK</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fasol_header_link" href="#">LINK2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fasol_header_link" href="#">LINK3</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FasolHead"
  // data(){
  //   msg: "head"
  // },
  // methods:{
  //   sendMessage(data){
  //     this.msg = data.msg
  //   }
  // }
};
</script>

<style lang="scss">
.fasol_header {
  height: 90px;
  background-color: rgba(0, 0, 0, 0.3);
}

.fasol_header_link {
  color: #f5de01;
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: 600;

  &:hover{
    color: #800080;
  }
}

.act:hover{
  
}
</style>
