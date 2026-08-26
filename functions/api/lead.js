import { createLeadHandlers } from '../_lib/taptaphome-direct.js';

const handlers = createLeadHandlers({
  site: 'heizung-solar-kosten.de',
  mode: 'combo'
});

export const onRequestGet = handlers.onRequestGet;
export const onRequestOptions = handlers.onRequestOptions;
export const onRequestPost = handlers.onRequestPost;
