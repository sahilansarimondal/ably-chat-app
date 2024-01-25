import Ably from "ably/promises";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const client: any = new Ably.Realtime(process.env.ABLY_API_KEY!);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "ably-nextjs-demo",
  });
  return Response.json(tokenRequestData);
}
