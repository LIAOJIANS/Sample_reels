<template>
    <div>
      <template>
        <el-table
          :data="workList"
          max-height="500"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="_id"
            label="编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="workName"
            label="项目名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="workIntroduction"
            label="简介"
            width="120">
          </el-table-column>
          <el-table-column
            prop="workContent"
            label="内容"
            width="120">
          </el-table-column>
          <el-table-column
            prop="workSrc"
            label="链接"
            width="300">
          </el-table-column>
          <el-table-column
            prop="workImg"
            label="图片"
            width="120">
            <template slot-scope="scope">
              <img :src="scope.row.workImg" width="100" height="100"/>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="updata(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="del(scope.row)"type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

    </div>
</template>

<script>
    import { reqWorkDel } from '../api'
    export default {
        name: "Function",
      props: {
          workList: Array
      },
      methods: {
        updata(sbone) { // 更新成功
          console.log(sbone)
        },
        async del(sbone) {
          const id = sbone._id
          const result = await reqWorkDel({ id })
          console.log(result)
          if (result.code === 0) { // 删除成功
            this.messageBox('success', result.msg)
            location.reload()
          } else {
            this.messageBox('info', result.msg)
          }
        },
        messageBox(type, message) { // 提示函数
          this.$message({
            type: type,
            message: message
          });
        },
      }
    }
</script>

<style scoped>

</style>
