// private and publlic in ts
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var hit = new User("binayak@sf", "askfbh");
console.log(hit.city);
