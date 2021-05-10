import axios from 'axios';
import get from 'lodash/get';
import { telegramCustomerBotToken, telegramCustomerChatId, telegramApiUrlSendMessage } from '@/helpers/env';
import { replaceCurly } from '@/helpers/string';

export default {
  async SEND_MESSAGE(message) {
    const requestUrl = replaceCurly(telegramApiUrlSendMessage, { botToken: telegramCustomerBotToken });
    const params = {
      chat_id: telegramCustomerChatId,
      text: message,
    };
    try {
      const repsonse = await axios.get(requestUrl, { params });
      const status = get(repsonse, 'status', false);
      return { success: parseInt(status) === 200 };
    }
    catch {
      return { success: false };
    }
  },
};
