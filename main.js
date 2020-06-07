var obj = [

    {
        name: 'Jeremy',
        mass: 40,
        height: 1.72,
        age: 35
    },
    {
        name: 'Prince',
        mass: 60,
        height: 1.58,
        age: 29
    }
]

var displayBMI = () => {
    for (let i = 0; i < obj.length; i++) {
        let BMI = obj[i].mass / Math.pow(obj[i].height, 2)
        obj[i].BMI = BMI
        if (i > 0 && obj[i].BMI >= obj[i - 1].BMI) {
            console.log(obj[i].name + ' has the highest BMI of ' + obj[i].BMI + ' which is ideal for his age.')
        }
    }
}
displayBMI()
