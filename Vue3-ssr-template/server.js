const fs = require("fs");
const path = require("path");
const express = require("express");
const resolve = (p) => path.resolve(__dirname, p);

async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === "production") {
  const app = express();
  let vite;
  if (isProd) {
    // 生产环境
    app.use(require("compression")());
    app.use(
      require("serve-static")(resolve("dist/client"), {
        index: false,
      })
    );
  } else {
    // 开发
    let { createServer: _createServer } = require("vite");
    vite = await _createServer({
      root,
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
    });
    app.use(vite.middlewares);
  }

  // 模版
  const indexHtml = isProd ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8") : "";
  // 映射文件
  const manifest = isProd ? require("./dist/client/ssr-manifest.json") : {};

  app.use("*", async (req, res) => {
    const { originalUrl: url } = req;
    try {
      let template, render;
      if (isProd) {
        // 生产环境
        template = indexHtml;
        render = require("./dist/server/entry-server.js").render;
      } else {
        // 开发环境
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
      }

      let { html, preloadLinks, stateStr } = await render(url, manifest);
      // 对html模板中的内容进行替换
      html = template
        .replace(`<!--app-preload-links-ssr-->`, preloadLinks)
        .replace(
          `<!--app-script-ssr-->`,
          `<script type="application/javascript">window.__IS_FROM_SSR__=true;window.__INITIAL_STATE__=${stateStr}</script>`
        )
        // 用于客户端标记服务器渲染
        .replace(`<!--app-html-ssr-->`, html);
      // 响应
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      // 如果出错
      isProd || vite.ssrFixStacktrace(e);
      console.error(`[error]`, e.stack);
      // 向浏览器返回出错信息
      res.status(500).end(e.stack);
    }
  });
  return { app };
}

// 创建服务
createServer().then(({ app }) => {
  app.listen(3332, () => {
    console.log("[server] http://localhost:3332");
  });
});
