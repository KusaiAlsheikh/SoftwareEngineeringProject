import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import orders from "../../../../public/db/orders.json";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  if (_id) {
    const Order = orders.find((order) => order._id.toString() === _id);
    return Response.json(Order);
  }

  if (admin) {
    return Response.json(orders);
  }

  if (userEmail) {
    const userOrders = orders.filter((order) => order.userEmail === userEmail);
    return Response.json(userOrders);
  }
}
