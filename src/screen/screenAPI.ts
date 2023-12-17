import endpoint from "../endpoints.config";

const url = "https://search.ofac-api.com/v3";

function statusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return "Unauthorized.";
    case 403:
      return "Forbidden.";
    default:
      return "There was an error retrieving SDN data. Please try again.";
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = statusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

function convertToPersonModel(data: any) {
  const values = Object.values(data.matches);
  return values[0];
}

const screenAPI = async (person: object) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(person),
    headers: {
      "Content-Type": "application/json",
      apiKey: endpoint.apiKey,
    },
  });
  checkStatus(response);
  const json = await parseJSON(response);
  return convertToPersonModel(json);
};

export { screenAPI };
