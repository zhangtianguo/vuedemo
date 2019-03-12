// 同步操作  所有组件去引用state对象下的数据 被同步更新到所有视图
export default {
    init(state){
        if(localStorage.userInfo){
            state.userInfo = localStorage.userInfo
        }
    },
    updateUserInfo(state, data){
        console.log(data)
        state.userInfo = data
        // localStorage.setItem('userInfo', data)
        localStorage.userInfo = data

    },
    updateUserInfo2(state, data){
        state.userInfo2 = data
    },
}