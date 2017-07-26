<template>
    <div>
        <el-row>
            <my-back title="新建项目"></my-back>
        </el-row>
        <el-row>
            <div class="edit-form">
                <el-form label-width="100px" ref="form" :model="form" :rules="rules">
                    <el-form-item label="项目名称" prop="name">
                        <el-input v-model="form.name"  placeholder="请输入项目名称"></el-input>
                    </el-form-item>
                    <el-form-item label="Url" prop="url">
                        <el-input v-model="form.url" placeholder="请输入url"></el-input>
                    </el-form-item>
                    <el-form-item label="Logo">
                        <el-upload
                            class="upload-demo"
                            action="admin_api/upload/logo"
                            :file-list="fileList"
                            :on-change="setLogoPath"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="接口通知Url" prop="notify_url">
                        <el-input v-model="form.notify_url"  placeholder="请输入接口通知url"></el-input>
                    </el-form-item>
                    <el-form-item label="项目描述">
                        <el-input type="textarea" placeholder="请描述项目" :rows="2" v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员" prop="admin_id">
                        <!--
                        <el-cascader
                        :options="cascaderData"
                        :props="defaultProps"
                        :show-all-levels="false"
                        @change="changeAdmin"
                        placeholder="请选择管理员">
                        </el-cascader>-->
                        <el-select v-model="form.admin_id">
                            <el-option v-for="item in admin_roles" :key="item.id" :value="item.id" :label="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item  class="form-submit">
                        <el-button type="primary" @click="submit">确定</el-button>
                        <el-button @click="onCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: mapGetters({
            form: 'projects/item',
            rules: 'projects/rules',
            admin_roles: 'projects/admin_roles',
            logo_url: 'projects/logo_url',
        }),
        data(){
            return {
                fileList: []
            }
        },
        mounted(){
            this.$store.commit('projects/resetItem')
        },
        methods:{
            onCancel(){
                this.$router.push({name: 'projects.index'})
            },
            setLogoPath(file,fileList){
                this.fileList=[]
				let name=file.name
				let url= file.url
				let obj={
					name: name,
					url: url
				}
				this.fileList.push(obj)
				this.form.logo=file.url
            },
            submit(){
                let that = this
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('projects/store',this.form).then(res=>{
                            that.$router.go(-1)
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>