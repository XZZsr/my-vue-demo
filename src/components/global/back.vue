<template>
    <div class="my-back">
        <span class="return" @click="onCancel">
            <i class="el-icon-arrow-left"></i>
            返回
        </span>
        <span class="line"></span>
        <span class="title">{{title}}</span>
    </div>
</template>
<script>
export default{
    props: ['title','url'],
    methods:{
        onCancel(){
            if(this.url){
                this.$router.push({name: this.url})
                return false
            }
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .my-back{
        color: #4A4A4A;
        font-size: 0;

        span{
            display: inline-block;
            line-height: 30px;
            height: 30px;
            font-size: 16px;
        }
        .return{
            padding-right: 18px;
            cursor: pointer;
        }
        .title{
            padding-left: 18px;
        }
        .line{
            position: relative;
            top: 5px;
            width: 1px;
            height: 20px;
            background-color: #D6D6D6;
            transform: scaleX(0.5);
            -ms-transform: scaleX(0.5);
        }
        .return:hover{
            color: #3BCE4C;
        }
    }
</style>
