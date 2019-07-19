import * as log4js from 'log4js';
import * as path from 'path';
import * as fs from 'fs';

const levels = {
    trace: log4js.levels.TRACE,
    debug: log4js.levels.DEBUG,
    info: log4js.levels.INFO,
    warn: log4js.levels.WARN,
    error: log4js.levels.ERROR,
    fatal: log4js.levels.FATAL,
};

const logPath = path.resolve(process.cwd(), 'logs/');

const judgePath = (pathStr) => {
    if (!fs.existsSync(pathStr)) {
        fs.mkdirSync(pathStr);
    }
};

judgePath(logPath);

const fileAppender: log4js.Appender = {
    type: 'dateFile',
    filename: process.cwd() + '/logs/LogFile', // 需要手动创建此文件夹
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true,
    encoding: 'utf-8',
};

const consoleAppender: log4js.Appender = { type: 'console' };

log4js.configure({
    appenders: {
        fileAppender,
        consoleAppender,
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'info' },
    },
});

const use = (app, level) => {
    app.use(log4js.connectLogger(log4js.getLogger('fileAppender'), {
        level: levels[level] || levels['debug'],
        format: 'methos :method url :url status :status',
    }));
};

const logger: log4js.Logger = log4js.getLogger('fileAppender');

export {
    use,
    logger,
};



