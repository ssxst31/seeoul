export async function generateMetadata() {
  return {
    title: "문화 행사 지도 | 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="-md:pt-[53px]">{children}</div>;
}
