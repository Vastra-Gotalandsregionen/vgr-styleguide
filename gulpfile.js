const gulp = require('gulp')
const spacecraft = require('spacecraft')

const config = require('./config')
const tasks = require('./tasks')

spacecraft.extendConfig(config);
spacecraft.extendTasks(gulp, tasks);
