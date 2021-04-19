// function up(time, cb) {
//     setTimeout(() => {
//         if (time <= 8) {
//             cb(null, 'новий день')
//         } else {
//             cb('краще посплю ')
//         }
//     }, 100)
// }
//
// function brushYour(brush, cb) {
//     console.log('Йдем чистити зуби  ')
//     setTimeout(() => {
//         if (brush) {
//             cb(null, 'Чистимо зуби не менше 3 хв ');
//         } else {
//             cb('немає щітки')
//         }
//     }, 100)
// }
//
// function eat(eat, cb) {
//     setTimeout(() => {
//         if (eat) {
//             cb(null, 'ох як смачно ')
//
//         } else {
//             cb('забув приготувати ')
//
//         }
//     }, 200)
// }
//
// function dressed(mask, cb) {
//     console.log('вдягаємося ')
//     setTimeout(() => {
//         if (mask) {
//             cb(null, 'йду на пару ')
//         } else {
//             cb('звбув маску')
//         }
//     }, 500)
// }
//
// function goLessons(timeLeson, cb) {
//     setTimeout(() => {
//         console.log('Біля політехніки ');
//
//         if (timeLeson >= 8.30) {
//             cb(null, 'Запізнююсь на пару')
//         } else {
//             cb('фх вчасно ')
//         }
//     }, 900)
// }
//
// function goodTeacher(goodTeacher, cb) {
//     setTimeout(() => {
//         if (goodTeacher) {
//             cb(null, 'заходжу ')
//         } else {
//             cb('не хочу получати за запізнення ')
//         }
//     }, 250)
// }
//
// function goHome(go, cb) {
//     console.log('Чи пари закінчились ? ')
//     setTimeout(() => {
//         if (go) {
//             console.log(null,'пари закінчились  ')
//             cb('йдемо до дому')
//         } else {
//             console.log(' пари  не закінчились  ')
//             cb('слухаємо Чайковського ')
//         }
//     })
// }
// up(7, (err, day) => {
//     if (!err) {
//         console.log(day)
//         brushYour(true, (err, data) => {
//             if (!err) {
//                 console.log(data)
//                 eat(true, (err, data) => {
//                     if (!err) {
//                         console.log(data)
//                         dressed(true, (err, data) => {
//                             if (!err) {
//                                 console.log(data)
//                                 goLessons(8.40, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         goodTeacher(true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 goHome(false, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data)
//                                                     } else {
//                                                         console.log(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.log(err)
//                                             }
//                                         })
//                                     } else {
//                                         console.log(err);
//                                     }
//                                 })
//
//                             } else {
//                                 console.log(err)
//                             }
//                         })
//                     } else {
//                         console.log(err)
//                     }
//                 })
//             } else {
//                 console.log(err)
//             }
//         })
//
//     } else {
//         console.warn(err, 'Зроблю собі вихідний ')
//     }
//
// })


// function up(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time <= 8) {
//                 resolve('новий день')
//             } else {
//                 reject('краще посплю ')
//             }
//         })
//     })
// }
//
// function brushYour(brush) {
//     return new Promise((resolve, reject) => {
//         console.log('Йдем чистити зуби  ')
//         setTimeout(() => {
//             if (brush) {
//                 resolve('Чистимо зуби не менше 3 хв ');
//             } else {
//                 reject('немає щітки')
//             }
//         }, 100)
//     })
// }
//
// function eat(eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve('ох як смачно ')
//
//             } else {
//                 reject('забув приготувати ')
//
//             }
//         }, 200)
//     })
//
// }
//
// function dressed(mask) {
//     return new Promise((resolve, reject) => {
//         console.log('вдягаємося ')
//         setTimeout(() => {
//             if (mask) {
//                 resolve('йду на пару ')
//
//             } else {
//                 reject('звбув маску')
//
//             }
//
//         }, 500)
//     })
// }
//
// function goLessons(timeLeson) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Біля політехніки ');
//
//             if (timeLeson >= 8.30) {
//                 resolve('Запізнююсь на пару')
//             } else {
//                 reject('фх вчасно ')
//             }
//         }, 900)
//     })
//
// }
//
// function goodTeacher(goodTeacher) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goodTeacher) {
//                 resolve('заходжу ')
//             } else {
//                 reject('не хочу получати за запізнення ')
//             }
//         }, 250)
//     })
// }
//
// function goHome(go) {
//     return new Promise((resolve, reject) => {
//         console.log('Чи пари закінчились ? ')
//         setTimeout(() => {
//             if (go) {
//                 console.log('пари закінчились  ')
//                 resolve('йдемо до дому')
//             } else {
//                 console.log(' пари  не закінчились  ')
//                 reject('слухаємо Чайковського ')
//             }
//         },1500)
//     })
//
// }
// up(7)
//     .then(value => {
//         console.log(value);
//         return brushYour(true)
//     })
//     .then(value => {
//         console.log(value);
//         return eat(true)
//     })
//     .then(value => {
//         console.log(value);
//         return dressed(true)
//     })
//     .then(value => {
//         console.log(value);
//         return goLessons(8.40)
//     })
//     .then(value => {
//         console.log(value);
//         return goodTeacher(true)
//     })
//     .then(value => {
//         console.log(value);
//         return goHome(true)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })


function up(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time <= 8) {
                resolve('новий день')
            } else {
                reject('краще посплю ')
            }
        },797)
    })
}

function brushYour(brush) {
    return new Promise((resolve, reject) => {
        console.log('Йдем чистити зуби  ')
        setTimeout(() => {
            if (brush) {
                resolve('Чистимо зуби не менше 3 хв ');
            } else {
                reject('немає щітки')
            }
        }, 100)
    })
}

function eat(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                resolve('ох як смачно ')

            } else {
                reject('забув приготувати ')

            }
        }, 200)
    })

}

function dressed(mask) {
    return new Promise((resolve, reject) => {
        console.log('вдягаємося ')
        setTimeout(() => {
            if (mask) {
                resolve('йду на пару ')

            } else {
                reject('звбув маску')

            }

        }, 500)
    })
}

function goLessons(timeLeson) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Біля політехніки ');

            if (timeLeson >= 8.30) {
                resolve('Запізнююсь на пару')
            } else {
                reject('фх вчасно ')
            }
        }, 900)
    })

}

function goodTeacher(goodTeacher) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goodTeacher) {
                resolve('заходжу ')
            } else {
                reject('не хочу получати за запізнення ')
            }
        }, 250)
    })
}

function goHome(go) {
    return new Promise((resolve, reject) => {
        console.log('Чи пари закінчились ? ')
        setTimeout(() => {
            if (go) {
                console.log('пари закінчились  ')
                resolve('йдемо до дому')
            } else {
                console.log(' пари  не закінчились  ')
                reject('слухаємо Чайковського ')
            }
        },1500)
    })
}

async function myDay () {
    try {

        const up1 = await up(7);
        console.log(up1);

        let brushYour1 = await brushYour (true);
        console.log(brushYour1);

        let eat1 = await  eat (true);
        console.log(eat1);

        let dressed1 = await dressed(true);
        console.log(dressed1);

        let goLessons1 = await goLessons (8.20);
        console.log(goLessons1);

        let goodTeacher1 = await goodTeacher(true);
        console.log(goodTeacher1);

        let goHome1 = await goHome(true);
        console.log(goHome1);

    }
    catch (err) {
        console.log(err);

    }
}
myDay();