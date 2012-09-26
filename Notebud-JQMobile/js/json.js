//json object
//Mark Johnson
// This will populate our form so we can have easy access to local storage data. Quite frankly am lazy.

var json = {
	"note1": {
		"groups": ["Groups:", "Sports"],
		"notetitle": ["Title:","Grocery Shopping"],
		"noteinfo": ["Note:","This is a test. I have to pick up a few items at shoprite on thursday."],
		"date": ["Date:","June 16, 2012"],
		"items": ["Number of Items:","4"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note2": {
		"groups": ["Groups:", "Grocery"],
		"notetitle": ["Title:","Grocery Shopping"],
		"noteinfo": ["Note:","I have to pick up a few items at walmart on thursday."],
		"date": ["Date:","June 14, 2012"],
		"items": ["Number of Items:","19"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note3": {
		"groups": ["Groups:", "Grocery"],
		"notetitle": ["Title:","Clothes Shopping"],
		"noteinfo": ["Note:","I have to pick up a few items at walmart on thursday."],
		"date": ["Date:","June 17, 2012"],
		"items": ["Number of Items:","5"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note4": {
		"groups": ["Groups:", "Grocery"],
		"notetitle": ["Title:","Grocery Shopping"],
		"noteinfo": ["Note:","I have to pick up a few items at target on thursday."],
		"date": ["Date:","June 16, 2012"],
		"items": ["Number of Items:","4"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note5": {
		"groups": ["Groups:", "Grocery"],
		"notetitle": ["Title:","Grocery Shopping"],
		"noteinfo": ["Note:","I have to pick up a few items at target on thursday."],
		"date": ["Date:","June 14, 2012"],
		"items": ["Number of Items:","19"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
/////////////////////////////////////////////////////////////////////////////////////////////
	"note6": {
		"groups": ["Groups:", "Sports"],
		"notetitle": ["Title:","NFL Season Opener"],
		"noteinfo": ["Note:","Watch the game later."],
		"date": ["Date:","September 5, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note7": {
		"groups": ["Groups:", "Sports"],
		"notetitle": ["Title:","Eagles Game"],
		"noteinfo": ["Note:","Watch eagles game."],
		"date": ["Date:","September 9, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note8": {
		"groups": ["Groups:", "Sports"],
		"notetitle": ["Title:","75ers game"],
		"noteinfo": ["Note:","watcg pre season game later."],
		"date": ["Date:","October 1, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note9": {
		"groups": ["Groups:", "Sportst"],
		"notetitle": ["Title:","Phillies Game"],
		"noteinfo": ["Note:","Phillies game coming on later."],
		"date": ["Date:","June 16, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note10": {
		"groups": ["Groups:", "Sports"],
		"notetitle": ["Title:","Baseball tonight"],
		"noteinfo": ["Note:","Baseball tonight on ESPN."],
		"date": ["Date:","June 14, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
//////////////////////////////////////////////////////////////////////////////////////////////////	
	"note11": {
		"groups": ["Groups:", "Entertainment"],
		"notetitle": ["Title:","Clubbing again"],
		"noteinfo": ["Note:","I have to buy a fresh outfit for the club this weekend."],
		"date": ["Date:","June 17, 2012"],
		"items": ["Number of Items:","5"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note12": {
		"groups": ["Groups:", "Entertainment"],
		"notetitle": ["Title:","Father and Daughter time"],
		"noteinfo": ["Note:","Go to the aquarium with my daughter."],
		"date": ["Date:","June 14, 2012"],
		"items": ["Number of Items:","2"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note13": {
		"groups": ["Groups:", "Entertainment"],
		"notetitle": ["Title:","Clubbing"],
		"noteinfo": ["Note:","I have to buy a fresh outfit for the club this weekend."],
		"date": ["Date:","June 17, 2012"],
		"items": ["Number of Items:","2"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note14": {
		"groups": ["Groups:", "Entertainment"],
		"notetitle": ["Title:","Dinner Date"],
		"noteinfo": ["Note:","Me and my girlfriend will double date this weekend. Dinner and movie."],
		"date": ["Date:","June 16, 2012"],
		"items": ["Number of Items:","2"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note15": {
		"groups": ["Groups:", "Entertainment"],
		"notetitle": ["Title:","Double date"],
		"noteinfo": ["Note:","Double with dwayne and corsha this weekend."],
		"date": ["Date:","June 14, 2012"],
		"items": ["Number of Items:","4"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
///////////////////////////////////////////////////////////////////////////////////////////////	
	"note16": {
		"groups": ["Groups:", "Fitness"],
		"notetitle": ["Title:","Weekly workout"],
		"noteinfo": ["Note:","Run two miles today."],
		"date": ["Date:","July 9, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note17": {
		"groups": ["Groups:", "Fitness"],
		"notetitle": ["Title:","Weekly workout"],
		"noteinfo": ["Note:","Do upper body workout today."],
		"date": ["Date:","July 10, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note18": {
		"groups": ["Groups:", "Fitness"],
		"notetitle": ["Title:","Weekly workout"],
		"noteinfo": ["Note:","Do lower body workout today."],
		"date": ["Date:","July 11, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note19": {
		"groups": ["Groups:", "Fitness"],
		"notetitle": ["Title:","Weekly workout"],
		"noteinfo": ["Note:",".Run two miles today"],
		"date": ["Date:","July 12, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	},
	"note20": {
		"groups": ["Groups:", "Fitness"],
		"notetitle": ["Title:","Weekly workout"],
		"noteinfo": ["Note:","Run two miles today and do full workout."],
		"date": ["Date:","July 13, 2012"],
		"items": ["Number of Items:","0"],
		"attach": ["Attach a File:",""],
		"favorite": ["Favorite Note:","Yes"]
	}
};
