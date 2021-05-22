# Apple 사이트 둘러보니

## 메인 페이지

### 소스 상의 특이사항

* SEO를 위해 `link` 태그에 `canonical` 값 사용
    * `apple.com` 이라는 하나의 페이지를 가리키는 수많은 URL이 존재함. 검색엔진 입장에서는 어떤 URL이 대표 URL인지 알 수 없어서 임의로 대표 URL을 정하는 경우가 발생한다고 함.
    * `canonical`은 어떤 URL이 해당 페이지의 대표 URL인지 검색엔진에 알려주는 역할을 함.
    * 이에 따라 우리가 원하는 주소를 기준으로 검색결과를 제어할 수 있게 됨.

```html
<!-- 대표 URL을 canonical로 지정 -->
<link rel="canonical" href="https://www.naver/com">
<!-- 그후 다른 URL들을 alternative로 지정 -->
<!-- 예를 들어 영서 사이트, 중국어 사이트가 있다고 가정 -->
<link rel="alternative" href="https://www.naver/com/en" hreflang="en-US">
<link rel="alternative" href="https://www.naver/com/cn" hreflang="zh-CN">
```

* 폰트를 CSS로 제어함.
    * 로컬 -> woff2 -> woff -> ttf 순으로 호출함.
    * 우선 로컬에 있는 것을 사용하고, 없으면 가벼운 순서대로 호출.
* SF Pro 폰트의 4가지 배리에이션을 모두 사용
 * 디스플레이, 아이콘, 텍스트, KR
 * 표현하고자 하는 텍스트의 특성에 맞게 꼼꼼하게 스타일링 하고 있음.
* 헤더부터 푸터까지 하나의 wrapper로 감싸놓고 제어함.
* 자체 애널리틱스 사용
    * `ac-analytics.js`를 페이지 내에서 호출하며, 스크립트를 대략적으로만 살펴본 결과 user agent에 따른 조건문이 보임.
    * 클라이언트 환경에 최적화된 컨텐츠를 제공하는데 활용할 것이고, 간단한 통계도 남기는 것으로 보임.

### 페이지 구조

* 당연히 모바일 대응.
    * 헤더는 햄버거메뉴로 간소화
    * 메인 hero에 배치된 배경이미지는 리사이즈 하는 정보가 아니라 **이미지 자체를 바꿈** (creative 자체가 다름)
    * 중단 feature 영역은 2컬럼에서 1컬럼으로 변경 (다른 부분은 변경하지 않음)
    * 푸터에 있는 세부 메뉴 리스트가 개별 컬럼이 collapse되어 포함되는 구조로 변경됨.

* hero와 feature 디비전은 1개의 자식요소 2개의 손자요소로 구성됨
    * 자식요소는 해당 div 전체를 감싸게 되며, 유저가 div를 클릭시 <a> 태크로 유저를 이동시키는 역할만 함
        * 손자 요소는 상품에 대한 카피가 들어가는 영역과
        * 상품 이미지를 보여주는 영역으로 구성됨
        * 모두 중앙정렬이며, 카피 영역은 상단 배치, 이미지는 영역을 커버함