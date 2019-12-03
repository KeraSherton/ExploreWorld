async function fetchGraphQL(text, variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    body: JSON.stringify({
      query: text,
      variables
    })
  });
  console.log(response);
  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
