## 4-6. Outlet   
* Outlet의 context 속성을 통해 그 아래 children들에게 정보를 전달할 수 있음   

```ts
<Outlet context={{
    nameOfMyUser: users[Number(userId)-1].name,
}} />
```
