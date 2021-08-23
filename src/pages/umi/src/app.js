// export function patchRoutes({ routes }) {
//     console.log(routes)
// routes.unshift({
//     path: '/foo',
//     exact: true,
//     component: require('./_pages/foo').default
// })
// }

let extraRouter = [];

export function render(oldRouter) {
  fetch("/api/routes")
    .then(res => res.json())
    .then(routesConfig => {
      extraRouter = routesConfig.map(item => {
        const { path } = item;
        let { component } = item;
        component = require(`./_pages/${component}`).default;
        return { component, path };
      });
      extraRouter.unshift({
        path: "/foo",
        exact: true,
        component: require(`./_pages/foo`).default,
      });
      oldRouter();
    });
}

export function modifyClientRenderOpts(opts) {
  opts.routes.unshift(...extraRouter);
  console.log(opts);
  return opts;
}
