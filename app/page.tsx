import MainCarousel from "app/_component/MainCarousel";
import Section from "app/_component/Section";
import MainSection from "app/_component/MainSection";
import BlackButton from "app/_component/BlackButton";

export default async function Page() {
  console.log(444);
  const dsa = 1;
  return (
    <main className="pt-[132px] px-[30px] w-full -md:px-4 -md:pt-[165px]">
      <section>
        <h2 className="pb-1 text-2xl font-bold text-black dark:text-white linear2">전시회를 생각 중이라면 👀</h2>
        <div className="w-full h-8 -md:h-4" />
        <MainCarousel />
      </section>
      <div className="w-full h-10" />
      <section>
        <h2 className="pb-1 text-2xl font-bold text-black dark:text-white linear2 h-[29px] self-start">
          어디서 구경할까요? 🤔
        </h2>
        <div className="w-full h-7 -md:h-4" />
        <Section />
        <div className="w-full h-8 -md:h-4" />
        <MainSection dsa={dsa} />
        <div className="w-full h-8" />
        <div className="text-center"></div>
        <div className="w-full h-8" />
        <div className="max-w-[728px] mx-auto overflow-x-hidden -md:max-w-[300px]"></div>
        <div className="w-full h-8" />
      </section>
      <BlackButton />
    </main>
  );
}
