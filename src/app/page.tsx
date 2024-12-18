import NewsLetterCard from "@/components/cards/NewsLetterCard";
import SignInCard from "@/components/cards/SignInCard";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-14 py-20 sm:gap-12 md:flex-row md:gap-8">
        <SignInCard />
        <NewsLetterCard />
      </section>
    </div>
  );
}
