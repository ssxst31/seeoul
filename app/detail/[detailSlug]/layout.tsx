import { Metadata } from "next";

interface Props {
  params: { detailSlug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.detailSlug) + "| 내일전시",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
