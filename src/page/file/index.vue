<template>
    <el-collapse value="PDF2WORD" accordion>
        <el-collapse-item title="PDF2WORD" name="PDF2WORD">
            <!-- pdf2word 开始 -->
            <el-card id="PDF2WORD" class="pdf_2_word box-card" style="padding-bottom:10px">
                <div slot="header" class="clearfix">
                    <span style="font-size: 10px; color: red;">只能上传doc/docx文件，且不超过10MB;</span>
                    <el-button 
                        style="float: right;" 
                        type="primary" 
                        title="历史转换" 
                        icon="el-icon-files" 
                        circle 
                        size="mini"
                        @click="converted">
                    </el-button>
                </div>
                <el-upload
                    class="upload-demo"
                    drag
                    ref="pdf2WordUpload"
                    :on-success="pdf2WordUploadSuccessCallBack"
                    :on-error="uploadErrorCallBack"
                    :before-upload="pdf2WordBeforeUploadCallBack"
                    :auto-upload="false"
                    :data="uploadPramas"
                    :action="pdf2WordUrl"
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <el-button size="small" type="primary" @click="pdf2Word">开始转换</el-button>
            </el-card>
            <!-- pdf2word 结束 -->
        </el-collapse-item>
        <el-collapse-item title="FILES" name="files">
            <el-card class="box-card" style="padding-bottom:30px">
                <!-- 附件上传（单文件） -->
                <el-upload
                    style="width: 50%; float: left"
                    ref="upload"
                    :on-success="uploadSuccessCallBack"
                    :on-error="uploadErrorCallBack"
                    :before-upload="beforeUploadCallBack"
                    :auto-upload="false"
                    :data="uploadPramas"
                    :action="uploadUrl"
                    >
                    <div class="el-upload__tip" slot="tip">支持秒传/切片上传，且不超过20m</div>
                    <el-button slot="trigger" size="small" type="primary">选取文件（单文件）</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器（单文件）</el-button>
                </el-upload>
                <!-- 附件上传（多文件） -->
                <el-upload
                    style="width: 50%; float: right"
                    ref="multipleUpload"
                    :on-success="uploadSuccessCallBack"
                    :on-error="uploadErrorCallBack"
                    :before-upload="beforeUploadCallBack"
                    :auto-upload="true"
                    :data="uploadPramas"
                    :action="uploadUrl"
                    multiple
                    >
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过20m</div>
                    <el-button slot="trigger" size="small" type="primary">选取文件（多文件）</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服   务器（多文件）</el-button>
                </el-upload>
            </el-card>
            <!-- 附件列表 -->
            <el-table
                :data="files"
                stripe
                border
                highlight-current-row
                style="width: 100%; overflow: auto"
                height="380">
                    <el-table-column
                        label="文件名称"
                        sortable
                        prop="name">
                    </el-table-column>
                    <el-table-column
                        label="文件类型"
                        sortable
                        prop="suffix">
                    </el-table-column>
                    <el-table-column
                        label="文件大小"
                        sortable
                        prop="size">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                icon="el-icon-view"
                                title="PREVIEW"
                                circle
                                @click="handlePreview(scope.$index, scope.row)"></el-button>
                            <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                title="DELETE"
                                circle
                                @click="handleDelete(scope.$index, scope.row)"></el-button>
                            <el-button
                                size="mini"
                                type="primary"
                                icon="el-icon-download"
                                title="DOWNLOAD"
                                circle
                                @click="handleDownload(scope.$index, scope.row)"></el-button>
                        </template>
                    </el-table-column>
            </el-table>
        </el-collapse-item>
        <filePreview v-if="filePreviewDialogVisible" :visible.sync="filePreviewDialogVisible" :file="curFile"></filePreview>
    </el-collapse>
</template>

