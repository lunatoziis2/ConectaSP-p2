/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import locais from "@/dados/locais.json";

export async function GET() {
  return Response.json(locais);
}