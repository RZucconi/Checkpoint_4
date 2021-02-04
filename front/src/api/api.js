import axios from 'axios';

const BASE_URL = 'http://localhost:3080/api/v1/';

function axiosGetPromise(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error);
      });
  });
}

export function getRoyalFamily() {
  const url = BASE_URL.concat('royal-family');

  return axiosGetPromise(url);
}

export function getRoyalMemberSocialLink(id) {
  const url = BASE_URL.concat(`royal-family/${id}/social-links`);

  return axiosGetPromise(url);
}

export function getRoyalAsset() {
  const url = BASE_URL.concat('royal-assets');

  return axiosGetPromise(url);
}
