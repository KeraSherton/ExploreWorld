async function fetchGraphQL(text, variables) {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });
  console.log(response.json);
  return await response.json();
}

export default fetchGraphQL;
