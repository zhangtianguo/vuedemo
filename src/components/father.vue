<template>
    <div>
    <div @click="open()">这个页面是父组件</div>
    {{userInfo}}
    <!--{{userInfo2}}-->
    
    <!--这个是子组件-->
    <children ref="children" @isShowDialogEvent="close()" title="提示">
        <div slot="default-content">
            网络异常
        </div>
        <div slot="default-footer">
           <div @click="close()">知道了</div>
        </div>
    </children>
    </div>
</template>
<script>
import {mapState} from 'vuex'  //mapState 实际上是  state的映射
export default {
    data(){
        return{
            msg: 'ttest'
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.userInfo,
            userInfo2: state => state.userInfo2
        })
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            this.$axiosPost(this.$url.index1).then(res => {
                // console.log(res.data.articles[0])
                this.msg = res.data.articles[0]
            })
        },
        open(){
            this.$refs.children.show()
        },
        close(){
            this.$toast('你点击了确定按钮')
            this.$refs.children.hide()
        }
    },

}
</script>
<style scoped>
    
</style>