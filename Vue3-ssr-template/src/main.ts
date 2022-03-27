import { createSSRApp } from "vue";
import { createRouter } from "./router";
import { createStore, key } from "./store";
import { RouteRecordNormalized } from "vue-router";
import App from "./pages/Index.vue";
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import mitt from "mitt";

export function createApp() {
  const vueEvent = mitt();
  const app = createSSRApp(App);
  app.use(ElementPlus);
  app.config.globalProperties.vueEvent = vueEvent;
  const router = createRouter();
  const { store } = createStore();

  router.beforeResolve(async (to, from) => {
    let toMatchedComponents = getMatchedComponents(to.matched);
    let fromMatchedComponents = getMatchedComponents(from.matched);

    // 优化过滤
    let isSameCompoent = false;
    let components = toMatchedComponents.filter((compnent, index) => {
      return isSameCompoent || (isSameCompoent = fromMatchedComponents[index] !== compnent);
    });

    // 需要执行async的组件
    components.length &&
      (await Promise.allSettled(
        components.map((component) => {
          // @ts-ignore
          if (component.asyncData) {
            // @ts-ignore
            return component.asyncData({ store, route: to });
          }
        })
      ));
  });

  app.use(store, key);
  // app.use(store);
  app.use(router);
  return { app, router, store };
}

function getMatchedComponents(list: RouteRecordNormalized[]) {
  return list.map(({ components }) => {
    return components.default;
  });
}

