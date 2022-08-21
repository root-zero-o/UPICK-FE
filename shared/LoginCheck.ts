// 로그인, 회원가입 유효성 검사 파일

// 이름 형식 검사
export const nameRegCheck = (name: any) => {
  const regPass = /^(?=.*[가-힣])[가-힣a-zA-Z0-9-_.]{2,6}$/;
  return regPass.test(name);
};

// 비밀번호 검사
export const passwordRegCheck = (pw: any) => {
  const regPass =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return regPass.test(pw);
};

// 이메일 검사
export const emailRegCheck = (email: any) => {
  const regPass =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  return regPass.test(email);
};
