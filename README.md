# react-reconciliation-test

- key 값에 따른 react dom render 재조정 확인 프로젝트
- [React 공식페이지 - Reconciliation](https://reactjs.org/docs/reconciliation.html)

====

### 테스트 케이스

- 1. key 를 고유한 값(id) 으로 설정
- 2. key 를 배열 index 값으로 설정

### 테스트 시나리오

- 1. 텍스트를 최소 5개 이상 등록한다.
- 2. 한개의 아이템을 삭제한다.
- 3. 콘솔창으로 unmount 되는 컴포넌트를 확인한다.
- 4. key 값 모드를 변경하여 차이점을 확인한다.
