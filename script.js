//*************** 1 task *************
function task1() {
    var year = Number(prompt('Какой сейчас год?', ''));

    if (year === 2015) {
        alert('Вы правы!');
    } else {
        alert('С луны свалися? 2015!');
    }
}

//*************** 2 task *************
function task2() {
    var number = Number(prompt('Введите любое целое число?', ''));

    if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

//*************** 3 task *************
function task3() {
    var userLogin = prompt('Введите логин пользователя', ''),
        password = 'passw0rd';

    if (userLogin === 'admin') {
        password = prompt('Введите пароль', '');
        if (password === 'passw0rd') {
            alert('Welcome home!');
        } else if (password === null) {
            alert('Canceled');
        } else {
            alert('Wrong password');
        }
    } else if (userLogin === null) {
        alert('Canceled');
    } else {
        alert('Access denied');
    }
}


//*************** 4 task *************
function task4() {
    var a = 1,
        b = 3;
    var result = (a + b >= 3) ? 'Yep!' : 'Noup!';
    alert(result);
}


//*************** 5 task *************
function task5() {
    var name = 'admin';
    var text = name === 'admin' ? 'Hi' : name === 'manager' ? 'Hello' : name === '' ? 'no login' : ''
    alert(text);
}

task1();
task2();
task3();
task4();
task5();