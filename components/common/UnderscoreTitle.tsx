interface UnderscoreTitleProps {
  title: string;
}

export default function UnderscoreTitle({ title }: UnderscoreTitleProps) {
  return <h2 className="text-2xl font-bold text-black dark:text-white linear2">{title}</h2>;
}
