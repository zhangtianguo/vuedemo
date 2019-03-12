<template>
    <div class="xhf-dialog" v-show="isShowDialog">
        <div class="mask" @click="hide()"></div>
        <div class="xhf-dialog-wraper">
            <div class="xhf-dialog-title">{{title}}</div>
            <div class="xhf-dialog-content">
                <slot name="default-content">
                    {{content}}{{value}}
                </slot>
            </div>
            <div class="xhf-dialog-footer">
                <slot name="default-footer">
                    <div @click="cancel()">取消</div>
                    <div @click="confirm()">确定</div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'children',
    props:{
        title:{
            type: String,
            default: '温馨提示'
        },
        content:{
            type: String,
            default: '内容'
        },
        value: {}
    },
    data(){
        return{
            // 是否显示弹窗
            isShowDialog: false,
        }
    },
    methods:{
        // 隐藏
        hide(){
            this.isShowDialog = false
        },
        // 显示
        show(){
            this.isShowDialog = true
        },
        cancel(){
            this.hide()
        },
        confirm(){
            // 对外发射事件  或者说是派发事件
            this.$emit('isShowDialogEvent')
        }
    }

}
</script>
<style scoped>
.mask{
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: rgba(0,0,0,.5);
    z-index: 1000
}
.xhf-dialog-wraper{
    margin: 2rem auto;
    width: 80%;
    height: 3.6rem;
    background: #FFF;
    position: relative;
    z-index: 1001;
    border-radius: 6px;
    overflow: hidden
}
.xhf-dialog-title{
    width: 100%;
    line-height: 0.8rem;
    border-bottom: 1px solid #c6c6c6;
}
.xhf-dialog-content{
    width: 100%;
    line-height: 2rem;
    border-bottom: 1px solid #c6c6c6;
}
.xhf-dialog-footer{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
   
}
.xhf-dialog-footer >div{
    flex: 1;
    line-height: 0.8rem;
}
.xhf-dialog-footer >div:last-child{
    background: red;
    color: #fff;
}
</style>