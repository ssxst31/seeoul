export async function generateMetadata() {
  return {
    title: "인기전시회 | 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="px-[30px] w-full -md:px-4 -md:pt-[52px]">{children}</main>;
}
