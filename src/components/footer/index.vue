<template>
    <div class="copyright" v-show="!isLogin">
        <div class="container">
            <div class="row" style="text-align:center">
                <div class="col-sm-12"> 
                    <span>Copyright © 2018
                    </span> | 
                    <span>
                        Powered by duke
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
.copyright {
    background: #111;
    font-size: 15px;
    padding: 25px 0;
    border-top: 1px solid #303030;
    color: #666;
    width: 100%;
}
</style>