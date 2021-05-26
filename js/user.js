'use strick';

function User(name, surname, age, isMale, email, isSubscribed){
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const userProto = new User();
 
userProto.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

User.prototype = userProto;

const users = [];

for(let i = 0; i < 100; i++){
    const user = new User(
        `Username${i}`,
        `Userurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);
}


//1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
const schoolAgeWomen = users.filter(isSchoolAgeWoman);
console.table(schoolAgeWomen);

function isSchoolAgeWoman(user){
    return user.age >= 6 && user.age <= 18 && !user.isMale;
}

//1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.
const schoolAgeWomenFullNames = schoolAgeWomen.map(getUserFullName);
console.table(schoolAgeWomenFullNames);


function getUserFullName(user){
    return user.getFullName();
}

//1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
const needUserEmail = users.find(isUserEmail);
console.table(needUserEmail);

function isUserEmail(user){
    return user.email = 'useremail99@gmail.com';
}

//1.4 Проверить, все ли пользователи подписаны (subscribed).
const subscribedUsers = users.filter(isSubUsers);
console.table(subscribedUsers);

function isSubUsers(user){
    // if(!isSubscribed ){
    return user.isSubscribed;
    // }
}







