<template>
  <div class="fasolinka">
    <button type="button" class="close" aria-label="Close" v-on:click="visible=!visible">
      <span aria-hidden="true">&times;</span>
    </button>

    <div class="fasolinka_message" id="fasol" v-show="visible">
      <!-- <p v-for="(hint, idx) in hints" :key="idx" class="speech">{{ hint.mess }}</p> -->
      <p>Thanks, {{zapismess}} </p>
    </div>

    <div id="fasol" v-show="visible">
      <svg
        enable-background="new 0 0 24 24"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 24 24"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="fasolinka_svg"
      >
        <path
          d="M12,0C6.8007813,0,3,9.8681641,3,15.0043945C3,19.9643555,7.0371094,24,12,24s9-4.0356445,9-8.9956055  C21,9.8681641,17.1992188,0,12,0z M12,1.9956055c2.2496338,0,4.5167847,3.5043945,5.838562,7.2389526l-1.6217651,0.2297974  l-3.3222656-4.2714844c-0.0849609-0.1088867-0.2109375-0.1782227-0.3486328-0.190918  c-0.1396484-0.012207-0.2744141,0.0317383-0.3779297,0.1245117L8.0205078,8.8125L7.3535156,8.1464844  C7.2119141,8.0043945,7,7.9628906,6.8144531,8.0356445L6.5841675,8.1275635C7.9362183,4.8370361,9.9750977,1.9956055,12,1.9956055z   M13.5,9c-0.184082,0-0.333313,0.2238159-0.333313,0.5c0,0.2070923,0.0839233,0.3847656,0.2035522,0.4606934  C13.0664063,9.8674316,12.833313,9.4832153,12.833313,9c0-0.5523071,0.2985229-1,0.666687-1s0.666687,0.4476929,0.666687,1  c0,0.4832153-0.2330933,0.8674316-0.5369263,0.9606934C13.7493896,9.8847656,13.833313,9.7070923,13.833313,9.5  C13.833313,9.2238159,13.684082,9,13.5,9z M10.5,9c-0.184082,0-0.333313,0.2238159-0.333313,0.5  c0,0.2070923,0.0839233,0.3847656,0.2035522,0.4606934C10.0664063,9.8674316,9.833313,9.4832153,9.833313,9  c0-0.5523071,0.2985229-1,0.666687-1s0.666687,0.4476929,0.666687,1c0,0.4832153-0.2330933,0.8674316-0.5369263,0.9606934  C10.7493896,9.8847656,10.833313,9.7070923,10.833313,9.5C10.833313,9.2238159,10.684082,9,10.5,9z M11.1464844,10.6464844  c0.1953125-0.1953125,0.5117188-0.1953125,0.7070313,0L12,10.7929688l0.1464844-0.1464844  c0.1953125-0.1953125,0.5117188-0.1953125,0.7070313,0s0.1953125,0.5117188,0,0.7070313l-0.5,0.5  C12.2558594,11.9511719,12.1279297,12,12,12s-0.2558594-0.0488281-0.3535156-0.1464844l-0.5-0.5  C10.9511719,11.1582031,10.9511719,10.8417969,11.1464844,10.6464844z M12,21.9956055c-3.859375,0-7-3.1381836-7-6.9956055  c0-0.3239136,0.020752-0.6687012,0.0536499-1.0241699l1.7178345-0.814209l1.28125,2.5620117  c0.0625,0.1245117,0.1738281,0.2172852,0.3076172,0.2563477c0.1337891,0.0385742,0.2773438,0.0195313,0.3964844-0.0512695  l4.7119141-2.8271484l3.7314453,2.7983398C17.2890625,15.9672852,17.3945313,16,17.5,16  c0.1289063,0,0.2568359-0.0493164,0.3535156-0.1464844l1.1340942-1.1340942C18.9901733,14.8114624,19,14.9105835,19,15  C19,18.8574219,15.859375,21.9956055,12,21.9956055z"
          fill="#800080"
        />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </div>
  </div>
</template>

<script> 
import { db } from "../main";
export default {
  name: "Fasolinka",
  el: "#fasol",
  methods: {
    // findMess(){
    //   hint = db.collection("hints").where("name" , "==" , "кнопка")
    //   return hint
    // }
    findMsgInDB(nameMsg){
      var zapis = db.collection("hints").where("name","==", nameMsg)
      zapismess = zapis.mess
      return zapismess
    }
  },
  props: ['email'],
  data() {
    return {
      visible: true,
      nameMsg: '',
      zapismess:'',
      // msg: '',
      hints: []
    };
  },
  firestore() {
    return {
      hints: db.collection("hints"),
      // hints: db.collection("hints").where("name" , "==" , "кнопка")
    };
  }
};
</script>

<style lang='scss'>
.fasolinka {
  width: 10%;
  position: fixed;
  margin-left: 87%;
  margin-top: 40%;
}

.fasolinka_svg:hover {
  width: 105%;
}
// .fasolinka_message{
//   display: none;
// }
p.speech {
  // display: none;
  position: relative;
  width: 100px;
  // height: 40px;
  text-align: center;
  margin-left: -30%;
  // line-height: 100px;
  background-color: #fff;
  border: 3px solid #666;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
}
</style>
