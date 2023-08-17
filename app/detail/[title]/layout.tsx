export async function generateMetadata({ params }: any) {
  return {
    title: decodeURIComponent(params.title) + "| 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
