import get from 'lodash/get';

const ENV = process.env;
const PUBLIC_PATH = get(ENV, 'BASE_URL', null);
const NODE_ENV = get(ENV, 'NODE_ENV', null);

const TELEGRAM_CUSTOMERS_BOT_USERNAME = get(ENV, 'VUE_APP_TELEGRAM_CUSTOMERS_BOT_USERNAME', null);
const TELEGRAM_CUSTOMERS_BOT_NAME = get(ENV, 'VUE_APP_TELEGRAM_CUSTOMERS_BOT_NAME', null);
const TELEGRAM_CUSTOMERS_BOT_TOKEN = get(ENV, 'VUE_APP_TELEGRAM_CUSTOMERS_BOT_TOKEN', null);
const TELEGRAM_CUSTOMERS_CHAT_ID = get(ENV, 'VUE_APP_TELEGRAM_CUSTOMERS_CHAT_ID', null);
const TELEGRAM_API_URL_GET_LOGS = get(ENV, 'VUE_APP_TELEGRAM_API_URL_GET_LOGS', null);
const TELEGRAM_API_URL_SEND_MESSAGE = get(ENV, 'VUE_APP_TELEGRAM_API_URL_SEND_MESSAGE', null);
const VUE_APP_YANDEX_MAP_SCRIPT_SRC = get(ENV, 'VUE_APP_YANDEX_MAP_SCRIPT_SRC', null);
const VUE_APP_YANDEX_MAP_LINK = get(ENV, 'VUE_APP_YANDEX_MAP_LINK', null);

export const isProd = NODE_ENV === 'production';
export const publicPath = PUBLIC_PATH;
export const telegramCustomerBotUserName = TELEGRAM_CUSTOMERS_BOT_USERNAME;
export const telegramCustomerBotName = TELEGRAM_CUSTOMERS_BOT_NAME;
export const telegramCustomerBotToken = TELEGRAM_CUSTOMERS_BOT_TOKEN;
export const telegramCustomerChatId = TELEGRAM_CUSTOMERS_CHAT_ID;
export const telegramApiUrlGetLogs = TELEGRAM_API_URL_GET_LOGS;
export const telegramApiUrlSendMessage = TELEGRAM_API_URL_SEND_MESSAGE;
export const yandexMapScriptSrc = VUE_APP_YANDEX_MAP_SCRIPT_SRC;
export const yandexMapLink = VUE_APP_YANDEX_MAP_LINK;
