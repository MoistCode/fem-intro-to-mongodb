const mongoose = require('mongoose');

const connect = () => {
    // PROTOCOL(http)://HOSTNAME(localhost):PORT(27017)/DATABASE_NAME(todos)
    return mongoose.connect('mongodb://localhost:27017/todos', {
        useNewUrlParser: true,
    });
};

const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    faveFood: [{
        type: String
    }],
    info: {
        school: {
            type: String,
        },
        shoeSize: {
            type: Number,
        }
    }
}, { timestamps: true });

const Student = mongoose.model('student', student);

connect()
    .then(async connection => {
        const student1 = await Student.create({
            firstName: 'Tommy Pham',
        });

        const student2 = await Student.create({
            firstName: 'Martha Stewart',
        });

        const student3 = await Student.create({
            firstName: 'Timmy Turner',
        });

        const foundStudent1 = await Student.find({});
        const foundStudent2 = await Student.findById(student2._id).exec();
        const foundStudent3 = await Student.findByIdAndUpdate(student2._id, {firstName: 'Cowman'});

        console.log(foundStudent1);
        console.log(foundStudent2);
    })
    .catch(e => console.error(e));