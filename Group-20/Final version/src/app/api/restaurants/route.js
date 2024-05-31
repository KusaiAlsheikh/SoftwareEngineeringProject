import { isAdmin } from "@/app/api/auth/[...nextauth]/route";

import restaurants from "../../../../public/db/restaurants.json";

export async function POST(req) {}

export async function PUT(req) {}

export async function GET() {
  return Response.json(restaurants);
}

export async function DELETE(req) {}
