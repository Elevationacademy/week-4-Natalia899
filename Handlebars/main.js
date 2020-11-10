var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
        {name: "The weird dude", description: "Quick with a smile", socialNetwork: true},
        {name: "Taylor", description: "Just Taylor", socialNetwork: false}
    ]
}

var source = $('#class-template').html();
var template = Handlebars.compile(source);
var newHTML = template(classData);

// append our new html to the page
$('.classroom').append(newHTML);

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]