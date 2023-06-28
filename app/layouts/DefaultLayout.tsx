interface DefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div className="mx-auto max-w-7xl pt-[61px] -md:pt-[61px]">{children}</div>;
}
