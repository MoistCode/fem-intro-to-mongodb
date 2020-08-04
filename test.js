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
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school',
        required: true,
    }
}, {
    timestamps: true
});

const school = new mongoose.Schema({
    name: String,
    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{ type: String }]
});

const Student = mongoose.model('student', student);
const School = mongoose.model('school', school);

connect()
    .then(async connection => {
        // const school1a = await School.create({ name: 'MLK Elementary'});
        // const student = await Student.create({ firstName: 'Timmy', school: school._id });

        // console.log(student);

        // const match = await Student.findById(student._id)
        //     .populate('school')
        //     .exec();

        const school1b = await School.findOneAndUpdate({
            name: 'MLK Elementary '
        }, {
            name: 'MIK Elementary',
            openSince: 2009,
            students: 1000,
            iGreat: true,
            staff: ['v', 't', 'vdsv', 'cdscs', 'xaxccc'],
        }, {
            new: true
        }, );

        const school2a = School.create({
            name: 'MILK Elementary',
            openSince: 20015,
            students: 500,
            iGreat: false,
            staff: ['v', 'w', 'r', 'q', 'a'],
        });

        const match = await School.find({
            staff: '3'
        }).exec();

        console.log(match);
    })
    .catch(e => console.error(e));