<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="title" 
                        class="col-sm-1 control-label" 
                        style="line-height: 2.6; text-align:center">标题:</label>
                    <div class="col-sm-11">
                        <input type="text" v-model="article.title" class="form-control" style="height: 50px;" placeholder="标题">
                    </div>
                </div>
                <div class="form-group">
                    <label for="article.blogLabelVMS" 
                        class="col-sm-1 control-label"
                        style="line-height: 2; text-align:center">标签:</label>
                    <div class="col-sm-11">
                        <label v-for="tag in tags" v-bind:key="tag.id" class="checkbox-inline">
                            <input type="checkbox" v-model="article.labelIds" :value="tag.id"> {{tag.name}}
                        </label>
                        <input type="text" v-model="tag" class="tt" v-show="addTag" placeholder="标签名">
                        <a type="submit"  v-show="!addTag" @click="addTag=true"
                            class="btn btn-primary" 
                            style="border-radius: 20px; border: 0; padding:5px 8px;">
                            <i class="fa fa-plus fa-lg"></i>
                        </a>
                        <a type="submit"  v-show="addTag" @click="saveTag"
                            class="btn btn-primary" 
                            style="border-radius: 20px; border: 0; padding:5px 8px; margin-left:10px;">
                            <i class="fa fa-save fa-lg"></i>
                        </a>
                    </div>
                </div>
                <div class="form-group">
                    <label for="categories"
                        class="col-sm-1 control-label"
                        style="line-height: 2; text-align:center">类别:</label>
                    <div class="col-sm-11">
                        <label v-for="category in categories" v-bind:key="category.id" class="checkbox-inline">
                            <input type="checkbox" v-model="article.typeIds" :value="category.id"> {{category.name}}
                        </label>
                        <input type="text" v-model="category" class="tt" v-show="addType" placeholder="类别名">
                        <a type="submit"  v-show="!addType" @click="addType=true"
                            class="btn btn-primary" 
                            style="border-radius: 20px; border: 0; padding:5px 8px;">
                            <i class="fa fa-plus fa-lg"></i>
                        </a>
                        <a type="submit"  v-show="addType" @click="saveType"
                            class="btn btn-primary" 
                            style="border-radius: 20px; border: 0; padding:5px 8px; margin-left:10px;">
                            <i class="fa fa-save fa-lg"></i>
                        </a>
                    </div>
                </div>
                <mavon-editor 
                    style="z-index: 1;margin: 25px 0 25px 15px;" 
                    @save="save" @imgAdd="imgAdd" 
                    ref="md" 
                    :ishljs="true"/>
            </form>
            
        </div>
        <div class="form-group panel-footer" style="float:right;width:100%;">
            <a type="submit" 
                class="btn btn-primary"
                @click="writeArticle(1)" 
                style="border-radius: 20px;border: 0;float:right">
                <i class="fa fa-mail-forward fa-lg"></i>
                发布文章
            </a>
            <a type="submit" 
                class="btn btn-default" 
                @click="writeArticle(2)"
                style="border-radius: 20px;border: 0;float:right">
                <i class="fa fa-book fa-lg"></i>
                存草稿
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
            addTag: false,
            addType: false,
            category: '',
            tag: '',
            tags: [],
            categories: [],
            article: {
                title: '',
                navigation: '',
                htmlContent: '',
                mdContent: '',
                labelIds: [],
                typeIds: [],
                isDraft: 1
            }
        }
    },
    methods: {
        save(mdContent, htmlContent) {
        },
        writeArticle(isDraft) {
            let md = this.$refs.md;
            let navigation = this.getNavigation(md);
            let mdContent = md.d_value;
            let htmlContent = md.d_render;

            this.article.mdContent = mdContent;
            this.article.htmlContent = htmlContent;
            this.article.navigation = navigation;
            this.article.isDraft = isDraft;
            this.$axios('post',"/api/blog/blog_article", this.article).then(res => {
               console.log(res.data);
            });
        },
        getNavigation(md) {
            let reg = /^H[1-6]{1}$/;
            let navigationContent = md.$refs.navigationContent;
            navigationContent.innerHTML = md.d_render
            let nodes = navigationContent.children;
            let navigationStr = '';
            if (nodes.length) {
                for (let i = 0; i < nodes.length; i++) {
                    if (reg.exec(nodes[i].tagName)) {
                    navigationStr += nodes[i].outerHTML;
                    }
                }
            }
            return navigationStr;
        },
        saveType() {
            if(this.category === '') {
                this.addType = false;
            } else {
                this.$axios('post', "/api/blog/blog_type", {
                    name: this.category
                }).then(data => {
                    this.addType = false;
                    this.getCategories();
                })
            }
        },
        saveTag() {
            if(this.tag === '') {
                this.addTag = false;
            } else {
                this.$axios('post', "/api/blog/blog_label", {
                    name: this.tag
                }).then(data => {
                    this.addTag = false;
                    this.getTags();
                })
            }
        },
        imgAdd(pos, $file){
            var _this = this;
            console.log(_this);
            console.log($file);
            // _this.$refs.md.$imglst2Url([[pos, json.msg]])
            let serviceId = 'blog-blog';
            // 将图片上传到服务器.
            this.$axios('post', "/api/storage/upload", {
                name: this.tag
            },upload=true).then(data => {
                this.addTag = false;
                this.getTags();
            })
        },
        getTags() {
            this.$axios('get', "/api/blog/blog_label").then(data => {
                this.tags = data.data;
            })
        },
        getCategories() {
            this.$axios('get', "/api/blog/blog_type").then(data => {
                this.categories = data.data;
            })
        }
    },
    created(){
        this.getTags();
        this.getCategories();
    }
}
</script>

<style scoped>
.error {
    width: 10%;
    background: #f2dede; 
    border-color: #ebccd1; 
    color: #a94442;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 4px; 
    position: fixed;
}
.tt {
    width:80px; 
    margin-left:10px;
}
</style>

