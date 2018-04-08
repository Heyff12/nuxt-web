module.exports = {
    // loading: "~/components/loading.vue",
    // loading: false,
    loading: {
        color: "pink",
        height: "5px",
        duration: 6000
    },
    // cache: {
    //     max: 1000,
    //     maxAge: 900000
    // },
    router: {
        // base: "/app/",
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 };
        }
    },
    build: {
        extractCSS: { allChunks: true },
        /*
         ** Run ESLint on save
         */
        // extend (config, { isDev, isClient }) {
        //   if (isDev && isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
        extend(config, ctx) {
            // 遍历nuxt定义的loader配置，向里面添加新的配置。
            //配置less
            const lessssResourcesLoader = {
                loader: "less-loader",
                options: {
                    resources: ["assets/cyc.less"]
                }
            };
            config.module.rules.forEach(rule => {
                if (rule.test.toString() === "/\\.vue$/") {
                    rule.options.loaders.sass.push(lessssResourcesLoader);
                }
                if (["/\\.less$/"].indexOf(rule.test.toString()) !== -1) {
                    rule.use.push(lessssResourcesLoader);
                }
            });
        }
        // bundleRenderer: {
        //     cache: require("lru-cache")({
        //         max: 1000,
        //         maxAge: 1000 * 60 * 15
        //     })
        // }
    }
};