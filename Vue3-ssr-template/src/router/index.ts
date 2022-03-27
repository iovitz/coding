import {
  createWebHistory,
  createRouter as _createRouter,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

const commonKeyWordsAndDesc = {
  keywords: '装配式,BIM设计,构件,建筑,结构,建筑设计,平面,结构设计,户型',
  description: '深圳市⼤乐装是装配式建筑科技公司，通过“云设计系统+云工厂平台”打造装配式建筑设计、构件生产、物流交付的一站式平台，致力成为装配式行业“产业路由器”。作为腾讯、BAI 、钟鼎等资本的被投方，截至2021年8月,公司累计完成三轮共计数亿元融资。',
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue'),
    meta: {
      title: '1',
      content: commonKeyWordsAndDesc
    }
  },
  {
    path: '/index',
    redirect: '/',
  }
];

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
