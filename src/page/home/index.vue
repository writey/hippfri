<template>
  <div class="warp">
    <el-container>
      <el-header></el-header>
      <el-main>
        <el-tabs type="card" v-model="activeName" >
          <el-tab-pane label="分类" name="type">
            <el-row>
              科目：
              <el-select v-model="selectSubject" @change="subjectChanged" placeholder="请选择">
                <el-option
                  v-for="item in subject"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-row>
            <el-row>
              分类：
              <el-select v-model="selectType" placeholder="请选择">
                <el-option
                  v-for="item in type"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-row>
            <el-row>
              题数：<el-input-number size="medium" v-model="number" :min="10" :max="100" label="题数"></el-input-number>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="题库" name="library">
            <el-row>
              名称：
                <el-select v-model="selectLibrary" filterable placeholder="请选择">
                  <el-option
                    v-for="item in library"
                    :key="item.libraryName"
                    :label="item.libraryName"
                    :value="item.libraryName">
                  </el-option>
                </el-select>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        
        <el-button type="primary" @click="start">开始</el-button>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
    <div el-loading="loading"></div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  methods: {
    start() {
      // 初始化数据
      this.initializeData();
      const itemsQuery = new this.$AV.Query('items');
      // 根据科目
      if (this.activeName == 'type') {
        itemsQuery.equalTo('subject', this.selectSubject);
        if (this.selectType != '综合') itemsQuery.equalTo('type', this.selectType);
      } else if (this.activeName == 'library') {
        // 根据题库
        itemsQuery.equalTo('libraryName', this.selectLibrary);
      }
      itemsQuery.find().then(items => {
        if (items.length == 0) return this.$alert('没有找到');
        this.packItemArr(items);
        this.$router.push('item');
      });
    },...mapActions(['packItemArr']),
    ...mapMutations(['initializeData']),
    subjectChanged() {
      // 根据选择的科目查询细分
      this.type = this.subject.find(item => item.name == this.selectSubject).types;
      // 如果分类下没有综合，添加综合
      if (!this.type.includes('综合')) this.type.unshift('综合');
      // 重置选择
      this.selectType = '综合';
    },
  },
  created() {
    // 查询科目
    const subjectQuery = new this.$AV.Query('subject');
    subjectQuery.find().then(items => this.subject = items.map(item => item.attributes));
    // 查询题库
    const libraryQuery = new this.$AV.Query('library');
    libraryQuery.find().then(items => this.library = items.map(item => item.attributes));
  },
  data() {
    return {
      // 科目数组
      subject: [],
      // 选择的科目
      selectSubject: null,
      // 分类数组
      type: [],
      // 选择的分类
      selectType: null,
      // 题数
      number: 10,
      // 刷题方式 分类、题库
      activeName: 'type',
      // 题库数组
      library: ['练习1', '练习2'],
      // 选择的题库
      selectLibrary: null
    }
  }
}
</script>
<style lang="scss" scoped>
  .warp {
    height: 100%;
    padding: 1.5em;
    box-sizing: border-box;
  }
  .el-container {
    height: 100%;
    .el-row {
      margin-bottom: 20px;
    }
  }
</style>