<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <Input placeholder="根据项目名称查询" style="width: auto"/>
      <Button type="success" style="margin-left: 5px">search</Button>
      <Button type="success" style="margin-left: 5px">新建项目</Button><br>
    </div>
    <router-view></router-view>
  </div>
</template>
