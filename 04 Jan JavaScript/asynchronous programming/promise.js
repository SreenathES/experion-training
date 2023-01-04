const p = new Promise((resolve, reject) => {
    const name = 'JavaScript';
    resolve(name);
});

p.then(res => console.log(res));
