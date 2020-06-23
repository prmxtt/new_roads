<template>
  <div id="app">
    <!-- <Fasolinka :nameMsg='nameMsg'/> -->
        <Fasolinka :nameMsg='nameMsg' @outputName='findMsgInDB'/>

    <FasolHead />
    <FasolBody @sendTextToApp='outputName'/>
    <FasolFoot />
  </div>
</template>

<script>
import FasolHead from "./components/FasolHead.vue";
import FasolBody from "./components/FasolBody.vue";
import FasolFoot from "./components/FasolFoot.vue";
import Fasolinka from "./components/Fasolinka.vue";
export default {
  name: "App",
  components: {
    FasolHead,
    FasolBody,
    FasolFoot,
    Fasolinka
  },
  data(){
    return{
      nameMsg: '',
    }
  },
  methods:{
    outputName(nameMsg){
      console.log('ok from app', nameMsg);
    }
  }
};
</script>

<style lang="scss">
#app {
  max-width: 1288px;
}
</style>
