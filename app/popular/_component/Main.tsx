"use client";

interface MainProps {
  data: any;
}

export default function Main({ data }: MainProps) {
  console.log(data);

  return (
    <div>
      {data.map((el: any) => (
        <div>{el.caption}</div>
      ))}
    </div>
  );
}
