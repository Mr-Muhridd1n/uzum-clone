const loading = document.getElementById("loading");

export async function request(url) {
  loading.classList.remove("hidden");
  const req = await fetch(url);
  const data = await req.json();
  loading.classList.add("hidden");

  return data;
}
