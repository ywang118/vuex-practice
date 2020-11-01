export default {
    buyVip({commit},e){
        return new Promise((resolve)=> {
            //mock api 交互
            setTimeout(()=>{
                commit('setMemberInfo',{
                    userStatus: e.userStatus,
                    vipLevel: e.vipLevel
                })
                resolve('购买成功')
            },1000)
        })
    },
    getFreeVip({commit,state}){
        return new Promise((resolve)=> {
            setTimeout(()=>{
                if(state.userStatus === 0){
                    commit('setMemberInfo',{
                        userStatus: 1,
                        vipLevel:0
                    })
                    resolve('分享成功，您已获得一个月的高级vip会员')
                } else {
                    resolve("分享成功")
                }
            },1000)
        })
    }
}