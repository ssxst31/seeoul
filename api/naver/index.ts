export async function fetchNaverBlogs(title: string) {
  const res = await fetch(`https://openapi.naver.com/v1/search/blog?query=${title}`, {
    headers: {
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ?? "",
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_SECRET_KEY ?? "",
    },
  });

  const data = await res.json();

  return data;
}

export async function fetchNaverShop(title: string) {
  const res = await fetch(`https://openapi.naver.com/v1/search/shop?query=${title}`, {
    headers: {
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ?? "",
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_SECRET_KEY ?? "",
    },
  });

  const data = await res.json();

  return data;
}
