<template>
    <div>
        <button type="button" title="我要上天" class="btn btn-default btn-sm back-top" @click="backTop()" v-show="backTopShow">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'backTop',
    data() {
      return {
        backTopShow:false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=13;
            document.documentElement.scrollTop-=13;
          }else {
            clearInterval(back)
          }
        });
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      }
    }
}
</script>

<style scoped>
.back-top {
    position: fixed;
    right: 40px;
    bottom: 20px;
    z-index: 1;
}
</style>
