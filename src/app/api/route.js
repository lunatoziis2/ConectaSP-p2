import locais from "@/dados/locais.json";

export async function GET() {
  return Response.json(locais);
}