export const config = {
  runtime: "experimental-edge",
};

type Data = {
  name: string;
};

export default async function handler() {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
