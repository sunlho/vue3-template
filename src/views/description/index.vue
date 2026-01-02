<script lang="ts" setup>
import { Descriptions, DescriptionItem } from "@/components/Descriptions"
import {} from "vue"
</script>

<template>
  <div class="des-wrap">
    <div class="des-content p-20px">
      <div class="pb-10px">自适应描述列表组件</div>
      <Descriptions :column="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }" :label-text-num="4">
        <DescriptionItem label="姓名">张三</DescriptionItem>
        <DescriptionItem label="年龄">18</DescriptionItem>
        <DescriptionItem label="性别">男</DescriptionItem>
        <DescriptionItem label="地址" :span="2">北京市朝阳区XX大街XX号院XX栋XX单元XX室</DescriptionItem>
        <DescriptionItem label="个人简介" span="full">
          张三，男，18岁，北京市朝阳区人。现就读于北京某某大学计算机科学与技术专业，大一在读。兴趣爱好广泛，喜欢编程、阅读和旅行。性格开朗，乐于助人，积极参与各种社团活动和志愿服务工作。未来希望能够在软件开发领域有所作为，为社会创造更多价值。
        </DescriptionItem>
      </Descriptions>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
