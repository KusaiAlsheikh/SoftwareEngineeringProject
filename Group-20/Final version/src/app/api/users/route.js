import { isAdmin } from "@/app/api/auth/[...nextauth]/route";
import users from "../../../../public/db/users.json";

export async function GET() {
  if (await isAdmin()) {
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}
