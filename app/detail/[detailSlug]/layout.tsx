export async function generateMetadata({ params }: any) {
  return {
    title: decodeURIComponent(params.detailSlug) + "| 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
