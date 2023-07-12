export async function generateMetadata() {
  return {
    title: "인기전시회 | 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
