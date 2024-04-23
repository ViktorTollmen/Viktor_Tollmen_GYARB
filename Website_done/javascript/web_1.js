// Array of texts to cycle through
var textList = [
    "Napoleon was scared of cats!",
    "Australia lost a war against birds!",
    "In 1518 there was an epidemic known as 'The Dancing Plague'",
    "Boston had a syrup flood!",
    "Thomas Edison electrocuted an elephant",
    "A war started because someone stole an oak bucket",
    // Add more texts as needed
];

var longFact = [
    "Napoleon Bonaparte, the formidable French military leader, had a peculiar fear of cats. Legend has it that he believed cats brought him bad luck. It's said that during his exile on the island of Elba, he was convinced that a black cat crossed his path just before his defeat at the Battle of Waterloo.",
    "In 1932, Australia faced an unusual enemy – emus. The government deployed soldiers armed with machine guns to deal with an emu overpopulation problem. However, the soldiers found it challenging to hit the agile birds, and the emus ultimately emerged victorious in what is now humorously referred to as 'The Great Emu War.'",
    "In Strasbourg, Alsace, in 1518, a bizarre epidemic known as the Dancing Plague occurred. Hundreds of people started dancing uncontrollably in the streets for days, and some even danced themselves to death. The cause remains uncertain, but it's suspected to be a combination of stress, malnutrition, and a form of mass hysteria.",
    "In 1919, a massive tank containing over two million gallons of molasses burst in Boston, causing a deadly flood. The sticky substance rushed through the streets at a speed of 35 miles per hour, wreaking havoc. This peculiar event is known as the Great Molasses Flood.",
    "Thomas Edison, in his bid to discredit alternating current (AC) as a method of electrical power distribution championed by Nikola Tesla, electrocuted animals to demonstrate the dangers of AC. In 1903, he famously electrocuted Topsy, a Coney Island elephant, in a public spectacle to prove his point.",
    "In 1325, a conflict known as the War of the Oaken Bucket took place between the Italian city-states of Modena and Bologna. The cause? A stolen bucket. Modenese soldiers managed to snatch a bucket from a well in Bologna, leading to a skirmish that became a full-blown war. Modena ultimately won, and the bucket is still displayed as a trophy in Modena's bell tower.",
]

function rndno()
{
    var x = Math.floor((Math.random()* textList.length -1) + 1)
    return x
}


function new_fact()
{
    // var x = Math.floor((Math.random()* textList.length -1) + 1)
    // console.log(x)

    // Get the element to change
    var textElement = document.getElementById("text_text");

    // Get the current text
    var currentText = textElement.textContent;

    // Find the index of the current text in the list
    var currentIndex = textList.indexOf(currentText);

    // If the current text is the last one, start over; otherwise, move to the next text
    var nextIndex = (currentIndex === rndno()) ? 0 : rndno();

    // Set the new text
    textElement.textContent = textList[nextIndex];

    var textElement1 = document.getElementById("more_text");

    // var textElement2 = document.getElementById("text_text");

    var currentText = textElement.textContent;

    var currentIndex = textList.indexOf(currentText);

    textElement1.textContent = longFact[currentIndex];

}

function previous_fact()
{

    // Get the element to change
    var textElement = document.getElementById("text_text");

    // Get the current text
    var currentText = textElement.textContent;

    // Find the index of the current text in the list
    var currentIndex = textList.indexOf(currentText);

    // If the current text is the last one, start over; otherwise, move to the next text
    var lastIndex = (currentIndex === 0) ? 5 : currentIndex - 1;

    // Set the new text
    textElement.textContent = textList[lastIndex];

    var textElement1 = document.getElementById("more_text");

    var currentText = textElement.textContent;

    var currentIndex = textList.indexOf(currentText);

    var lastIndex = (currentIndex === 0) ? 5 : currentIndex - 1;

    textElement1.textContent = longFact[lastIndex];
}