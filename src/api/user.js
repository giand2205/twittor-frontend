import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function getUserApi(id) {
  const url = `${API_HOST}/view-profile?id=${id}`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then((response) => {
      // eslint-disable-next-line no-throw-literal
      if (response.status >= 400) throw null;
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function uploadBannerApi(file) {
  const url = `${API_HOST}/upload-banner`;

  const formData = new FormData();
  formData.append("banner", file);

  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: formData,
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function uploadAvatarApi(file) {
  const url = `${API_HOST}/upload-avatar`;

  const formData = new FormData();
  formData.append("avatar", file);

  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: formData,
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateProfileApi(data) {
  const url = `${API_HOST}/update-profile`;
  const params = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
