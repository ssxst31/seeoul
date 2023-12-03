import Image from "next/image";

interface ContainerProps {
  data: any;
}

export default function Container({ data }: ContainerProps) {
  return (
    <>
      <div className="w-full h-8 -md:h-4" />
      <span className="text-2xl font-bold">네이버 상품을 살펴보세요!</span>
      <div className="w-full h-8 -md:h-4" />
      <ul className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -md:gap-y-4 -md:gap-x-4">
        {data.items.map((el: any) => (
          <li className="relative w-full overflow-hidden shadow-lg cursor-pointer shadow-gray-200 dark:shadow-gray-900">
            <a href={el.link} key={el.productId} className="inline-block w-full">
              <div className="relative w-full overflow-hidden h-96 sm:h-72">
                <Image src={el.image} alt={el.title} fill className="duration-100 ease-linear hover:scale-110" />
              </div>
              <div className="p-6">
                <strong
                  dangerouslySetInnerHTML={{ __html: el.title }}
                  className="block w-full overflow-hidden text-xl font-bold text-black text-ellipsis webkit-box webkit-line-clamp-2 webkit-box-vertical dark:text-white"
                />
                <div className=" text-indigo-600 font-bold">{Number(el.lprice).toLocaleString()}원</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
