## 조합논리

함수형 프로그래밍의 가장 큰 이론적인 배경은 람다수학과 조합논리, 카테고리 이론이다. 람다수학의 모든 것을 컴퓨터 프로그래밍 언어로 표현할 수 없으므로, 제한된 범위에서 람다 숳가을 구현하기 위해 조합 논리학이 있다.

### 조합자

조합자는 함수를 결합할 때 사용되는 함수이다. 함수형 언어의 컴파일러를 만드는 데 필요한 이론을 검증하고 개발할 때 주로 사용된다. 대부분의 함수형 라이브럴리들은 조합 논리로 개발된 몇 갖 유용한 조합자들을 제공한다.


- identitiy: R.identitiy
- constant: R.always
- thrush: R.applyTo
- duplication: R.unnest
- flip: R.flip
- sustitution: R.ap

### R.chain

함수를 매개변수로 받아 동작하는 함수이다. 매개변수가 한 개 일때, 두 개 일때 동작이 조금 다르다. 

```js
R.chiain(callback)
R.chiain(callback1, callback2)
```