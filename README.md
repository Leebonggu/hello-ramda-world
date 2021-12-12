
## Ramda

### 특징

- 타입스크립트 호환
- compose, pipe 함수 제공
- 자동커리(auto curry) 기능 제공
- 포인트가 없는 고차 도움 함수 제공
- 조합 논리 함수 일부 제공
- 하스켈 렌즈 라이브러리 기능 일부 제공
- 자바스크립트 표준 모나드 규격과 호환

### 구성

- 함수
- 리스트
- 로직
- 수학
- 객체
- 관계
- 문자열
- 타입

## TS
### Complilation Context

<img width="624" alt="스크린샷 2021-12-11 오후 11 41 19" src="https://user-images.githubusercontent.com/30411204/145680579-c118e030-9d6f-4e8e-bc32-984892d42e33.png">

- 컨텍스트는 맥락.
- 타입스크립트 파일을 자바스크립트로 컴파일 할 때, 어떤 옵션을 적용할지에 대한 맥락을 의미
- 보통 tsconfig.json에 적혀있다.
- 어떤 파일을, 어떤 방식으로 컴파일 할 것인가?
- tsconfig에 대한 이야기다

### 최상위 프로퍼티

- compileOnSave
- extends
- compileOptions: 내용이 많다
- files
- include
- exclude
- references
- typeAcquistion
- tsNode

### compilerOptions에 속한 주요개념

- module: js파일은 웹브라우저와 노드 모두에서 작동해야 한다. 그러나 웹과 노드는 동작방식에 차이가 있어서 분할된 파일이 서로 다르게 작동한다. module설정으 통해 동작 대상 플랫폼이 웹 브라우저인지 노드제이에스인지 구분해 그에 맞는 도듈 방식으로 컴파일하려는 목적으로 설정한다
  - 브라우저: amd
  - node: commomjs
- moduleResoltion: 모듈 설정에 따라 다르게 설정된다
  - amd -> classic 
  - commonjs -> node
- target: 트랜스파일할 대상 자바스크립트 버전을 설정. 대부분 es5값을 설정하고, 최신 노드JS를 사용할 경우 es6를 설정할 수 있다
- baseUrl and outDir
  - baseUrl(입구): 트랜스파일된 자바스크립트 파일을 저장하는 디렉터리를 설정하한다. tsc는 기본적으로 tsconfig.json이 있는 디렉터리에서 실행된다. 따라서 baseUrl은 현재 디렉터리를 뜻하는 `.`로 설정하는게 기본이다.
  - outDir(출구): ourDri은 baseDir를 기준으로 했을 때 하위 디렉터리의 이름이다. dist라는 값을 설정한다면 dist안에 트랜스파일링이 일어난 파일들이 생성된다.
- paths: 소스파일 import문에서 from부분을 해석할 때 찾아야하는 디렉터리를 의미한다.
- esModuleInterop: 오픈소스 자바스크립트 라이브러리르 중 웹브라우저에서 동작한다는 가정으로 만들어진 것들이 있다. 이것들은 commonJS 방식으로 동작하는 타입스크립트에 혼란을 줄 수 있다. esModuleInterop(상호 운용) true설정 해놓으면 이 부분을 해결가능하다.(amd로 작동하게 만드나보다)
- sourceMap: true일 경우 트랜스파일 디렉터리에는 js파일 외에도 js.map이 만들어 진다. 소스맵은 자바스크립트 코드가 타입스크립트의 어느 부분에 해당하는지 알려주는 역할을 한다. 주로 디버깅에 사용된다.
- downlevelIteration: 제너레이터라 구문이 작동하려면 true값으로 설정해야 한다.
- noImplicitAny: 타입스크립트 컴파일러는 매개변수에 타입을 지정해주지 않을 경우 `any`를 암시적으로 지정한다. 이런 경우 타입스크립트의 장점이 사라진다. noImplicitAny를 설정하면 any로 설정되는 것을 막을 수 있다.