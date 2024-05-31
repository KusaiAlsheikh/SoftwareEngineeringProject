import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import userinfos from "../../../../public/db/userinfos.json";

export async function PUT(req) {}

export async function GET(req) {
  const session = await getServerSession(authOptions);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (!_id) {
    const userInfo = userinfos.find(
      (user) => user.email === session?.user?.email
    );

    if (userInfo) return Response.json(userInfo);

    return Response.json({});
  } else {
    const admin = await isAdmin();
    if (!admin) return Response.json();

    const userInfo = userinfos.find((user) => user._id.toString() === _id);

    if (userInfo) return Response.json(userInfo);

    return Response.json({});
  }
}
