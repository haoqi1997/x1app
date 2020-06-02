import { doExec } from './request'

const apiPrefix = window.apiBase
console.log("apiPrefix", apiPrefix)
    //登录管理
export const base = {
    noAuthController: {
        //    首页菜单 资源列表-展示页面菜单显示
        resourceIndex(opts) {
            return doExec(`${apiPrefix}/noAuth/resource/index`, opts, null, 'get')
        },
        // 新增留言
        addleaveWords(opts) {
            return doExec(`${apiPrefix}/noAuth/leavewords`, opts, "json", 'post')
        },
        //    古往今来-查询详情
        beforeOrSince(id, opts) {
            return doExec(`${apiPrefix}/noAuth/beforeOrSince/${id}`, opts, null, 'get')
        },
        //    美术馆-查询详情
        exhibition(id, opts) {
            return doExec(`${apiPrefix}/noAuth/exhibition/${id}`, opts, null, 'get')
        },
        //    净慈动态-查询详情
        happening(id, opts) {
            return doExec(`${apiPrefix}/noAuth/happening/${id}`, opts, null, 'get')
        },
        // 祖师法嗣-查询详情
        noAuth(id, opts) {
            return doExec(`${apiPrefix}/noAuth/${id}`, opts, null, 'get')
        },
        //首页管理-查询详情
        noAuthIndex(opts) {
            return doExec(`${apiPrefix}/noAuth/index`, opts, null, 'get')
        },
        // 祖祖师法嗣-根据条件查询全部祖师或法嗣
        noAuthMasterAll(id, opts) {
            return doExec(`${apiPrefix}/noAuth/master/all/${id}`, opts, null, 'get')
        },
        // /noAuth/conditions
        // 祖师法嗣-条件查询
        noAuthConditions(opts) {
            return doExec(`${apiPrefix}/noAuth/conditions`, opts, "json", 'post')
        },
        //古往今来-条件查询
        noAuthBeforeOrSinceConditions(opts) {
            return doExec(`${apiPrefix}/noAuth/beforeOrSince/conditions`, opts, "json", 'post')
        },
        //南屏妙音-条件查询
        noAuthaudioFileConditions(opts) {
            return doExec(`${apiPrefix}/noAuth/audioFile/conditions`, opts, "json", 'post')
        },
        //美术馆-条件查询 分页
        noAuthExhibitionConditions(opts) {
            return doExec(`${apiPrefix}/noAuth/exhibition/conditions`, opts, "json", 'post')
        },
        //净慈动态-条件查询
        noAuthhappeningConditions(opts) {
            return doExec(`${apiPrefix}/noAuth/happening/conditions`, opts, "json", 'post')
        },
        //   资源列表-根据父级ID子集菜单
        noAuthresource(opts) {
            return doExec(`${apiPrefix}/noAuth/resource`, opts, "json", 'post')
        },
    },




}