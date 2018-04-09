import 'custom-event-polyfill';
import 'es6-shim';
import 'nodelist-foreach-polyfill';
import promiseFinally from 'promise.prototype.finally';
import 'whatwg-fetch';

promiseFinally.shim();