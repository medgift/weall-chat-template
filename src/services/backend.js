import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  USERS: `${process.env.REACT_APP_BACKEND_URL}/user`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  APPLIERS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  CONVERSATION: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation`,
  CONVERSATIONMESSAGES: `${process.env.REACT_APP_BACKEND_URL}/chat/message`,
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  users: async function () {
    return request(ENDPOINTS.USERS);
  },

  companies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },

  conversations: async function () {
    return request(ENDPOINTS.CONVERSATION);
  },

  createConversation: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATION + "/" + idUser1 + "/" + idUser2, {method: "POST"});
  },

  closeConversation: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATION + "/" + idUser1 + "/" + idUser2, {method: "DELETE"});
  },

  appliers: async function () {
    return request(ENDPOINTS.APPLIERS);
  },

  conversationMessages: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATIONMESSAGES + "/" + idUser1 + "/" + idUser2);
  },
};
