const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const app = express();
const compiler = webpack(config);

const dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true
}));

app.listen(8080, () => {
  console.log(`Server up on port 8080`);
});
