import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  APPLIERS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  CONVERSATIONS: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation`,
  CONVERSATIONMESSAGES: `${process.env.REACT_APP_BACKEND_URL}/chat/message`,
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  companies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },

  conversations: async function () {
    return request(ENDPOINTS.CONVERSATIONS);
  },

  appliers: async function () {
    return request(ENDPOINTS.APPLIERS);
  },

  conversationMessages: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATIONMESSAGES + "/" + idUser1 + "/" + idUser2);
  },
};