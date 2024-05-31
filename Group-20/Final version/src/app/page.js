import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders mainHeader={"ABOUT US"} />
        <div class="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Welcome to our website! Allow us to introduce ourselves:</p>
          <p>
            We are Alperen, Ayhem, and Kusai, a dynamic trio of students from
            Kadir Has University, all passionate about Computer Engineering.
          </p>
          <p>
            Our mission is simple yet exciting: to revolutionize your pizza
            experience. Whether you're craving a slice delivered to your
            doorstep with just a few clicks, or you're a pizzeria owner seeking
            a seamless system to manage your orders and expand your customer
            base, we've got you covered.
          </p>
          <p>
            With our innovative website, ordering pizza has never been easier or
            faster. And for pizzeria owners, we offer a comprehensive management
            system designed for effortless operation and increased
            profitability.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders mainHeader={"CONTACT US"} />
        <div className="mt-8">
          <a
            className="text-base underline text-gray-500"
            href="tel:+5399293777"
          >
            +5399293777
            <br />
            kusai_al@stu.khas.edu.tr
          </a>
        </div>
      </section>
    </>
  );
}
