const mockPromise = (json, time = 500) =>
  new Promise((resolve) => setTimeout(() => resolve({ data: json }), time));

export default mockPromise;
