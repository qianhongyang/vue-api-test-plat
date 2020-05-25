import Mock from 'mockjs'
import Login from "./login"


// const data = {
//     "id": "@guid",
//     "name": "@cname",
// };

Mock.mock('https://127.0.1/api/login', 'post', () => {
    return Login.page1
});

export default Mock;