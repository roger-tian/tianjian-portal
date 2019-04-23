<template>
  <div class="app-container">
    <div>
      <el-upload
        class="upload-demo"
        ref="upload"
        action=""
        multiple=false
        accept=".xls,.xlsx"
        :auto-upload="false"
        on-success=""
        on-error="">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
      </el-upload>
    </div>
    <div>
      <el-button size="small" type="primary" @click="getAllBaseCharge">查询</el-button>
      <el-table :data="list" v-loading.table="listLoading" element-loading-text="Loading" fit
                :row-class-name="tableRowClassName" style="width: 100%;border: 1px solid #ebeef5;">
        <el-table-column label="地区" prop="area">
        </el-table-column>
        <el-table-column label="费用" align="center" prop="charge">
        </el-table-column>
      </el-table>
    </div>
    <div style="padding-top: 10px;display: flex;justify-content: flex-end;align-items: center;">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" size="mini" round @click="prePage()" :disabled="canPaging[0]">上一页</el-button>
        <el-button disabled  size="mini" plain>{{currentPage}}/{{totalPage}}</el-button>
        <el-button type="primary" size="mini" round @click="nextPage()" :disabled="canPaging[1]">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import { excelImport, getAllBaseCharge } from '@/api/api'

export default {
  name: 'BaseCharge',
  data () {
    return {
      msg: '查询',
      file: null,
      listLoading: true,
      list: null,
      currentPage: 1,
      totalPage: 1
    }
  },
  computed: {
    canPaging () {
      const temp = [false, false]
      temp[0] = (this.currentPage <= 1)
      temp[1] = (this.currentPage >= this.totalPage)
      return temp
    }
  },
  methods: {
    submitUpload () {
      var formData = new FormData()
      formData.append('file', this.file)
      excelImport(formData).then(response => {
        alert(response)
      })
    },
    getAllBaseCharge () {
      console.log('getAllBaseCharge')
      getAllBaseCharge(this.currentPage).then((response = {}) => {
        this.list = response.list || []
        this.totalPage = parseInt(response.totalPage || 0)
        this.listLoading = false
      })
    },
    prePage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.getAllBaseCharge()
      }
    },
    // 后一页
    nextPage () {
      if (this.currentPage < this.totalPage) {
        this.currentPage++
        this.getAllBaseCharge()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-table>>> .odd-row {
    background: transparent;
  }
  .el-table>>> .even-row {
    background: #f8f8f8;
  }
</style>
