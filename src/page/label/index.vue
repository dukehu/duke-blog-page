<template>
    <div class="panel panel-default" style="padding: 15px">
        <h2>共{{labels.length}}个标签</h2>
        <hr 
            style="filter: progid:dximagetransform.microsoft.glow(color='#987cb9',strength=10)" 
            width="100%" color="#987cb9" 
            size=1 />
        <a style="cursor:pointer;" v-for="label in labels" :style="label.style" :key="label.id">{{label.name}} </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labels: []
        }
    },
    methods: {
        getLables() {
            this.$axios('get', "/api/blog/nologin/blog_label").then(data => {
                this.labels = data.data;
                this.labels.forEach(item => {
                    item.style = this.randomColor() + ";" + this.randomFontSize();
                })
            })
        },
        randomColor() {
            var colorStr = Math.floor( Math.random() * 0xFFFFFF ).toString( 16 ).toUpperCase();　　   
            return "color:#" + "000000".substring( 0, 6 - colorStr ) + colorStr; 
        },
        randomFontSize() {
            var fontSizeStr = Math.floor(Math.random() * 26 +15);
            return "font-size:" + fontSizeStr + "px";
        }
    },
    created() {
        this.getLables();
    }
}
</script>

<style scoped>

</style>
