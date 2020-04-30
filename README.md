# react-reconciliation-test

- key 값에 따른 react dom tree 재조정 확인
- [React 공식페이지 - Reconciliation](https://reactjs.org/docs/reconciliation.html)

---

## reconiliation 휴리스틱 알고리즘

> ### 1. 엘리먼트가 변경되면 새로운 DOM tree 를 구성한다.
> > ### 테스트 케이스
> > ### 테스트 시나리오

<br>

> ### 2. key 를 지정하여 변경되지 않는 엘리먼트를 설정할 수 있다.
> > ### 테스트 케이스

> > > - 1. key 를 고유한 값(id) 으로 설정
> > > - 2. key 를 배열 index 값으로 설정

> > ### 테스트 시나리오
> > > - 1.  텍스트를 최소 5개 이상 등록한다.
> > > - 2.  한개의 아이템을 삭제한다.
> > > - 3.  콘솔창으로 unmount 되는 컴포넌트를 확인한다.
> > > - 4.  key 값 모드를 변경하여 차이점을 확인한다.