<script>
import {backHost} from '../../../static/config.js';
import filePreview from '../../components/file/filePreview.vue';
import SparkMD5 from 'spark-md5'
export default {
    components: {filePreview},
    data(){
        return{
            uploadUrl: backHost + '/zuul/api/storage/nologin/upload',
            pdf2WordUrl: backHost + '/zuul/api/storage/nologin/pdf2Word',
            uploadPramas: {
                serviceId: 'duke-storage'
            },
            files: [],
            filePreviewDialogVisible: false,
            curFile: {},
            pdf2WordLoading: {}
        }
    },
    methods:{
        mountedInit() {
            this.getFileList()
        },
        // 计算文件MD5值
        calculateMD5(file, callBack){
            let fileReader = new FileReader()
            let blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice
            let chunkSize = 2097152
            // read in chunks of 2MB
            let chunks = Math.ceil(file.size / chunkSize)
            let currentChunk = 0
            let spark = new SparkMD5()
            fileReader.onload = function(e) {
                spark.appendBinary(e.target.result); // append binary string
                currentChunk++;
                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    callBack(spark.end());
                }
            };
            function loadNext() {  
                let start = currentChunk * chunkSize
                let end = start + chunkSize >= file.size ? file.size : start + chunkSize
                fileReader.readAsBinaryString(blobSlice.call(file, start, end));
            };
            loadNext();
        },
        // 文件上传至服务器（单文件上传）
        submitUpload() {
            let files = this.$refs.upload.uploadFiles;
            if(files.length <= 0) {
                this.$message({message: '没有需要上传的附件！', type: 'warning'});
                return
            }
            let file = files[0].raw
            let self = this
            this.calculateMD5(file, function(md5) {
                // 先根据md5查询是否上传过该文件
                self.$axios('get', '/api/storage/nologin/file/' + md5)
                    .then(res => {
                        if(res.status === 200) {
                            if(res.data) {
                                // 秒传
                                self.secondUpload(file.name, md5, 'duke-storage', self)
                            } else {
                                // 分片上传
                                self.chunkUpload(file, md5, self)
                            }
                        } else {
                            self.$message({message: res.message, type: 'warning'});
                        }
                    }).catch(error => {
                        self.$message({message: error, type: 'error'});
                    })
            })
        },
        // 秒传
        secondUpload(fileName, md5, serviceId, self) {
            self.$axios('post', '/api/storage/nologin/file/secondUpload', {
                fileName: fileName,
                md5: md5,
                serviceId: serviceId
            }).then(res => {
                self.getFileList()
            });
        },
        // 分片上传
        chunkUpload(file, md5, self) {
            let date = new Date()
            let curTime = date.getTime()
            // 分片大小 20M
            // let chunkSize = 20 * 1024 * 1024
            let chunkSize = 20 * 1024 * 40
            // 文件大小（单位kb）
            let fileSize = file.size
            // 文件名
            let fileName = curTime + "_" + file.name;
            // 分片集合
            let chunks = []
            // 分片数
            let totalChunks = Math.ceil(file.size / chunkSize)
            // 请求集合
            let axiosList = []
            if(totalChunks === 1) {
                self.uploadPramas['md5'] = md5
                self.$refs.upload.submit()
                return
            }
            for(let currentChunkNumber = 0; currentChunkNumber < totalChunks; currentChunkNumber ++) {
                // 当前块大小
                let currentChunkSize = chunkSize
                // 块起始位置
                let chunkBegin = currentChunkNumber * chunkSize
                // 块结束位置
                let chunkEnd = (currentChunkNumber + 1) * chunkSize
                if(chunkEnd > fileSize) {
                    currentChunkSize = fileSize - chunkBegin
                    chunkEnd = fileSize
                }
                chunks.push({
                    chunkNumber: currentChunkNumber,
                    chunkSize: chunkSize,
                    currentChunkSize: currentChunkSize,
                    totalSize: fileSize,
                    totalChunks: totalChunks,
                    md5: md5,
                    fileName: currentChunkNumber + "_" + fileName,
                    serviceId: 'duke-storage',
                    chunk: file.slice(chunkBegin, chunkEnd)
                })
            }
            chunks.map(function(chunk) {
                let form = new FormData();
                form.append("file", chunk.chunk);
                form.append("chunkNumber", chunk.chunkNumber);
                form.append("chunkSize", chunk.chunkSize);
                form.append("currentChunkSize", chunk.currentChunkSize);
                form.append("totalSize", chunk.totalSize);
                form.append("totalChunks", chunk.totalChunks);
                form.append("md5", chunk.md5);
                form.append("fileName", chunk.fileName);
                form.append("serviceId", chunk.serviceId);
                axiosList.push(
                    self.$axios('post','/api/storage/nologin/upload/chunk', form, false, true)
                );
            })
            // 所有切片上传成功后合并
            Promise.all(axiosList).then(res => {
                self.$axios('post', '/api/storage/nologin/file/merge', {
                    fileName: file.name,
                    fileSize: fileSize,
                    md5: md5,
                    serviceId: 'duke-storage'
                }).then(res => {
                    self.getFileList()
                });
            });
        },
        // 上传成功回调函数
        uploadSuccessCallBack(response, file, fileList) {
            this.$message({message: '上传成功', type: 'success'});
            this.$refs.pdf2WordUpload.clearFiles()
            this.$refs.upload.clearFiles()
            this.$refs.multipleUpload.clearFiles()
            this.getFileList()
        },
        pdf2WordUploadSuccessCallBack(response, file, fileList) {
            // 文件导出
            if (!response) {
                return
            }
            this.pdf2WordLoading.text="转换完成，正在努力下载中..."
            let formDom = document.createElement('form');
            formDom.method = 'post';
            formDom.style.display = 'none';
            formDom.action = backHost + '/api/storage/nologin/pdf2Word/download/' + response.data;
            document.body.appendChild(formDom);
            // todo 在成功回调中关闭loading等一系列事情
            formDom.submit();
            setTimeout(() => {
                this.$refs.pdf2WordUpload.clearFiles()
                this.pdf2WordLoading.close()
                document.body.removeChild(formDom)
            }, 5000)
        },
        // 上传失败回调函数
        uploadErrorCallBack(err, file, fileList) {},
        // 文件上传之前的回调函数
        beforeUploadCallBack(file) {
            console.log(file)
        },
        // pdf2word文件上传之前回调函数
        pdf2WordBeforeUploadCallBack(file) {
            console.log(file)
        },
        // 预览
        handlePreview(index, row) {
            this.curFile = row
            this.filePreviewDialogVisible = true
        },
        // 删除
        handleDelete(index, row) {
            console.log(index, row);
        },
        // pdf文件转word
        pdf2Word() {
            let files = this.$refs.pdf2WordUpload.uploadFiles;
            if(files.length <= 0) {
                this.$message({message: '没有需要转换的文件！', type: 'warning'});
                return
            }
            let file = files[0].raw
            let self = this
            self.calculateMD5(file, function(md5) {
                let fileName = file.name
                let tmpArr = fileName.split('.')
                let suffix = tmpArr[tmpArr.length - 1]
                if(suffix !== 'pdf') {
                    self.$message({message: '文件格式错误！', type: 'warning'})
                    self.$refs.pdf2WordUpload.clearFiles()
                    return
                }
                self.pdf2WordLoading = self.$loading({
                    target: '.pdf_2_word',
                    lock: true,
                    text: '正在努力转换中...请稍后',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                self.uploadPramas['md5'] = md5
                self.$refs.pdf2WordUpload.submit()
            })
        },
        // 已转换
        converted() {
            this.$message({message: '正在开发...敬请期待', type: 'success'});
        },
        // 下载
        handleDownload(index, row) {
            let formDom = document.createElement('form');
            formDom.method = 'post';
            formDom.style.display = 'none';
            formDom.action = backHost + '/api/storage/nologin/file_download/' + row.id;
            document.body.appendChild(formDom);
            formDom.submit();
            console.log(formDom);
            setTimeout(() => {
                document.body.removeChild(formDom)
            }, 500)
        },
        // 获取文件列表
        getFileList() {
            this.$axios('get','/api/storage/nologin/files', {serviceId: 'duke-storage'}).then(data => {
                this.files = data.data.list;
            })
        }
    },
    created() {
    },
    mounted() {
        this.mountedInit()
    },
    watch: {
        
    }
}
</script>

<style>
.el-collapse-item__header {
    font-size: 20px;
    padding-left: 10px;
}
input[type=file] {
    display: none;
}
#PDF2WORD .el-upload-dragger {
    height: 100px;
    width: 200px;
}
#PDF2WORD .el-upload-dragger .el-icon-upload {
    font-size: 33px;
    margin: 0;
}
#PDF2WORD ul {
    float: right;
    height: 100px;
    overflow: auto;
}
.upload-demo {
    width: 55%;
}
</style>