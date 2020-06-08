import Mock from 'mockjs'
import Login from "./login"
import Project from "./projects"


// const data = {
//     "id": "@guid",
//     "name": "@cname",
// };

Mock.mock('https://127.0.1/api/login', 'post', () => {
    return Login.page1
});
Mock.mock('https://127.0.1/api/projects_list', 'post', () => {
    return Project.projects_list
});
export default Mock;