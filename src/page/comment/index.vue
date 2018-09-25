<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="font-size:20px;">
            <span class="glyphicon glyphicon-comment"></span> 评论
            <button class="btn btn-info btn-sm disabled" style="float:right" data-toggle="tooltip" title="敬请期待">
                提交评论
            </button>
        </div>
        <div class="panel-body">
            <mavon-editor
                style="z-index:0" 
                :subfield=false>
            </mavon-editor>
            <hr class="simple" color="#6f5499" /> 
            <div class="list-group">
                <div class="list-group-item" v-for="comment in comments" :key="comment.id">
                    <div>
                        <img src="../../assets/user.png" class="user" style="float:left" />
                        <div style="padding:5px;margin-left: 80px;">
                            <a>{{comment.userName}}</a>&nbsp;&nbsp;&nbsp; <span>{{comment.commentDate}}</span>
                            <div style="padding:5px 0;">
                                <span v-html="comment.content"></span>
                                <button style="float:right;" class="btn btn-default btn-sm disabled"  data-toggle="tooltip" title="敬请期待">回复</button>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-left: 80px;">
                        <div v-for="c in comment.children" :key="c.id">
                            <hr class="simple" color="#6f5499"/> 
                            <img src="../../assets/user.png" class="user" style="float:left" />
                            <div style="padding:5px;margin-left: 80px;">
                                <a>{{c.userName}}</a>&nbsp;&nbsp;&nbsp; <span>{{c.commentDate}}</span>
                                <div v-html="c.content">
                                    您将通过网页进行免费域名注册。您将通过网页进行免费域名注册。您将通过网页进行免费域名注册。
                                    您将通过网页进行免费域名注册。您将通过网页进行免费域名注册。您将通过网页进行免费域名注册。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    components: {mavonEditor},
    name: 'comment',
    props: {
        comments: {
            type: Array
        }
    }
}
</script>

<style scoped>
.user{
    height: 60px;
    width: 60px; 
    border: 1px solid yellow;
    border-radius: 30px;
    padding: 5px;
}
.list-group-item >>> img{
    display: inline-block;
    height: auto;
    max-width: 100%;
}
</style>
