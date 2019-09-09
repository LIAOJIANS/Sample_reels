<template>
  <div class="work">
    <div class="content">
      <div class="left">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
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
        </el-menu>
      </div>
      <el-row class="box">
        <el-col class="box_son" :span="8" v-for="(o, index) in data" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-popover
              placement="left"
              :title="o.title"
              width="200"
              trigger="hover"
              :content="o.content">
              <img  slot="reference" @click="showLeft(o)" src="../assets/images/LIAOJIANS.png" class="image">
            </el-popover>
            <div style="padding: 14px;">
              <span>{{ o.title }}</span>
              <div class="bottom clearfix">
                <time class="time">
                  <el-rate
                    v-model="value">
                  </el-rate>
                </time>
                <el-tooltip class="item" effect="dark" content="点击跳转至该项目" placement="right">
                  <el-button type="text" class="button" @click="src(o.src)">操作按钮</el-button>
                </el-tooltip>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-drawer
      :title="content.title"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleCloseLeft">
      <span>{{ content.content }}</span>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        value: null,
        isCollapse: true,
        data: [
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
          }
        ],
        content: {
        }
      };
    },
    mounted() {
      this.open1()
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
    }
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
  }
  .box {

    width: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .box_son {
    margin-top: 30px;
    margin-left: 5%;
    width: 25%;
  }
  .box_son img {
    cursor: pointer;
  }
  .box_son:nth-of-type(1),
  .box_son:nth-of-type(1+n*3) {
    margin-left: 0;
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
