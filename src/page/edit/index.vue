<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="firstname" 
                        class="col-sm-1 control-label" 
                        style="line-height: 2.6; text-align:center">标题</label>
                    <div class="col-sm-11">
                        <input type="text" class="form-control" style="height: 50px;" id="firstname" placeholder="标题">
                    </div>
                </div>
                <div class="form-group">
                    <label for="tags" 
                        class="col-sm-1 control-label"
                        style="line-height: 2; text-align:center">标签</label>
                    <div class="col-sm-11">
                        <label v-for="tag in tags" v-bind:key="tag.id" class="checkbox-inline">
                            <input type="checkbox" :id="tag.id" :value="tag.id"> {{tag.name}}
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="types"
                        class="col-sm-1 control-label"
                        style="line-height: 2; text-align:center">类别</label>
                    <div class="col-sm-11">
                        <label v-for="type in types" v-bind:key="type.id" class="checkbox-inline">
                            <input type="checkbox" :id="type.id" :value="type.id"> {{type.name}}
                        </label>
                    </div>
                </div>
                <mavon-editor style="z-index: 1;margin: 25px 0 25px 15px;" @save="save" @imgAdd="imgAdd" ref="md" :ishljs="true"/>
                <!-- 权限系统没做完之前，先使用这种暴力的方式 -->
                <div class="form-group">
                    <label for="password" 
                        class="col-sm-1 control-label" 
                        style="line-height: 2.6; text-align:center">密钥</label>
                    <div class="col-sm-11">
                        <input type="password" class="form-control" style="height: 50px;" id="password" placeholder="标题">
                    </div>
                </div>
            </form>
            
        </div>
        <div class="form-group panel-footer" style="float:right;width:100%;">
            <a type="submit" 
                class="btn btn-default" 
                style="border-radius: 20px;border: 0;float:right">
                <i class="fa fa-mail-forward fa-lg"></i>
                发布文章
            </a>
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
            tags: [],
            types: []
        }
    },
    methods: {
        save(mdContent, htmlContent) {
            console.log(mdContent);
            console.log(htmlContent);
        },
        imgAdd(pos, $file){
            var _this = this;
        },
        getTags() {
            this.$axios('get', "/api/blog/nologin/blog_label").then(data => {
                this.tags = data.data;
            })
        },
        getTypes() {

        }
    },
    created(){
        this.getTags();
        this.getTypes();
    }
}
</script>

<style scoped>
</style>

