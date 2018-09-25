<template>
    <div class="col-sm-3 col-md-12">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="firstname" class="col-sm-1 control-label">标题</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" id="firstname" placeholder="标题">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-11" style="text-align:left">
                    <label for="lastname" class="col-sm-1 control-label">标 签</label>
                    <label v-for="label in labels" v-bind:key="label.id" class="checkbox-inline">
                        <input type="checkbox" id="label.id" value="label.id"> {{label.name}}
                    </label>
                </div>
            </div>
        </form>
        <mavon-editor style="height: 100%" @save="save" @imgAdd="imgAdd" ref="md" :ishljs="true"/>
        <div class="form-group" style="margin-top:15px;float:right">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">发布</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import Qs from 'qs';
export default {
    components: { mavonEditor },
    data() {
        return {
            labels:[]
        }
    },
    methods: {
        save(mdContent, htmlContent) {
            console.log(mdContent);
            console.log(htmlContent);
        },
        imgAdd(pos, $file){
            var _this = this;
        }
    },
    created(){
      this.$axios('get', "/api/blog/nologin/blog_label").then(data => {
          this.labels = data.data;
      })
    }
}
</script>

<style scoped>

</style>

