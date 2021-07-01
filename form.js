function buat_login() {
    let elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);

    let p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "SILAHKAN MENDAFTAR";

    let kotak = document.getElementsByTagName('div')[0];
    kotak.appendChild(p);

    let form = document.createElement("form");
    kotak.appendChild(form);

    let label = document.createElement("label");
    label.innerHTML = "Nama User"
    form.appendChild(label);

    let input_nama = document.createElement("input");
    input_nama.type = "text";
    input_nama.name = "nama";
    input_nama.className = "form_login";
    input_nama.placeholder = "Nama User..";
    form.appendChild(input_nama);


    let label_tel = document.createElement("label");
    label_tel.innerHTML = "Nomor Handphone"
    form.appendChild(label_tel);

    let input_tel = document.createElement("input");
    input_tel.type = "tel";
    input_tel.name = "nomor";
    input_tel.className = "form_login";
    input_tel.placeholder = "Nomor Handphone..";
    form.appendChild(input_tel);


    let label_username = document.createElement("label");
    label_username.innerHTML = "Username"
    form.appendChild(label_username);

    let input_username = document.createElement("input");
    input_username.type = "text";
    input_username.name = "username";
    input_username.className = "form_login";
    input_username.placeholder = "Username atau email..";
    form.appendChild(input_username);


    let label_password = document.createElement("label");
    label_password.innerHTML = "Password"
    form.appendChild(label_password);

    let input_password = document.createElement("input");
    input_password.type = "password";
    input_password.name = "password";
    input_password.className = "form_login";
    input_password.placeholder = "Password..";
    form.appendChild(input_password);


    let tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.className = "tombol_login";
    tombol.value = "DAFTAR SEKARANG";
    form.appendChild(tombol);
}