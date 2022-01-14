<template>
  <div>
    <el-form class="fund-options" :inline="true">
      <el-form-item label="筛选">
        <el-date-picker
          v-model="timeFilterDate"
          type="daterange"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-button type="primary" @click="filterDate">查询</el-button>
      <el-button class="add-btn" type="primary" @click="handleAdd">添加</el-button>
    </el-form>

    <div class="table-wrapper">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="index" align="center" label="序号" width="100" />
        <el-table-column prop="date" align="center" label="日期" width="100" />
        <el-table-column prop="type" align="center" label="类型" width="100" />
        <el-table-column prop="describe" align="center" label="描述" />
        <el-table-column prop="income" align="center" label="支出" />
        <el-table-column prop="expend" align="center" label="收入" />
        <el-table-column prop="cash" align="center" label="现金" />
        <el-table-column prop="remark" align="center" label="备注" />
        <el-table-column label="Operations" align="center">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm
              confirm-button-text="成"
              cancel-button-text="去你丫的"
              icon="el-icon-info"
              icon-color="red"
              title="确认要删除该条目吗"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="pagenations"
        :currentPage.sync="pagenations.index"
        :page-sizes="pagenations.sizes"
        :page-size="pagenations.size"
        :layout="pagenations.layout"
        :total="pagenations.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <!-- 【添加 / 编辑】 对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="isAdd ? '添加条目' : '编辑条目'"
      width="500px"
      :before-close="handleClose"
    >
      <el-form
        class="fund-form"
        :rules="fundFormRules"
        :model="fundFormData"
        ref="fundFormRef"
        label-width="70px"
        label-position="left"
      >
        <el-form-item label="类型" prop="type">
          <el-select v-model="fundFormData.type" placeholder="选择资金类型">
            <el-option
              v-for="item in fundTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收入" prop="income">
          <el-input-number v-model.number="fundFormData.income" :min="0" :max="99999" />
        </el-form-item>
        <el-form-item label="支出" prop="expend">
          <el-input-number v-model.number="fundFormData.expend" :min="0" :max="99999" />
        </el-form-item>
        <el-form-item label="资金" prop="cash">
          <el-input-number v-model.number="fundFormData.cash" :min="0" :max="10" />
        </el-form-item>
        <el-form-item label="描述" prop="describe">
          <el-input type="textarea" v-model.trim="fundFormData.describe"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model.trim="fundFormData.remark"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button v-if="isAdd" type="primary" @click="confirmAdd">添加</el-button>
          <el-button v-else type="primary" @click="confirmEdit">编辑</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  data() {
    const fundFormRules = {
      type: {
        required: true,
        message: '类型不能为空',
      },
      income: {
        required: true,
        message: '收入不能为空',
      },
      expend: {
        required: true,
        message: '支出不能为空',
      },
      cash: {
        required: true,
        message: '账户现金不能为空',
      },
      describe: {
        required: true,
        message: '描述不能为空',
      },
    }
    return {
      isAdd: false,

      timeFilterDate: '',
      // 渲染table
      tableData: [],
      allTableData: [],
      // 添加条目弹窗控制
      dialogVisible: false,
      fundFormData: {
        type: '',
        income: 0,
        expend: 0,
        cash: 0,
        descript: '',
        remark: '',
      },
      fundFormRules,
      fundTypeOptions: [
        {
          value: '生活必需',
          label: '生活必需',
        },
        {
          value: '娱乐开销',
          label: '娱乐开销',
        },
        {
          value: '学习提高',
          label: '学习提高',
        },
        {
          value: '其他',
          label: '其他',
        },
      ],
      pagenations: {
        index: 1,
        sizes: [5, 10, 15, 20],
        size: 10,
        total: 0,
        layout: 'total, sizes, prev, pager, next, jumper',
      },
    }
  },
  methods: {
    filterDate() {
      const startDate = new Date(this.timeFilterDate[0]).getTime()
      const endDate = new Date(this.timeFilterDate[1]).getTime()
      this.tableData = this.allTableData.filter(({ date }) => {
        date = new Date(date).getTime()
        console.log(startDate, endDate, date)
        return startDate < date && date < endDate
      })
      this.pagenations.total = this.tableData
      this.handleSizeChange(this.pagenations.sizes)
    },
    handleSizeChange(size) {
      this.pagenations.size = size
      let currentPageIndexBase = (this.pagenations.index - 1) * this.pagenations.size
      this.pagenations.total = this.allTableData.length
      if (currentPageIndexBase > this.pagenations.total) {
        this.pagenations.index = parseInt((this.pagenations.total - 1) / this.pagenations.size) + 1
        currentPageIndexBase = this.pagenations.index * (this.pagenations.size - 1)
      }
      this.handleCurrentChange(this.pagenations.index)
    },
    handleCurrentChange(index) {
      this.pagenations.index = index
      const currentPageIndexBase = (this.pagenations.index - 1) * this.pagenations.size
      this.tableData = this.allTableData.filter((itm, idx) => {
        idx += 1
        return currentPageIndexBase < idx && idx <= currentPageIndexBase + this.pagenations.size
      })
    },
    handleEdit(item) {
      this.isAdd = false
      this.dialogVisible = true
      this.fundFormData = item
    },
    handleDelete(item) {
      console.log('delete', item)
      this.$http.get('api/profiles/delete/' + item._id).then((res) => {
        if (res.status === 200) {
          this.getTableData()
        }
      })
    },
    handleAdd() {
      this.isAdd = true
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.$refs.fundFormRef.resetFields()
    },
    confirmAdd() {
      this.$refs.fundFormRef.validate((isPass) => {
        if (isPass) {
          this.$http.post('/api/profiles/add', this.fundFormData).then((res) => {
            if (res.status === 200) {
              this.dialogVisible = false
              this.getTableData()
            }
          })
        }
      })
    },
    confirmEdit() {
      this.$refs.fundFormRef.validate((isPass) => {
        if (isPass) {
          this.$http
            .post('/api/profiles/edit/' + this.fundFormData._id, this.fundFormData)
            .then((res) => {
              if (res.status === 200) {
                this.dialogVisible = false
                this.getTableData()
              }
            })
        }
      })
    },
    getTableData() {
      this.$http.get('/api/profiles').then((res) => {
        console.log(res.data)
        this.allTableData = res.data
        this.allTableData.forEach((itm) => {
          itm.date = new Date(itm.date).toLocaleDateString()
        })
        this.handleSizeChange(this.pagenations.size)
      })
    },
  },
  mounted() {
    this.getTableData()
  },
})
</script>

<style lang="scss" scoped>
.fund-options {
  padding: 0 30px;
}
.add-btn {
  float: right;
}
.fund-form {
  .el-select,
  .el-input-number {
    width: 100%;
  }
}
.pagenations {
  margin-top: 20px;
  text-align: right;
}
</style>
