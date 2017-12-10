<template>
    <div class="base-slider" :class="{active:sliderToggle}">
        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo"
                 :collapse="collapseStatus"
                  @select="handleSelect">
                 
            <el-menu-item index="demo.demo1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="demo.demo2">
                <i class="el-icon-setting"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">通用页面</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="others.404">404</el-menu-item>
                    <el-menu-item index="others.500">500</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <div class="collapse">
            <el-switch
                v-model="collapseStatus"
                @change="changeCollapse">
            </el-switch>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export  default{
        computed: {
            ...mapGetters({ //获取vuex的getter
                sliderToggle: 'common/sliderToggle'
            }),
            defaultActive(){
                return this.$route.name
            }
        },
        data(){
            return{
                collapseStatus: false,
            }
        },
        methods: {
            changeCollapse(val){
                this.collapseStatus = val
            },
            handleSelect(key){
                this.$router.push({name:key})
            }
        }
    }
</script>
<style lang="scss">
    .base-slider{
        border-right: solid 1px #e6e6e6;
        .el-menu{
            border-right: none;
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
        }
        .collapse{
            line-height: 56px;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        .base-slider{
            position: absolute;
            left: -100%;
            transition: all 0.6s;
            border-bottom: solid 1px #e6e6e6;
            background-color: #fff;
            -webkit-box-shadow: 2px 1px 2px 0 rgba(0,0,0,.15);
            box-shadow: 2px 1px 2px 0 rgba(0,0,0,.15);
        }
        .base-slider.active{
            left: 0;
            transition: all 0.6s;
        }
    }
</style>
