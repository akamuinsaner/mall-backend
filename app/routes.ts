import * as hello from './controller/hello';

const use = (app) => {
    app.get('/', hello.list);
};

export {
    use,
};
