import React, { useState } from 'react';

interface MyFormProps {
    // myFromProps라는 인터페이스에서는 온 서브밋이라는 함수를 받는데, 이친구는
    // form이라는 객체에, name 과 description을 가지고 있다.
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  // name과 decription이라는 변수는 폼 인터페이스 안에 있는것을 참조한다.
  const { name, description } = form;

  // name이라는 인풋의 값이 변할때마다, 그 값을 포착해서 setForm해라.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]:value
        // [name]:value
    })
    // e 값을 무엇으로 설정해야할까요?
    // 일단 모를떄는 any 로 설정합니다.
  };
  // 서밋 버튼을 누르면
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 제출하는 이벤트를 막고,
      e.preventDefault();
      // 온서밋이라는 함수를 실행하고, 이게 무슨...의미의 함수지?
      onSubmit(form);
      //form이라는 훅은 초기화 한다.
      setForm({name:"",description:""});
    // 여기도 모르니까 any 로 하겠습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
