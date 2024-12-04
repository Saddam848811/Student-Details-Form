////////////auto age concept////////////////////////////////////////////////////////////////////
var todaydate = new Date();

function birth1() {
    var birthdateValue = document.getElementById("birthdate").value;
    
	var birthdate = new Date(birthdateValue)
	
	var currentage = todaydate.getFullYear()-birthdate.getFullYear()
	
	document.getElementById("age").value = currentage;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////auto percent calulating////////////////////////////////////////////////
function calculatepercent() {
    // Use quotes to reference the element IDs
    var marks1 = parseFloat(document.getElementById("marks1").value)||0;
    var marks2 = parseFloat(document.getElementById("marks2").value)||0;
    var marks3 = parseFloat(document.getElementById("marks3").value)||0;
    var marks4 = parseFloat(document.getElementById("marks4").value)||0;
    var marks5 = parseFloat(document.getElementById("marks5").value)||0;
    
	var totalpercent = (marks1+marks2+marks3+marks4+marks5)/5;
	
	document.getElementById("percent").value = totalpercent;
	console.log(totalpercent)
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
const apiKey = '1bec983808d64cabb2bc239858ad6d0d';

function updateState() {
    var city = document.getElementById("city").value.trim();

    if (city) {
        var apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}&language=en`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    var state = '';
                    data.results.forEach(result => {
                        if (result.components.country === "India") {
                            state = result.components.state;
                            return; 
                        }
                    });

                    if (state) {
                        document.getElementById("state").value = state;
                    } else {
                        document.getElementById("state").value = "State not found";
                    }
                } else {
                    document.getElementById("state").value = "No result found";
                }
            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
                document.getElementById("state").value = "Error fetching state";
            });
    } else {
        document.getElementById("state").value = '';
    }
}