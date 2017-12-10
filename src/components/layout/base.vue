<template>
    <div class="layout">
        <div class="el-header">
            <base-navbar></base-navbar>
        </div>
        <el-container>
            <base-slider></base-slider>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    <base-footer></base-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import baseNavbar from './_navbar.vue'
    import baseSlider from './_slider.vue'
    import baseFooter from './_footer.vue'

    export default{
        components: {
            baseNavbar,
            baseSlider,
            baseFooter
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
    @import '../../assets/css/style.scss';
</style>
