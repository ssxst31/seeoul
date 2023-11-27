import { fetchNaverBlogs } from "api/naver";
import { elapsedTime } from "utils/date";

interface NaverBlogsProps {
  title: string;
}

export default async function NaverBlogs({ title }: NaverBlogsProps) {
  const res = await fetchNaverBlogs(title);

  const { items } = res;

  return (
    <>
      <div className=" font-bold text-lg mb-2">관련 네이버 콘텐츠</div>
      <div className="space-y-3">
        {items.map((item: any) => (
          <a
            className="inline-block border border-solid border-gray-300 p-2 rounded-lg w-full"
            href={item.link}
            target="_blank"
          >
            <div className=" text-sm">
              <span className="font-bold mr-2">{item.bloggername}</span>
              <span>· {elapsedTime(item.postdate)}</span>
            </div>
            <div className="mt-2">
              <div className="text-blue-600" dangerouslySetInnerHTML={{ __html: item.title }} />
              <div className="text-sm mt-1">
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
