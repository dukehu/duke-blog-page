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
            types: [],
            content: `<pre><div class="hljs"><code class="lang-java"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String[] args)</span> </span>{
    String id = <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>;
    List&lt;FileDownLoad&gt; fileDownLoads = <span class="hljs-keyword">new</span> ArrayList&lt;&gt;();
    FileDownLoad fileDownLoad1 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"017a86d1-91d0-4231-8e27-fc40975f05f5"</span>, <span class="hljs-string">"三级"</span>, <span class="hljs-string">"f5d21480-2724-4bed-8d9d-3ffff8ee750a"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/f5d21480-2724-4bed-8d9d-3ffff8ee750a/017a86d1-91d0-4231-8e27-fc40975f05f5/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad2 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"07246551-bd4d-475e-8940-15ff87fdf9a3"</span>, <span class="hljs-string">"123"</span>, <span class="hljs-string">"b62d01af-1025-41db-9570-df3b67e0f3ad"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/b62d01af-1025-41db-9570-df3b67e0f3ad/07246551-bd4d-475e-8940-15ff87fdf9a3/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad3 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"2b13beb5-6c86-47ee-947a-2eb47e2bcf9c"</span>, <span class="hljs-string">"二级222"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/2b13beb5-6c86-47ee-947a-2eb47e2bcf9c/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad4 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"66985c6d-58a5-420e-8707-e98cfbac8a90"</span>, <span class="hljs-string">"二级5555"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/66985c6d-58a5-420e-8707-e98cfbac8a90/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad5 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"794a731d-1695-409c-8337-9693a8b91871"</span>, <span class="hljs-string">"三级222"</span>, <span class="hljs-string">"f5d21480-2724-4bed-8d9d-3ffff8ee750a"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/f5d21480-2724-4bed-8d9d-3ffff8ee750a/794a731d-1695-409c-8337-9693a8b91871/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad6 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"9076a7c5-7a27-4924-8d9e-55d6d9a2838e"</span>, <span class="hljs-string">"二级333"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/9076a7c5-7a27-4924-8d9e-55d6d9a2838e/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad7 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"9b2dc063-b5dd-445c-873b-2fdcb60ddd5e"</span>, <span class="hljs-string">"二级4444"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/9b2dc063-b5dd-445c-873b-2fdcb60ddd5e/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad8 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"b62d01af-1025-41db-9570-df3b67e0f3ad"</span>, <span class="hljs-string">"二级"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/b62d01af-1025-41db-9570-df3b67e0f3ad/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad9 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">"一级"</span>, <span class="hljs-string">"dv"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"0"</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad10 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"f5d21480-2724-4bed-8d9d-3ffff8ee750a"</span>, <span class="hljs-string">"二级111"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/f5d21480-2724-4bed-8d9d-3ffff8ee750a/"</span>, <span class="hljs-number">1</span>
    );

    FileDownLoad fileDownLoad11 = <span class="hljs-keyword">new</span> FileDownLoad(
            <span class="hljs-string">"1"</span>, <span class="hljs-string">"测试"</span>, <span class="hljs-string">"e24bdfac-ed01-4616-abef-65e919fb4c30"</span>, <span class="hljs-string">"D:\\work\\80690.jpg"</span>, <span class="hljs-string">"21"</span>, <span class="hljs-string">"dv/e24bdfac-ed01-4616-abef-65e919fb4c30/1"</span>, <span class="hljs-number">0</span>
    );
    fileDownLoads.add(fileDownLoad1);
    fileDownLoads.add(fileDownLoad2);
    fileDownLoads.add(fileDownLoad3);
    fileDownLoads.add(fileDownLoad4);
    fileDownLoads.add(fileDownLoad5);
    fileDownLoads.add(fileDownLoad6);
    fileDownLoads.add(fileDownLoad7);
    fileDownLoads.add(fileDownLoad8);
    fileDownLoads.add(fileDownLoad9);
    fileDownLoads.add(fileDownLoad10);
    fileDownLoads.add(fileDownLoad11);

    List&lt;FileDownLoad&gt; tmp = buildTreeByRecursive(fileDownLoads, id);
    System.out.println(tmp);
}

<span class="hljs-comment">/**
 * 构建树
 *
 * <span class="hljs-doctag">@param</span> treeNodes 树节点结合
 * <span class="hljs-doctag">@param</span> rootId    根节点id
 * <span class="hljs-doctag">@return</span> List&lt;FileDownLoad&gt;
 */</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> List&lt;FileDownLoad&gt; <span class="hljs-title">buildTreeByRecursive</span><span class="hljs-params">(List&lt;FileDownLoad&gt; treeNodes, String rootId)</span> </span>{
    List&lt;FileDownLoad&gt; tmpList = <span class="hljs-keyword">new</span> ArrayList&lt;&gt;();
    treeNodes.forEach(tmp -&gt; {
        <span class="hljs-keyword">if</span> (rootId.equals(tmp.getFileId())) {
            tmp.setNamePath(tmp.getFileName());
            File file = <span class="hljs-keyword">new</span> File(<span class="hljs-string">"d:/tmp/"</span> + tmp.getNamePath());
            <span class="hljs-keyword">if</span> (EcloudMicroDvConstants.FOLDER.equals(tmp.getDataType()) &amp;&amp; !file.exists()) {
                file.mkdirs();
            }
            tmpList.add(findChildren(tmp, treeNodes));
        }
    });
    ZipUtils.zip(<span class="hljs-string">"D:\\tmp\\测试.zip"</span>, <span class="hljs-string">"D:\\tmp\\一级"</span>);
    <span class="hljs-keyword">return</span> tmpList;
}

<span class="hljs-comment">/**
 * 迭代找儿子
 *
 * <span class="hljs-doctag">@param</span> treeNode  树节点
 * <span class="hljs-doctag">@param</span> treeNodes 树节点结合
 * <span class="hljs-doctag">@return</span> FileDownLoad
 */</span>
<span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> FileDownLoad <span class="hljs-title">findChildren</span><span class="hljs-params">(FileDownLoad treeNode, List&lt;FileDownLoad&gt; treeNodes)</span> </span>{
    treeNodes.forEach(tmp -&gt; {
        <span class="hljs-keyword">if</span> (treeNode.getFileId().equals(tmp.getParentId())) {
            tmp.setNamePath(<span class="hljs-string">"/"</span> + treeNode.getNamePath() + <span class="hljs-string">"/"</span> + tmp.getFileName());
            File file = <span class="hljs-keyword">new</span> File(<span class="hljs-string">"d:/tmp/"</span> + tmp.getNamePath());
            <span class="hljs-keyword">if</span> (EcloudMicroDvConstants.FOLDER.equals(tmp.getDataType())) {
                <span class="hljs-keyword">if</span> (!file.exists()) {
                    file.mkdirs();
                }
            } <span class="hljs-keyword">else</span> {
                File source = <span class="hljs-keyword">new</span> File(tmp.getLocalPath());
                File dest = <span class="hljs-keyword">new</span> File(<span class="hljs-string">"D:/tmp/"</span> + tmp.getNamePath() + <span class="hljs-string">".jpg"</span>);
                <span class="hljs-keyword">try</span> {
                    Files.copy(source.toPath(), dest.toPath());
                } <span class="hljs-keyword">catch</span> (IOException e) {
                    e.printStackTrace();
                }
            }
            <span class="hljs-keyword">if</span> (CollectionUtils.isEmpty(treeNode.getChildren())) {
                treeNode.setChildren(<span class="hljs-keyword">new</span> ArrayList&lt;&gt;());
            }
            treeNode.getChildren().add(findChildren(tmp, treeNodes));
        }
    });
    <span class="hljs-keyword">return</span> treeNode;
}
</code></div></pre>
`
        }
    },
    methods: {
        save(mdContent, htmlContent) {
            //console.log(mdContent);
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

