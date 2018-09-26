<template>
    <div class="panel panel-default" style="padding: 15px">
        <h2>共{{tags.length}}个标签</h2>
        <hr 
            style="filter: progid:dximagetransform.microsoft.glow(color='#987cb9',strength=10)" 
            width="100%" color="#987cb9" 
            size=1 />
        <a style="cursor:pointer;" v-for="tag in tags" :style="tag.style" :key="tag.id">{{tag.name}} </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: []
        }
    },
    methods: {
        getTags() {
            this.$axios('get', "/api/blog/nologin/blog_label").then(data => {
                this.tags = data.data;
                this.tags.forEach(item => {
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
        this.getTags();
    }
}
</script>

<style scoped>

</style>
