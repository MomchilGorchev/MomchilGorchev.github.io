// Sample JavaScript
(function(){
    'use strict';
    console.log('Hello world!');

    var ddb =  $('#dropdown-button');

    ddb.dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button
    });

})();
