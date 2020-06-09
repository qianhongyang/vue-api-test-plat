import Mock from 'mockjs'
import Login from "./login"
import Project from "./projects"
import Modules from "./modules"

//mock可以用mock模块内置的语法糖方法比如以下
// const data = {
//     "id": "@guid", 生成uuid
//     "name": "@cname", 生成随机的名字
// };

Mock.mock('https://127.0.1/api/login', 'post', () => {
    return Login.page1
});
Mock.mock('https://127.0.1/api/projects_list', 'post', () => {
    return Project.projects_list
});
Mock.mock('https://127.0.1/api/modules_list', 'post', () => {
    return Modules.modules_list
});
export default Mock;