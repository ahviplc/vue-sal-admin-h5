var label_suId = document.getElementsByClassName('suIdlabel')[0];
var label_password = document.getElementsByClassName('passwordlabel')[0];
var suId = document.getElementById('suId');
var suPwd = document.getElementById('suPwd');
suId.addEventListener('blur', function () {
    // alert("1")
    if (suId.value) {
        label_suId.className = 'labelactive';
    } else {
        label_suId.className = '';
    }
});
suPwd.addEventListener('blur', function () {
    // alert("2")
    if (suPwd.value) {
        label_password.className = 'labelactive';
    } else {
        label_password.className = '';
    }
});
