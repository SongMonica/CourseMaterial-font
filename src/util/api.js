import api from './http.js'
export default {
    userLogin(params) {
        return api.post('/login', params).then(res => res.data)
    },
    userRegister(params) {
        return api.post('/register', params).then(res => res.data)
    },
    // 获取所有已发布的课程
    findAllCourse(params) {
        return api.post('/course/findAllCourseIspublish', params).then(res => res.data)
    },
    // 获取课程通过课程ID
    getCourseById(params) {
        return api.post('/course/findCourseByParams', params).then(res => res.data)
    },
    // 获取资源
    findAllResources(params) {
        return api.post('/course/findallresource', params).then(res => res.data)
    },
    // 查找在线测试通过课程ID
    findOnlineTest(params) {
        return api.post('/onlineTest/findAllonlineTest', params).then(res => res.data)
    },
    // 查找在线测试通过ID
    getOnlineTesById(params) {
        return api.post('/onlineTest/getOnlineTestById', params).then(res => res.data)
    },
}