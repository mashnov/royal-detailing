import Api from './api';

export default {
  async SEND_MESSAGE({ commit, state: { brand, name, phone } }) {
    const nameIsEmpty = !(name || '').trim().length;
    const phoneIsEmpty = !(phone || '').trim().length;
    const brandIsEmpty = !(brand || '').trim().length;

    const nameText = nameIsEmpty ? 'Имя не заполнено' : `Имя: ${name}`;
    const phoneText = phoneIsEmpty ? 'Номер телефона не заполнен' : `Номер телефона: ${phone}`;
    const brandText = brandIsEmpty ? 'Нет дополнительной информации' : `марка или номер машины: ${brand}`;

    const messageText = `${nameText}\n${phoneText}\n${brandText}`;

    commit('MUTATE_STATE_FIELD', { field: 'isPending', value: true });
    const { success } = await Api.SEND_MESSAGE(messageText);
    commit('MUTATE_STATE_FIELD', { field: 'isPending', value: false });

    return { success };
  },
  SET_NAME({ commit }, name) {
    commit('MUTATE_STATE_FIELD', { field: 'name', value: name });
  },
  SET_PHONE({ commit }, phone) {
    commit('MUTATE_STATE_FIELD', { field: 'phone', value: phone });
  },
  SET_BRAND({ commit }, brand) {
    commit('MUTATE_STATE_FIELD', { field: 'brand', value: brand });
  },
};
