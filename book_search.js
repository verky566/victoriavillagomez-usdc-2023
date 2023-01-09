/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 


const findSearchTermInBooks = (searchTerm, scannedTextObj) => {
     /** You will need to implement your search and 
    //* return the appropriate object here. */
    const result = {
      SearchTerm: searchTerm,
      Results: [],
    };
  
    if (!searchTerm) {
        result;
    }
  // arrow func - iterate nested JSON obj with forEach & includes methods
  
    scannedTextObj.forEach((text) => {
      const contentArr = text.Content;
      contentArr.forEach((data) => {
       // using the includes method to find the searchTerm
        if (data.Text.includes(searchTerm)) {
     // push matching results into func searchResult
        result.Results.push(searchResult(text.ISBN, data));
        }
      });
    });
    return result;
  };

// arrow function contains two parameters
// show the matching results from the function findSearchTermInBooks. 

 searchResult = (ISBN, scannedObj)  => ({
        "ISBN": ISBN,
        "Page": scannedObj.Page,
        "Line": scannedObj.Line
    });


/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",

        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}



/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/** Positive tests: tests that return a match. */
const test3result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test3result.searchTerm == "the" && test3result.scannedTextObj == twentyLeaguesIn) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", "the", twentyLeaguesOut);
    console.log("Received:", test3result);
}


/** Negative tests: tests that do not return any matches. */
const test4result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test4result.searchTerm !== "") {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", "the");
    console.log("Received:", test4result);
}


/** Case-sensitive tests: tests that match (for example) on “The” but not on “the”. */
const test5result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test5result.searchTerm !== "The") {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test5result.Results.length);
}