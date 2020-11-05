<template>
  <div class='purview'>
    <!--列表--START-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-for="(th, th_key) in tableTitle"
                       :label="th.label"
                       :key="th_key"
                       :prop="th.name"></el-table-column>

      <el-table-column label="角色权限">
        <template slot-scope="scope">
          <el-tag v-for="(item, key) in scope.row.rolePermissions" :key="key">{{item.label}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleTableAdd(scope.$index, scope.row)">增加</el-button>

          <el-button size="mini" @click="handleTableEdit(scope.$index, scope.row)">修改</el-button>

          <el-button size="mini" type="danger" @click="handleTableDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--列表--END-->

    <!--弹出层--START-->
    <el-dialog :title="dialogTable.title" :visible.sync="dialogTable.visible">
      <el-table :data="dialogTable.tableData">
        <el-table-column label="父权限">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.check">{{scope.row.label}}</el-checkbox>
          </template>
        </el-table-column>

        <el-table-column label="子权限">
          <template slot-scope="scope">
            <el-checkbox v-for="(item, key) in scope.row.children" :key="key" v-model="item.check">{{item.label}}
            </el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--弹出层--END-->
  </div>
</template>

<script>
  // 模拟表格标题
  const mockTableTitle = [
    {id: 1, label: '角色名称', name: 'roleName'},
    // {id:2, label:'角色描述', name:'roleDescription'},
    // {id:3, label:'角色权限', name:'rolePermissions'}
  ]
  // 当前用户所以的权限
  const userRolePermissions = [
    {
      id: 1, label: 'A级权限',
      children: [
        {id: 'A1', label: 'A级用户新增',},
        {id: 'A2', label: 'A级用户修改',},
        {id: 'A3', label: 'A级用户删除',}
      ]
    }, {
      id: 2, label: 'B级权限',
      children: [
        {id: 'B1', label: 'B级用户新增',},
        {id: 'B2', label: 'B级用户修改',},
        {id: 'B3', label: 'B级用户删除',}
      ]
    }, {
      id: 3, label: 'C级权限',
      children: [
        {id: 'C1', label: 'C级用户新增',},
        {id: 'C2', label: 'C级用户修改',},
        {id: 'C3', label: 'C级用户删除',}
      ]
    }
  ]
  // 模拟表格数据
  const mockTableData = [
    {
      roleName: '普通管理员',
      id: 1,
      roleDescription: '',
      rolePermissions: [
        {id: 'C1', parentID: 3, label: 'C级用户新增'},
        {id: 'C2', parentID: 3, label: 'C级用户修改'},
      ]
    },
    {
      roleName: '超级管理员',
      id: 2,
      roleDescription: '',
      rolePermissions: [
        {id: 'B1', parentID: 2, label: 'B级用户新增'},
        {id: 'B2', parentID: 2, label: 'B级用户修改'},
        {id: 'B3', parentID: 2, label: 'B级用户删除'},
        {id: 'C1', parentID: 3, label: 'C级用户新增'},
        {id: 'C2', parentID: 3, label: 'C级用户修改'},
        {id: 'C3', parentID: 3, label: 'C级用户删除'}
      ]
    }
  ]

  import {mapState} from 'vuex'

  export default {
    name: 'purview',
    title: '权限',
    inject: ['reload'],
    components: {},
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      })
    },
    props: {
      Data: {
        type: Object,
        twoWay: true,
        default: () => ({})
      }
    },
    data() {
      return {
        tableTitle: mockTableTitle,
        tableData: mockTableData,
        dialogTable: {
          title: '',
          visible: false,
          tableData: userRolePermissions
        }
      }
    },
    updated() {
    },
    mounted() {
    },
    methods: {
      // 处理表格添加
      handleTableAdd(index, item) {

      },
      // 处理表格编辑
      handleTableEdit(index, item) {
        let vue = this;
        let permissionsList = [];

        // 获取全部权限接口数据
        for (let i in vue.dialogTable.tableData) {
          // 全部权限接口单例
          let allItem = vue.dialogTable.tableData[i];
          let roleItemList = [];

          let roleItemChecket = false;
          //  全部权限接口字类权限数据
          for (let j in allItem.children) {
            let allChildrenItem = allItem.children[j];

            let roleOBJ = {}
            roleOBJ = {
              id: allChildrenItem.id,
              label: allChildrenItem.label,
              check: false
            }
            // 当前角色权限数据

            for (let k in item.rolePermissions) {
              // 当前角色权限单例
              let roleItem = item.rolePermissions[k];
              if (roleItem.id === allChildrenItem.id) {
                roleOBJ.check = true
                roleOBJ.parentID = roleItem.parentID;
              }
            }

            roleItemList.push(roleOBJ);
          }

          let roleItemOBJ = {
            id: allItem.id,
            checked:roleItemChecket,
            label: allItem.label,
            children: roleItemList
          }
          // 权限列表（最终的数据模型）
          permissionsList.push(roleItemOBJ)
        }

        vue.dialogTable.title = '编辑权限' + ' ( ' + item.roleName + ' ) ';
        vue.dialogTable.visible = true;
        vue.dialogTable.tableData = permissionsList
      },
      // 处理表格删除
      handleTableDelete(index, item) {
      },
    },
    watch: {},
    destroyed() {
    }
  }
</script>

<style scoped lang="less">
</style>
