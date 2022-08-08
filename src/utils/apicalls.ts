export async function getFetchResp(body: any) {
  try {
    const resp = await fetch('https://httpstat.us/200', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
