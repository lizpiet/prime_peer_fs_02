

$(function(){
    var monsterId = '';
    var cardArray =[];


    for( var i = 0; i < 6; i++) {
        monsterId = '/images/' + i;

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: monsterId
        }).done(function (response) {
            console.log(response);
            console.log(response.link);
            cardArray.push(response.link);

            //$('.getCards').on('click', function(){
            //    $('.cuteImg').append("<p><img src=\"" + response.link + "\"></p> <button class=\"exchange\"> Exchange Cards </button>");

            //    console.log("Appended");
            console.log("this is the cardArray", cardArray);
            function shuffle(array){
                var currentIndex = array.length, temporaryValue, randomIndex;

                while(0 !== currentIndex){
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array
                }
            }
            });

        }

console.log(cardArray);
});