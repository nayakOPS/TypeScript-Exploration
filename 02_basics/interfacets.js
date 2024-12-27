// interface in ts, basic overview of fields, its like loose form of class
var binayak = {
    _id: "ei",
    name: "jsfd",
    email: "hksfdh",
    googleID: 234,
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (couponname, discountGiven) {
        return 10;
    },
    githubID: "nayipos"
};
// binayak._id = "ahsd" cann't ressign and its only readonly
console.log(binayak);
console.log(binayak.startTrial());
