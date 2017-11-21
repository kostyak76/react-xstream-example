import fromEvent from 'xstream/extra/fromEvent';


const windowResize$ = fromEvent(window, 'resize').startWith('resize');

export const isMdScreen$ = windowResize$.map(() => document.body.clientWidth >= 768);
