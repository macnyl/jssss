//1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
const season = prompt('Enter number:');
switch(season){
    case '4':
        alert('Winter');
        break;
    case '3':
        alert('Spring');
        break;
    case '2':
        alert('Summer');
        break;
    case '1':
        alert('Autumn');
        break;
    default:
        alert('No such value!');    
}


//2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = prompt('Enter your value:');
switch(month){
    case '12':
    case '11':
    case '10':
        alert('Winter');
        break;
    case '9':
    case '8':
    case '7':
        alert('Spring');
        break;
    case '6':
    case '5':
    case '4':
        alert('Summer');
        break;
    case '3':
    case '2':
    case '1':
        alert('Autumn');
        break;
    default:
        alert('No such value!');
}

//3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)
const week = prompt('Enter the values of the day of the week');
switch(week) {
    case '7':
        alert('Sunday');
        break;
    case '6':
        alert('Saturday');
        break;
    case '5':
        alert('Friday');
        break;
    case '4':
        alert('Thursday');
        break;
    case '3':
        alert('Wednesday');
        break;
    case '2':
        alert('Tuesday');
        break;
    case '  1':
        alert('Monday');
        break;
    default:
        alert('No such value!');
}

//4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const decal = prompt('Enter value:')
switch(decal){
    case '10':
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
    case '1':
        alert('One Decal');
        break;
    case '20':
    case '19':
    case '18':
    case '17':
    case '16':
    case '15':
    case '14':
    case '13':
    case '12':
    case '11':
        alert('Two Decal');
        break;
    case '31':    
    case '30':
    case '29':
    case '28':
    case '27':
    case '26':
    case '25':
    case '24':
    case '23':
    case '22':
    case '21':
        alert('Three Decal');
        break;
    default:
        alert('No such value!');
}