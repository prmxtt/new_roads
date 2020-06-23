<template>
  <div class="fasol_footer">
    <div class="row fasol_footer_line">
      <div class="col-1">
        <a href="#" class="fasol_footer_link">LINK1</a>
      </div>
      <div class="col-1">
        <a href="#" class="fasol_footer_link">LINK2</a>
      </div>
    </div>
    <div class="row"> 
      <div class="col-8 fasol_footer_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pulvinar massa. Phasellus id ipsum risus. Vestibulum sodales tristique justo ut aliquet. In et magna eleifend, euismod odio sit amet, rhoncus mauris. Donec aliquet justo dui, a consequat magna semper sit amet. Nunc nulla ligula, scelerisque eget augue eu, feugiat pharetra dolor.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FasolFoot"
};
</script>

<style lang="scss" scoped>
.fasol_footer {
  //   height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.fasol_footer_line {
  padding: 2% 0 0 2%;
}
.fasol_footer_text{
    font-size: 0.8em;
    padding: 1% 0 1% 3%;
}

.fasol_footer_link {
  color: #800080;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    color: #f5de01;
  }
}
</style>
