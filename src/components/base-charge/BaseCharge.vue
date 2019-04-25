<template>
  <div class="app-container">
    <div>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/api/baseCharge/excelImport"
        :multiple="false"
        accept=".xls,.xlsx"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit="1"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
      </el-upload>
    </div>
    <div>
      <el-button size="small" type="primary" @click="getAllBaseCharge">查询</el-button>
      <el-table :data="list" v-loading.table="listLoading" element-loading-text="Loading" fit
                :row-class-name="tableRowClassName" style="width: 100%;border: 1px solid #ebeef5;">
        <el-table-column label="省" prop="province">
        </el-table-column>
        <el-table-column label="市" prop="city">
        </el-table-column>
        <el-table-column label="区" prop="area">
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
// import { excelImport, getAllBaseCharge } from '@/api/api'
import { getAllBaseCharge } from '@/api/api'

export default {
  name: 'BaseCharge',
  data () {
    return {
      msg: '查询',
      file: null,
      formData: null,
      listLoading: false,
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
    handlePreview (file) {
      console.log(file)
      this.file = file
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    submitUpload () {
      console.log('submitUpload')
      this.$refs.upload.submit()
    },
    getAllBaseCharge () {
      this.listLoading = true
      console.log('getAllBaseCharge')
      getAllBaseCharge(this.currentPage).then((response = {}) => {
        this.list = response.list || []
        this.totalPage = parseInt(response.totalPage || 0)
        this.listLoading = false
      })
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'odd-row'
      } else {
        return 'even-row'
      }
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
