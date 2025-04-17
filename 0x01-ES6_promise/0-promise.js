function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('not working'));
  });
}

export default getFullResponseFromAPI;
