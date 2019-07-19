import * as hello from './controller/hello';

export default (app) => {
    app.get('/', hello.list);
};
