console.clear()
console.log("=========================================================================================================================================")
let data = [
    { name: 'Suketu Patel', email: 'suketupatel29@gmail.com', age: '21', gender: 'Male' },
    { name: 'Ashish Fatnani', email: 'ashish@gmail.com', age: '21', gender: 'Male' },
]

const VALIDATE = (() => {
    return {
        name: (name) => {
            if (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
                return true;
            } else {
                console.error("Name is not valid")
                return false
            }
        },
        email: (email) => {
            email = email.toLowerCase()
            if (data.every((item) => (item.email !== email))) {
                if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
                    return true
                } else {
                    console.error("E-mail is not valid")
                    return false
                }
            } else {
                console.error("E-mail already exists")
            }
        },
        age: (age) => {
            if (age < 100 && age >= 18) {
                return true
            } else {
                console.error("Invalid age input")
                return false
            }
        },
        gender: (gender) => {
            gender = gender.toLowerCase();
            if (gender === "male" || gender === "female") {
                return true
            } else {
                console.error("Invalid gender input")
                return false
            }
        },

    }
})();

const inputValidator = (userInfo) => {
    const { name, email, age, gender } = userInfo;
    if (VALIDATE.name(name)
        && VALIDATE.email(email.toLowerCase())
        && VALIDATE.age(age)
        && VALIDATE.gender(gender.toLowerCase())) {

        return true;

    } else {
        return false;
    }
}
const CRUD = (() => {
    return {
        create: (name, email, age, gender) => {
            if (inputValidator({ name, email, age, gender })) {
                data.push({
                    name: name,
                    email: email.toLowerCase(),
                    age: age,
                    gender: gender.toLowerCase()
                })
            } else {
                console.error("Cannot create new entry due to input error(s)")
            }
        },
        read: (email) => {
            let uNode = data.filter((item) => item.email === email)
            console.log(uNode)
        },
        update: (email, key, value) => {
            if (VALIDATE[key](value)) {
                let uNode = data.filter((item) => item.email === email)
                uNode[0][key] = value;
            } else {
                console.error(`${key} couldn't be updated`)
            }
        },
        delete: (email) => {
            let newData = data.filter((item) => item.email !== email)
            data = newData
        },
        sort: (key) => {
            console.log(">>>", data.sort((a, b) => (a[key] === b[key]) ? 0 : (a[key] > b[key] ? 1 : -1)))
        }
    }
})();
// CRUD.create("Suketu", "asd", "21", "Male");
// CRUD.create("Suketu", "asd@gmail.com", "21", "Male");
CRUD.create("Deep", "asd@gmsail.com", "21", "Male");
CRUD.update("suketupatel29@gmail.com", "email", "suketupatel291@gmail.com")
CRUD.update("suketupatel291@gmail.com", "name", "SuketuD Patel")
CRUD.update("suketupatel291@gmail.com", "age", "22")
console.log(data)
// CRUD.delete("suketupatel291@gmail.com")
console.log("After Delete: ", data)
CRUD.sort("name")