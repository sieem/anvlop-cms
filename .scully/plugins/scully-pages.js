const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');

const Pages = 'pages';

const pagesPlugin = async (route, config) => {
    const pages = await httpGetJson(config.url);
    const { createPath } = routeSplit(route);
    const handledRoutes = [];
    for (let page of pages) {
        handledRoutes.push({
            route: createPath(page.slug)
        });
    }
    return handledRoutes;
};

const pagesPluginValidator = async conf => [];

registerPlugin('router', Pages, pagesPlugin, pagesPluginValidator);
exports.Pages = Pages;
