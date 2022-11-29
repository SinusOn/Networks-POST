const form = document.querySelector("form");

let xhr = new XMLHttpRequest();

form.addEventListener("submit", () => {
  let fd = new FormData([form]);
  fd.append(name, value);
  xhr.open("POST", "/sendmail");
  xhr.send(fd);
});
