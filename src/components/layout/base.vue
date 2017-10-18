<template>
    <div class="layout">
        <navbar></navbar>
        <div class="container">
            <el-card class="box-card">
                <router-link to="/test">跳转路由</router-link>
                <router-view>

                </router-view>
            </el-card>
        </div>

    </div>
</template>

<script>
    import navbar from './_navbar.vue'

    export default{
        components: {
            navbar,
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

            .box-card{
                min-height: 800px;
            }
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
