
const character_id = Math.floor(Math.random() * 731) + 1;

fetch('https://www.superheroapi.com/api.php/883549028812063/' + character_id)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)

    //Basic Info
    var name = data.name;
    var image = data.image.url;

    // Power Stats
    var intelligence = data.powerstats.intelligence;
    var strength = data.powerstats.strength; 
    var speed = data.powerstats.speed;
    var durability = data.powerstats.durability;
    var power = data.powerstats.power;
    var combat = data.powerstats.combat;

    // Biography - Full Info
    var fullname = data.biography["full-name"];
    var alteregos = data.biography["alter-egos"];
    var aliases = data.biography["aliases"];
    var placeofbirth = data.biography["place-of-birth"];
    var firstappearance = data.biography["first-appearance"];
    var publisher = data.biography["publisher"];
    var alignment = data.biography["alignment"];

    $(".name").append(name);
    $(".image").attr("src", image)
    $(".intelligence").append(intelligence);
    $(".strength").append(strength);
    $(".speed").append(speed);
    $(".durability").append(durability);
    $(".power").append(power);
    $(".combat").append(combat);
    $(".fullname").append(fullname);
    $(".alteregos").append(alteregos);
    $(".aliases").append(aliases);
    $(".placeofbirth").append(placeofbirth);
    $(".firstappearance").append(firstappearance);
    $(".publisher").append(publisher);
    $(".alignment").append(alignment);

  })
  .catch(err => {
    // Do something for an error here
  })