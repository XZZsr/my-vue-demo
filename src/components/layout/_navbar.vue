<template>
    <div class="base-header">
        <el-row>
            <el-col :xs="24" :sm="12">
                <div class="navbar-header">
                    <button class="navbar-toggle" @click="toggole">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                    <router-link to="/" class="navbar-brand">
                        <div class="navbar-info">
                            <my-icon name="logo"></my-icon>
                            <span class="title">Admin</span>
                        </div>
                    </router-link>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12">
                <div class="admin-nav">
                    <el-menu
                        :default-active="activeIndex2"
                        class="navbar-menu"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#409EFF"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item index="1"><a href="#" target="_blank">文档</a></el-menu-item>
                        <el-menu-item index="2"><a href="#" target="_blank">社区</a></el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-bell"></i></el-menu-item>
                        <el-menu-item index="4">
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <my-icon name="photo" class="user_avatar"></my-icon>
                                    <i class="el-icon-arrow-down el-icon--right user_arrow"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>安全设置</el-dropdown-item>
                                    <el-dropdown-item>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export  default{
        computed: mapGetters({ //获取vuex的getter

        }),
        data(){
            return{
                activeIndex2: ''
            }
        },
        methods: {
            handleSelect(){

            },
            toggole(){
                this.$store.commit('common/setToggle')
            }
        }
    }
</script>
<style lang="scss">
    .base-header{
        .navbar-header{
            padding: 10px 0;
            position: relative;

            .navbar-toggle{
                display: none;
                vertical-align: middle;
                width: 40px;
                height: 32px;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                background: transparent;
                border: 1px solid #d8dce5;
                color: #5a5e66;
                -webkit-appearance: none;
                text-align: center;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                outline: 0;
                margin: 0 10px 0 0;
                -webkit-transition: .1s;
                transition: .1s;
                font-weight: 500;
                padding: 2px;
                font-size: 14px;
                border-radius: 4px;

                .line{
                    display: block;
                    margin: 4px auto;
                    background-color: #FFF;
                    border-radius: 0;
                    width: 24px;
                    height: 2px;
                }
            }
            .navbar-brand{
                display: inline-block;
                color: #fff;
                font-size: 20px;
                font-family: 'Open Sans';
                .navbar-info{
                    vertical-align: middle;
                    img{
                        margin-right: 10px;
                        display: inline-block;
                        vertical-align: middle;
                        width: 32px;
                        height: 32px;
                    }
                    .title{
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
        }
        .el-menu--horizontal .el-submenu .el-submenu__title,
        .el-menu--horizontal .el-menu-item{
            padding: 0 10px;
            height: 52px;
            line-height: 52px;
        }
        .admin-nav{
            float: right;
        }
        .el-submenu__title i{
            color: inherit;
        }
        .navbar-menu{
            .el-menu--horizontal{
                border-bottom: none;
            }
            i{
                color: inherit;
            }
            .user_avatar{
                width: 30px;
                height: 30px;
            }
            .user_arrow{
                color: #fff;
            }
        }
        @media screen and (max-width: 768px) {
            .navbar-header{
                padding-left: 20px;
                padding-right: 20px;

                .navbar-toggle{
                    display: inline-block;
                }
            }
            .navbar-header:after{
                content: '';
                position: absolute;
                bottom: 0;
                left: -50%;
                display: block;
                width: 200%;
                height: 1px;
                background-color: #fff;
                transform: scale(0.5);
            }
            .admin-nav{
                padding-left: 10px;
                padding-right: 10px;
                float: none;
            }
        }
    }
</style>
