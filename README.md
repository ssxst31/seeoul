# 내일전시 프로젝트

https://seeoul.netlify.app
<br/><br/>
# 📋 프로젝트 개요

- 서울시 문화행사 정보를 제공해 주는 웹 서비스입니다.
- 지속적으로 개선 및 최신 기술을 학습할 수 있는 프로젝트입니다.
<br/><br/>
# 🏗️ 페이지 소개

## 메인페이지
[![2023-01-25-21-52-12.png](https://i.postimg.cc/1R8XJvWQ/2023-01-25-21-52-12.png)](https://postimg.cc/qgdp7xVb)
- Tailwind CSS로 전반적인 레이아웃을 잡았습니다.
- 모바일 유저 고려 모든 페이지를 반응형 웹 페이지로 제작하였습니다.
- Tailwind CSS class를 이용해 다크모드를 구현하였습니다.

## 상세페이지
[![Jan-25-2023-22-04-14.gif](https://i.postimg.cc/3rLtXxkR/Jan-25-2023-22-04-14.gif)](https://postimg.cc/9z7PVVt5)
- 위치를 한눈에 보기 쉽게 카카오맵을 구현하였습니다.
- disqus이용 댓글 서비스를 구현하였습니다.

## 인기전시회
[![2023-01-25-21-57-19.png](https://i.postimg.cc/FRBRhSH8/2023-01-25-21-57-19.png)](https://postimg.cc/JDjmqGJ5)
- 내일 전시 인스타그램 계정의 피드를 가져와 인기 전시회 탭을 구현하였습니다.
<br/><br/>
# 👟 실행 방법

### 코드 실행 방법

- [백엔드 코드저장소](https://github.com/ssxst31/all-exhibition-back-end)

```bash
#FE
npm install
npm dev start

#BE
npm install
npm dev start
```
<br/><br/>
# 👷 기능 구현사항
- 반응형
- 다크모드 구현
- SEO 최적화
- 문화행사 검색기능
- 페이지네이션 
- 카테고리 필터기능
- 구글 애널리틱스 적용
- 구글, 카카오 광고 적용

<br/>

# ⚙️ 기술스택

### TypeScript, React, Next.js
### eslint, prettier
### postcss, tailwind CSS


<br/>

# 📁 폴더 구조

```
📦all-exhibition
 ┣ 📂components  # route 페이지를 구성하는 컴포넌트 들입니다. route별, 공통 컴포넌트가 있습니다.
 ┃ ┣ 📂atoms
 ┃ ┃ ┗ 📜Input.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┗ 📜InputBox.tsx
 ┃ ┣ 📜CarouselSkeleton.tsx
 ┃ ┣ 📜CulturalEventCard.tsx
 ┃ ┣ 📜KakaoAdFit.tsx
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜MainArticle.tsx
 ┃ ┣ 📜MainCarousel.tsx
 ┃ ┣ 📜Map.tsx
 ┃ ┣ 📜Pagination.tsx
 ┃ ┣ 📜Skeleton.tsx
 ┃ ┗ 📜Slider.tsx
 ┣ 📂hooks  # 커스텀 hook이 모여있는 폴더입니다.
 ┃ ┣ 📜useFetchCulturalEvent.tsx
 ┃ ┣ 📜useInstagramReview.tsx
 ┃ ┣ 📜useInterval.tsx
 ┃ ┣ 📜useRandomCulturalEvent.tsx
 ┃ ┗ 📜useWindowDimensions.tsx
 ┣ 📂layouts # 레이아웃 컴포넌트를 정리한 폴더입니다.
 ┃ ┣ 📜DefaultLayout.tsx
 ┃ ┣ 📜Desktop.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂lib
 ┃ ┗ 📜gtag.js
 ┣ 📂netlify
 ┃ ┗ 📂functions
 ┃ ┃ ┗ 📜test-scheduled-function.js
 ┣ 📂pages # 각 route의 페이지입니다.
 ┃ ┣ 📂api # api와 통신하는 계층 폴더입니다.
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📜BlogSEO.tsx
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📜DetailSEO.tsx
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📂popular
 ┃ ┃ ┣ 📜PopularSEO.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂review
 ┃ ┃ ┣ 📜ReviewSEO.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜404.tsx
 ┃ ┣ 📜500.tsx
 ┃ ┣ 📜DefaultSEO.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜blog.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜indexSeo.tsx
 ┣ 📂public
 ┃ ┣ 📂sitemap
 ┃ ┣ 📜404.png
 ┃ ┣ 📜ads.txt
 ┃ ┣ 📜blog.png
 ┃ ┣ 📜facebook.png
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜instagram.svg
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜new.png
 ┃ ┣ 📜robots.txt
 ┃ ┣ 📜sitemap-blogs.xml
 ┃ ┣ 📜sitemap-blogs.xml.gz
 ┃ ┣ 📜sitemap-common.xml
 ┃ ┣ 📜sitemap-common.xml.gz
 ┃ ┣ 📜sitemap-details.xml
 ┃ ┣ 📜sitemap-details.xml.gz
 ┃ ┣ 📜sitemap.xml
 ┃ ┣ 📜twitter.png
 ┃ ┗ 📜vercel.svg
 ┣ 📂script
 ┃ ┣ 📜blog.json
 ┃ ┣ 📜data.json
 ┃ ┣ 📜generate-sitemap.sh
 ┃ ┣ 📜robots.js
 ┃ ┣ 📜sitemap-blogs.js
 ┃ ┣ 📜sitemap-common.js
 ┃ ┣ 📜sitemap-compress.js
 ┃ ┣ 📜sitemap-details.js
 ┃ ┗ 📜sitemap.js
 ┣ 📂store # 리코일 관리 폴더입니다.
 ┣ 📂styles 전역 css 폴더입니다.
 ┣ 📂type 타입 선언 폴더입니다.
 ┣ 📂utils # 유틸성 함수를 위한 폴더입니다.
 ┣ 📜.env.development
 ┣ 📜.env.production
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.npmrc
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜robots.txt
 ┣ 📜tailwind.config.js
 ┗ 📜tsconfig.json
```
<br/>

# 🚀 미해결 이슈 & 개선 가능 사항

- 에러 핸들링
- 무료서버 -> 네이버 클라우드
- 속도 이슈
- 카카오톡 공유하기
- 댓글 라이브러리 없이 구현
- 로그인 / 회원가입
