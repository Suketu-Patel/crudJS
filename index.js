console.clear()
let data = [
    { name: 'Suketu Patel', email: 'suketupatel29@gmail.com', age: '21', gender: 'Male' },
    { name: 'Ashish Fatnani', email: 'ashish@gmail.com', age: '21', gender: 'Male' },
]
const inputValidation = (name, email, age, gender) => {
    //To check whether the entered username is already present
    if (data.every((item) => (item.email === email))) {
        console.error("Email already exists")
        return false;
    } else {
        if (
            (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(name)   //Checks if the given name is valid
                &&
                (age < 100 && age >= 18)                        //checks if the age is withing the range
                && 
                (gender === "male" || gender === "female")      //checks if the input is none other then male or female
                &&
                ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) //checks if it is a valid email
            )
        ) {
            return true
        }
        return false;
    }

}
function create(name, email, age, gender) {
    if (inputValidation(name, email.toLowerCase(), age, gender.toLowerCase())) {
        data.push({ name: name, email: email.toLowerCase(), age: age, gender: gender })
    } else {
        console.error("Cannot create new entry due to input error")
    }
}
function update(key, value) {
    data[key] = value;
}

function read() {
    return data;
}

function deleter(key) {
    console.log(`${key}: ${data[key]} deleted`)
    delete data[key]
}
create("Harsh Umaretiya ", "akjsgd@gmail.com", "21", "Male")
console.log(read())