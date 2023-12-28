// apiHelpers.js
export const FetchData = async (url, options) => {
  // Your custom logic for fetching data

  

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      //throw new Error(`Request failed with status: ${response.status}`);
      console.log(response.status);
      return [];
    }

    return response.json();
  } catch (error) {
    throw new Error(`Request failed with status: ${error}`);
  }
};
