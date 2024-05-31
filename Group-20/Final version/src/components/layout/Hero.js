import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          <span style={{ color: "#b9201c" }}>PIZZATA</span>
          <br />
          <span className="text-gray-custom">THE FASTEST</span>
          <br />
          <span className="text-green-700">
            PIZZA
            <br />
          </span>
          <span className="text-gray-custom">TO YOUR DOOR</span>
        </h1>
        <div className="flex gap-4 text-sm">
          <button
            className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full hover:bg-green-700"
            style={{ margin: "10px 0" }}
          >
            Order now
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block pizza-div">
        <Image
          src={"/pizza.png"}
          width={317.6}
          height={317.6}
          objectFit={"contain"}
          alt={"pizza"}
          className={"center rotate-slowly"}
          style={{
            position: "absolute",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </section>
  );
}
