var postsData = [{
        image: "images/pic1.jpg",
        subheading: " Another chune for you headtop, so you better watch when you speak on my name you know",
        content: "bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong bing bong"
    },
    {
        image: "images/pic2.jpg",
        subheading: "You feel you feel, burh im going out like hoo hoo hoo hoo",
        content: "grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git grrrrrrrah git git git bow skrrrt git git git "
    },
    {
        image: "images/pic3.jpg",
        subheading: "yeah yeah yeah yeah yeah yeah",
        content: "My girl she bad to the bone, ay Wait, these guys are watchin' I swear to God they be my clones Yeah, hey, huh Switchin' my clothes like my flows (what?) Switchin' my flows like my clothes (like what?) Keep on shootin' that gun, don't reload Ooh, ooh, now she want mess with my crew Cause the money come all out the roof Drive the Rari, that girl got no roof (skrt) Wait, what kind of Rari? 458 (damn) All of these niggas, they hate (they hate)"
    },
    {
        image: "images/pic4.jpg",
        subheading: "I like hip hop",
        content: "it's my favourite! it's the very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very best"
    },
    {
        image: "images/pic5.jpg",
        subheading: "HAAAAAAAAAAAAANh, it's ain't Kanye, it's MONTANA",
        content: "Loose cannon, he shot me so I had to do it Put him in the dirt, put him in it first I just sold a swammy with ten hommies on it When they mask up, comin' for your ice When they bare-faced, they comin for your life"
    },
    {
        image: "images/pic6.jpg",
        subheading: "Here in my garage, just bought this new Lamborghini here.",
        content: "It’s fun to drive up here in the Hollywood hills. But you know what I like more than materialistic things? Knowledge. In fact, I’m a lot more proud of these seven new bookshelves that I had to get installed to hold two thousand new books that I bought. It’s like the billionaire Warren Buffett says, “the more you learn, the more you earn.”"
    },
    {
        image: "images/pic7.jpg",
        subheading: "Diamonds are the hardest thing on earth",
        content: "Due to extensive research done by the University of Pittsburgh, diamond has been confirmed as the hardest metal known to man. The research is as follows. Pocket-protected scientists built a wall of iron and crashed a diamond car into it at 400 miles per hour, and the car was unharmed. They then built a wall out of diamond and crashed a car made of iron moving at 400 miles an hour into the wall, and the wall came out fine. They then crashed a diamond car made of 400 miles per hour"

    },

];

var myHTML = "";

for (var i = 0; i < postsData.length; i = i + 1) {
    console.log("value of i is " + i)
    myHTML = myHTML + '<div class="media">' +
        '<div class="media-left">' +
        '<a href="#">' +
        '<img class="media-object" src="' + postsData[i].image + '" alt="...">' +
        '</a>' +
        '</div>' +
        '<div class="media-body">' +
        '<h4 class="media-heading"> ' + postsData[i].subheading + '</h4>' +
        postsData[i].content +
        '</div>' +
        '</div>';
};
$(document).ready(function(){
  $(".r1p").html(myHTML);
})
