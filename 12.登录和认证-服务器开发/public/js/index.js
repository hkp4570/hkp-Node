login.onclick = function () {
  fetch("http://localhost:5008/api/admin/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      loginId: "admin",
      loginPwd: "123123",
    }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
};

updateStu.onclick = function () {
  fetch("http://localhost:5008/api/student/1062", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
};
