
const db = [
    {
        username: "p",
        password: "testuser",
        First_name: "pipi",
        Last_name: "pi",
        email: "p@pipi.com",
        dateOfBirth: "27-04-2023"
    }
];

var onlineUser = null;


function addToDB(userID, pass, fname, lname, mail, birthDate) {
    newUser = {
        username: userID,
        password: pass,
        First_name: fname,
        Last_name: lname,
        email: mail,
        dateOfBirth: birthDate
    }
    db.push(newUser);

}

function verifyUser(UserID, pass) {
    for (let i = 0; i < db.length; i++) {
        let user = db[i];
        if (user.username === UserID && user.password === pass) {
            return true;
        }
    }
    return false;
}
