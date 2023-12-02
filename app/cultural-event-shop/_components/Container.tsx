interface ContainerProps {
  data: any;
}

export default function Container({ data }: ContainerProps) {
  return (
    <>
      <div className="w-full h-8 -md:h-4" />
      <span className="text-2xl font-bold">네이버 상품을 살펴보세요!</span>
      <div className="w-full h-8 -md:h-4" />
      <div className="space-y-4 flex flex-col">
        {data.items.map((el: any) => (
          <a href={el.link} key={el.productId} className="inline-block">
            <div className="flex">
              <img src={el.image} className="h-32 w-32 mr-2" />
              <div>
                <div dangerouslySetInnerHTML={{ __html: el.title }} className=" font-bold" />
                <div className=" text-indigo-600 font-bold">{Number(el.lprice).toLocaleString()}원</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
