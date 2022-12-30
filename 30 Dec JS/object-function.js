const student = {
    name: 'Steve',
    mark1: 40,
    mark2: 50,
    total: function() {
        const extraMark = 5;
        console.log(this.mark1 + this.mark2 + extraMark); // use keyword this to access values of an object
    }
};

student.total();