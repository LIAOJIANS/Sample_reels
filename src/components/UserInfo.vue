<template>
    <div class="User">
      <div class="top">
        <div class="top_img">
          <img src="../assets/images/tx.jpg" alt="">
        </div>
        <div class="userInfo">
          <div class="username">
            <p>廖建山</p>
          </div>
          <div class="info">
            <ul>
              <li>现住广州</li>
              <li>暂无经验</li>
              <li>男</li>
              <li>21(1998/04/20)</li>
              <li>目前正在找工作</li>
            </ul>
          </div>
          <div class="tel">
            <div class="eaml">
              <span class="el-icon-message"></span>
              <span>shanjian_liao@163.com</span>
            </div>
            <div class="telInfo">
              <span class="el-icon-phone-outline"></span>
              <span>13428052268</span>
            </div>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="workF">
        <p>
          <span class="el-icon-s-marketing"></span>
          求职意向
        </p>
        <div class="workInfo">
          <div class="ye">
            <label for="">
              期望薪资
              <span>
              ： 4-5万元/年
            </span>
            </label>
            <label for="">
              地&nbsp;&nbsp;&nbsp;&nbsp;点
              <span>
              ： 广州
            </span>
            </label>
            <label for="">
              职能/职位
              <span>
              ： Web前端开发  web前端工程师
            </span>
            </label>
            <label for="">
              行&nbsp;&nbsp;&nbsp;&nbsp;业
              <span>
              ： 计算机软件
            </span>
            </label>
            <label for="">
              个人标签
              <span>
              ： 压力就是动力
            </span>
            </label>
          </div>
          <div class="none">
            <label for="">
              自我评价
              <span>：
                本人对前端开发工作有极大的热情、学习能力强、善于沟通、责任感强且拥有良好的团队协作精神，拥有很好的承受压力的能力、不怕吃苦、适应力强，吸收新知识快，勇于迎接新挑战。
                有相关的工作流程经验，熟练用HTML、CSS、CSS预处理（less、sass）、JavaScript、ES6、插件、JQ、VUE全家桶（vue-router、vuex、webpack等等）、React全家桶（Redux、React-Router、webpack等等）微信小程序、以及各种UI组件如MintUI、muiUI、ElementUI、Ant-Mobile、bootstrap等等。
              </span>
            </label>
            <label for="">
              工作类型
              <span>
              ：实习
            </span>
            </label>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .User {
    width: 100%;
    padding: 10px;
  }
  .top {
    display: flex;
  }
  .top_img> img {
    max-width: 90px;
    max-height: 104px;
  }
  .userInfo {
    width: 100%;
    color: #333;
    padding-left: 20px;
  }
  .userInfo .username > p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
    height: 30px;
    line-height: 30px;
  }
  .info > ul {
    display: flex;
  }
  .info > ul > li {
    padding: 0 10px;
    border-right: 2px solid #333;
  }
  .info > ul > li:nth-of-type(1) {
    padding-left: 0;
  }
  .info > ul > li:last-child {
    border: none;
  }
  .tel {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    display: flex;
  }
  .tel > div {
    width: 50%;
  }
  .workF > p {
    font-size: 18px;
    color: #ff6000;
    display: flex;
    align-items: center;
  }
  .workF > p > span {
    margin-right: 10px;
    font-size: 18px;
  }
  .workF .workInfo {
    margin-top: 30px;
    padding: 0 10px;
  }
  .workF .workInfo .ye {
    display: flex;
    flex-wrap: wrap;
  }
  .workF .workInfo .ye > label {
    display: block;
    width: 50%;
    line-height: 30px;
  }
  .workF .workInfo .none > label {
    display: block;
    line-height: 30px;
  }
</style>
