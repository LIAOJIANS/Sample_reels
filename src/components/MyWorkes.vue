<template>
  <div class="work">
    <div class="content">
      <div class="left">
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">个人介绍</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">工作经历</span>
            </template>
            <el-menu-item-group>
              <span slot="title">公司经历</span>
              <el-menu-item index="1-1">待添加</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">项目</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">合作伙伴</span>
          </el-menu-item>
          <el-menu-item index="4" @click="dialogFormVisible = true">
            <i class="el-icon-document"></i>
            <span slot="title">添加项目</span>
          </el-menu-item>
        </el-menu>
      </div>
      <transition name="el-zoom-in-center">
        <div class="swiper-container"  v-show="isShow">
          <div class="swiper-wrapper">
            <el-row class="swiper-slide" v-for="(items, index) in datasArr" :key="index">
              <div class="box_son" :span="8" v-for="(item, index) in items" :key="index">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <el-popover
                      :close-delay=50
                      placement="left"
                      :title="item.title"
                      width="200"
                      trigger="hover"
                      :content="item.content">
                      <img  slot="reference" @click="showLeft(item)" src="../assets/images/LIAOJIANS.png" class="image">
                    </el-popover>
                    <div style="padding: 14px;">
                      <span>{{ item.title }}</span>
                      <div class="bottom clearfix">
                        <time class="time">
                          <el-rate
                            v-model="value">
                          </el-rate>
                        </time>
                        <el-tooltip class="item" effect="dark" content="点击跳转至该项目" placement="right">
                          <el-button type="text" class="button" @click="src(item.src)">操作按钮</el-button>
                        </el-tooltip>
                      </div>
                    </div>
                  </el-card>
                </div>
            </el-row>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </transition>
    </div>
    <el-drawer
      :title="content.title"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleCloseLeft">
      <span>{{ content.content }}</span>
    </el-drawer>
    <el-dialog title="添加作品" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作品简介" :label-width="formLabelWidth">
          <el-input v-model="form.info" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作品内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作品链接" :label-width="formLabelWidth">
          <el-input v-model="form.srcs" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作品图片" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="abc/abc"
            :file-list="fileList"
            :http-request="uploadSectionFile"
            :auto-upload="false"
            :limit = 1
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUpload">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import axios from 'axios'
  export default {
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        value: null,
        isCollapse: true,
        isShow: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        fileList: [], // 文件数组
        form: { // 表单数据
          name: '',
          info: '',
          content: '',
          srcs: '',
        },
        formLabelWidth: '120px',
        datas: [

        ],
        content: {
        }
      };
    },
    mounted() {
      this.isShow = true
      this.open1()
      this.datas = [
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: 'https://github.com/LIAOJIANS',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'CNSD博客主页',
          img: '../assets/images/weixin_44014980.png',
          src: 'https://blog.csdn.net/weixin_44014980',
          jianjie: 'CNSD博客主页介绍',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/shan.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        },
        {
          id: 1,
          title: 'GitHub个人主页',
          img: '../assets/images/LIAOJIANS.png',
          src: '',
          jianjie: '个人主页，项目的仓库',
          content: '山山好帅哟'
        }
      ]
    },
    methods: {
      open1() {
        const h = this.$createElement;
        this.$notify({
          title: '欢迎',
          message: h('i', { style: 'color: teal'}, '欢迎您的到来！')
        });
      },
      showLeft(item) {
        this.drawer = true
        this.content = item
      },
      submitUpload() {
        let list = document.getElementsByClassName('el-upload-list__item is-ready')
        if(list.length == 0){
          this.$message({
            type:'warning',
            offset: 50,
            message:"请选择要上传的图片！"
          })
          return
        }
        this.$refs.upload.submit()
        this.dialogFormVisible = false
      },
      async uploadSectionFile(param) {
        let fileObj = param.file
        let filename = new FormData()
        // 获取上传的表单数据
        const form = this.form
        // 在filename的append添加健值方法
        filename.append("file", fileObj)
        filename.append("workName", form.name)
        filename.append("workSrc", form.srcs)
        filename.append("workIntroduction", form.info)
        filename.append("workContent", form.content)
        // 请求报文头
        let headers = {headers: {"Content-Type": "multipart/form-data"}}
        // 发送请求
        await axios.post('http://localhost:4000/addWork', filename, headers).then(res => {
          if (res.data.code === 0) {
              
          }
        })
      },
      src(srcs){
        location.href = srcs // 跳转路径
      },
      handleCloseLeft(done) {
        done();
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      /*
        根据datas数组生成一个二维数组
        小数组中的元素个数最大是8
       */
      datasArr() {
        const { datas } = this
        // 准备二维空数组
        const arr = []
        let minArr = []
        // 遍历datas
        datas.forEach(c => {
          // 如果当前小数组已经满了，创建一个新数组
          if(minArr.length === 8) {
            minArr = []
          }
          // 如果minArr是空的，将小数组保存到大数组中
          if(minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      datas (value) {
        // 界面更新之后立即使用轮播图
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            autoplay: false,
            observeParents: true,
            observer: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        })
      }
    },
  }
</script>

<style>
  .work {
    position: relative;
    padding-top: 100px;
    height: 100%;
  }
  .content {
    display: flex;
    min-width: 1080px;
  }
  .left {
    position: absolute;
  }
  .swiper-pagination {
    width: 100%;
    bottom: 10px;
    left: 0;
  }
  .swiper-pagination > span {
    margin: 0 4px;
  }
  .swiper-pagination  >span.swiper-pagination-bullet-active {
    background-color: #8650d9;
  }
  .swiper-container {
    width: 60%;
    margin: 0 auto;
    height: 100%;
    padding-bottom: 50px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: right;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .box_son {
    margin-top: 30px;
    width: 25%;
    padding-left: 20px;
  }
  .box_son img {
    cursor: pointer;
  }
  .box_son:nth-of-type(1),
  .box_son:nth-of-type(4n + 1) {
    margin-left: -20px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
