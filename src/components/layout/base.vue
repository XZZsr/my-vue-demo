<template>
    <div class="layout">
        <navbar></navbar>
        <div class="container">
            <el-row>
                <el-button @click="linkTo">列表页面</el-button>
            </el-row>
            <el-row>
                <router-view></router-view>
            </el-row>
        </div>
    </div>
</template>

<script>
    import navbar from './_navbar.vue'

    export default{
        components: {
            navbar,
        },
        methods:{
            linkTo(){
                this.$router.push({name:'help-files.index'})
            }
        },
        mounted(){

        }
    }
</script>

<style lang="scss">
    body,html{
        background-color: #f4f4f4;

        .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            background-color: #fff;
            min-height: 800px;
        }
        @media (min-width: 768px) {
            .container {
                width: 750px;
            }
        }
        @media (min-width: 992px) {
            .container {
                width: 970px;
            }
        }
        @media (min-width: 1200px) {
            .container {
                width: 1170px;
            }
        }
    }
</style>
