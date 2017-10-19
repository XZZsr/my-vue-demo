<template>
    <div class="help-files-index">
        <el-row>
            <my-back title="测试页面" url="index"></my-back>
        </el-row>
        <el-row>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">测试列表</span>
                </div>
                <div v-for="item in list" :key="item.id" class="li">
                    <a href="javascript:;" @click="detail(item.id)">{{item.title}}</a>
                </div>
            </el-card>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: {
            ...mapGetters({
                list: 'helpFiles/list',
            }),
        },
        methods:{
            get(){
                this.$store.dispatch('helpFiles/get')
            },
            detail(id){
                this.$router.push({name:'help-files.detail',query:{id}})
            }
        },
        mounted(){
            this.get()
        },
        watch:{
            $route(){
                console.log(this.$route.query)
            }
        }
    }
</script>
<style lang="scss">
    .help-files-index{
        .box-card{
            width: 300px;
        }
        .li{
            line-height: 36px;
        }
        .li:hover{
            a{
                color: #409EFF;
            }
        }
    }
</style>
