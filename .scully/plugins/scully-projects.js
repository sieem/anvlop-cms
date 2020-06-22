const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');

const Projects = 'projects';

const projectsPlugin = async (route, config) => {
    const projects = await httpGetJson(config.url);
    const { createPath } = routeSplit(route);
    const handledRoutes = [];
    for (let project of projects) {
        handledRoutes.push({
            route: createPath(project.slug)
        });
    }
    return handledRoutes;
};

const projectsPluginValidator = async conf => [];

registerPlugin('router', Projects, projectsPlugin, projectsPluginValidator);
exports.Projects = Projects;
