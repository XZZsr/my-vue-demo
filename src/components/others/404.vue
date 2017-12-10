<template>
    <div class="error-screen">
        <el-card class="box-card">
            <el-row>
                <div class="warn">
                    <div class="title">
                        <my-icon name="404"></my-icon>
                    </div>
                    <div class="sub">对不起，您访问的页面弄丢了</div>
                    <div class="step-title">您可以采取以下措施</div>
                    <ul class="step">
                        <li>
                            <my-icon name="cue"></my-icon>
                            检查链接是否错误
                        </li>
                        <li>
                            <my-icon name="cue"></my-icon>
                            <a href="#">联系我们</a>
                        </li>
                    </ul>
                </div>
            </el-row>
            <el-row>
                <div class="control">
                    <el-button @click="back">返回上一页</el-button>
                    <el-button type="primary" @click="linkIndex">前往首页</el-button>
                </div>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    
	export default {
        methods:{
            back(){
                this.$router.go(-2)
            },
            linkIndex(){
                this.$router.push({name:'demo.demo1'})
            }
        }
    }
</script>
<style lang="scss">
    .error-screen{
        .box-card{
            padding: 20px;
            background-color: #f5f5f5;

            .warn{
                .title{
                    
                }
                .sub{
                    line-height: 36px;
                    font-size: 21px;
                    font-weight: lighter;
                }
                .step-title{
                    margin: 20px 0;
                }
                .step{

                    li{
                        line-height: 32px;
                        img{
                            position: relative;
                            top: 3px;
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                        }
                    }  
                }
            }
            .control{
                text-align: center;
            }
        }
    }
</style>
