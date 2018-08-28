<template>
    <hzqing-vue-timeline 
        timelineColor="#FFF"  
        timeContentColor="darkgray"
        :dataList="data"
        >
    </hzqing-vue-timeline>
</template>

<script>
export default {
    data() {
        return {
             data: [
                {
                    time: 1522372393000,
                    img: 'static/touxiang.jpeg',
                    title: 'hzqing.com',
                    content: '这是衡钊清的个人博客'
                },
                {
                    time: '2018-03-30 14:36:35',
                    img: 'static/one.jpeg',
                    title: '这是一个简单的vue时间轴插件',
                    content: '这是一个简单的vue时间轴插件，使用非常的方便'
                },
                {
                    time: '2018-02-16 14:36:35',
                    img: 'static/one.jpeg',
                    title: '这是一个简单的vue时间轴插件',
                    content: '这是一个简单的vue时间轴插件，使用非常的方便'
                },
                {
                    time: '2018-03-18 14:36:35',
                    img: 'static/one.jpeg',
                    title: '这是一个简单的vue时间轴插件',
                    content: '这是一个简单的vue时间轴插件，使用非常的方便'
                },
                {
                    time: '2018-03-12 14:36:35',
                    img: 'static/one.jpeg',
                    title: '这是一个简单的vue时间轴插件',
                    content: '这是一个简单的vue时间轴插件，使用非常的方便'
                },
                {
                    time: '2017-03-12 14:36:35',
                    img: 'static/one.jpeg',
                    title: '这是一个简单的vue时间轴插件',
                    content: '这是一个简单的vue时间轴插件，使用非常的方便'
                },
                {
                    time: 1522372393000,
                    img: 'static/three.jpg',
                    title: '努力奋斗',
                    content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
