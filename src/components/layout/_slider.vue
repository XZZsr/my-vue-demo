<template>
    <div class="base-slider" :class="{active:sliderToggle}">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="collapseStatus">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
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
        computed: mapGetters({ //获取vuex的getter
            sliderToggle: 'common/sliderToggle'
        }),
        data(){
            return{
                collapseStatus: false,
            }
        },
        methods: {
            changeCollapse(val){
                this.collapseStatus = val
            },
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
