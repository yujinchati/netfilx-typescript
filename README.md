 <h1>2401026 - 240201 넷플릭스 클론코딩 ts 버전</h1>

[240425 git 저장소 변경]

## [done] 

tailwind에 특정 tag명이나 클래스명으로 style preset지정

기본 스타일 지정

넷플릭스 관련 파일 추가 업로드

header styleing

tailwind의 기존 preset에 사용자 prset추가

ssr방식으로 서버에서 data fetching후 컴포넌트 페이지 props전달해주고 props에 대한 타입을 제네릭으로 전달

random으로 넷플릭스 오리지널 이미지 데이터 출력

Banner컴포넌트로 페이지 타입 지정

index.tsx제외한 compoents안쪽의 파일들은 page 컴포넌트가 아니기 때문에 NextPage type제거

브라우저 폭에 따라 banner 높이값 변경

text 레이아웃 세부 스타일링

scrollbar 플러그인 설치 및 적용, headwind 확장기능 추가

useRef에 유니온타입을 지정하지 않더라도 초기값이 자동으로 generic을 통해서 내부적으로 union 타입 등록됨

tailwind config로 미리 atimation구문을 animate preset에 등록후 Image컴포넌트에 로딩바 보이도록 처리

이미지 위에 어두운 그라데이션 화면을 커스텀 프리셋으로 등록

텍스트 출력 및 스타일링

Index Page에서 서버에서 가져온 데이터를 반복처리 하면서 자동으로 목록화면 생성

반응형시 banner의 아래 여백 수정

group-hover 지정

일반 리액트 컴포넌트에 타입 지정

firebase객체 인증객체 생성 및 export

firebase api 키 환경변수 등록

react-hook-form 기본 세팅 완료

인증처리할 input항목 등록및 인증 실패시 출력될 에러메세지 설정

정규표현식으로 인증 패턴 정의

커스텀훅 안에서 로그인 정보객체를 받아서 전역 context에 전달해주는 Provider컴포넌트 생성

전역 스테이트에 전달할 회원가입함수 추가

로그인, 로그아웃 함수 추가

전역 State에 옮겨담는 데이터 구조 변경

logout기능 추가 및 기존 메인페이지를 ISR에서 SSR방식으로 변경한 이유

초기 인증유무관련 전역state를 활용해서 첨 로그인상태가 아니면 Banner를 마운트시키지 않아서 LCP점수 확보

recoil로 전역데이터 관리,recoil로 modal창 전역관리

Movie 전역데이터 모달창에 호출

loading bar 지글거리는 문제 해결


로그인 정보 없어도 baner 프레임에 기본 높이값 출력

recoil key값과 atom 객체 이름이 같아서 발생하던 콘솔 오류 해결


##[to do]

로그인 안되어 있는 상태에서 처음 접속시 메인화면 잠깐 떴다가 로그인 페이지 넘어가는 이슈 해결

next가 프리빌드시 recoil키값을 변경하는 문제 해결 uudi 모듈설치후 빌드때마다 고유값 다시 붙여주도록 설정

스크롤시 헤더 배경색 스타일 변경

모달 창 상세데이터 출력 및 반응형 스타일링

썸네일 클릭시 모달 창에 상세 영화정보 출력

thumbnail 로딩바 출력








