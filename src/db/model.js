const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'JEC_quora_db',
    username: 'JEC_user',
    password: 'JEC_pass'
})

const COL_ID_DEF = {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}

const COL_QUESTION_DEF = {
    type: sequelize.DataTypes.STRING(200),
    allowNull: false
}

const COL_ANSWER_DEF = {
    type: sequelize.DataTypes.STRING(500),
    allowNull: false
}


// User database structure

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF,
    rollno: {
        type: sequelize.DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    name: {
        type: sequelize.DataTypes.STRING(25),
        allowNull: false
    },
    branch: {
        type: sequelize.DataTypes.STRING(3),
        allowNull: false
    },
    semester: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false
    }

})



const Questions = db.define('question', {
    id: COL_ID_DEF,
    que: COL_QUESTION_DEF,
    upvote: {
        type: sequelize.DataTypes.INTEGER
    },
    downvotes: {
        type: sequelize.DataTypes.INTEGER
    }
})

const Answers = db.define('answers', {
    id: COL_ID_DEF,
    ans: COL_ANSWER_DEF,
    upvote: {
        type: sequelize.DataTypes.INTEGER
    },
    downvotes: {
        type: sequelize.DataTypes.INTEGER
    } 
})


Users.hasMany(Questions)
Questions.belongsTo(Users)

Questions.hasMany(Answers)
Answers.belongsTo(Questions)

Users.hasMany(Answers)
Answers.belongsTo(Users)

module.exports = {
    db,
    Users,
    Questions,
    Answers
}