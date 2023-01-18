function user(showUser, name) {
    setTimeout(() => {
        showUser(name);
    }, 2000);
}

user((user) => {
    console.log(user);
}, "John Honai");

