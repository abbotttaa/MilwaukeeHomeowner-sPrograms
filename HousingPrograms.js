$(document).ready(function() {
    $('#program-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ownership: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            propertyType: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            years: {
            	validators:{
            		notEmpty: {
            			message: 'Please select an Option.'
            		}
            	}
            },
            occupancy: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            buildingCode: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            foreclosure: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            mortgage: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            utilities: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            propertyTax: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            homeownersInsurance: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            litigation: {
              validators:{
                notEmpty: {
                  message: 'Please select an Option.'
                }
              }
            },
            familySize: {
            	validators:{
            		notEmpty: {
            			message: 'Please select an Option'
            		}
            	}
            },
            income: {
              validators:{
                notEmpty: {
                  message: 'Please supply your total household income.'
                }
              }
            },
            addressNumber: {
              validators:{
                notEmpty: {
                  message: 'Please supply your address number.'
                }
              }
            },
            addressName: {
              validators:{
                notEmpty: {
                  message: 'Please supply your address name.'
                }
              }
            },
            zip: {
              validators:{
                notEmpty: {
                  message: 'Please supply your zip code.'
                }
              }
            }
        }
    })
    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow")
    });
});

document.getElementById("button").onclick = function(e){
  e.preventDefault();
  hideAllPrograms(housingPrograms);
  checkAllPrograms(housingPrograms);
  scrollWin();
};

const milwaukeeAreaMedianIncome = {
    "1": "51750",
    "2": "58690",
    "3": "66000",
    "4": "73320",
    "5": "79190",
    "6": "85100",
    "7": "90940",
    "8": "96820"
  };

const milwaukeeWeatherizationIncome = {
    "1": "25151",
    "2": "32890",
    "3": "40628",
    "4": "48367",
    "5": "56106",
    "6": "63844",
    "7": "65295",
    "8": "66746"
  };

const housingPrograms = {
    "complianceLoanProgram": {
          "eligibilityRequirements": {
              "ownership": ["own"],
              "occupancy": ["yes"],
              "buildingCode": ["yes"],
              "propertyType": ["single", "duplex"],
              "propertyTax": ["yes", "plan"],
              "foreclosure": ["no"],
              "mortgage": ["yes", "noMortgage"],
          },
          "incomeEligibility": 50,
          "programId": "compliance-loan-program"
    },
    "strongHomesLoan": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "propertyTax": ["yes", "plan"],
            "mortgage": ["yes", "noMortgage"],
            "utilities": ["yes", "plan"],
        },
        "incomeEligibility": 120,
        "programId": "strong-homes-loan"
    },
    "targetedInvestmentNeighborhoods": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "propertyTax": ["yes"],
            "mortgage": ["yes", "noMortgage"],
            "addressName": {
                "Beerline": {
                    // Beerline Horizontal
                    "Capitol": { "min": 3000, "max": 3999 }, "Melvina": { "min": 3000, "max": 3999 }, "Abert": { "min": 3000, "max": 3999 }, "Vienna": { "min":1000  , "max": 3999 },
                    "Keefe": { "min": 99, "max":  499}, "Townsend": { "min": 99, "max": 499 }, "Concordia": { "min": 99, "max": 499 },  
                    // Beerline Vertical
                    "4th": { "min": 3500, "max": 3999 }, "3rd": { "min": 3500, "max": 3999 }, "2nd": { "min": 3500, "max": 3799 }, "1st": { "min": 3300, "max": 3799 },  
                    "Palmer": { "min":3300, "max": 3799 }, "Hubbard": { "min": 3300, "max": 3799 }, "Richards": { "min": 3300 , "max": 3499 }, "Holton": { "min": 3300, "max": 3500 },
                    "Buffum": { "min": 3300, "max": 3500 },
                },

                "Broady": {
                    // Broady Horizontal
                    "Thurston": { "min": 5121, "max": 5823 },"Carmen": { "min": 5502, "max": 5998 }, "Silver Spring": { "min": 5602, "max": 5820 },
                    // Broady Vertical
                    "60th": { "min": 5600, "max": 5739 },"58th": { "min": 5643, "max": 5735 },"57th": { "min": 5625, "max": 5735 },"56th": { "min": 5665, "max": 5735 },
                    "55th": { "min": 5682, "max": 5750 },
                },

                "Century City": {
                    // Century City Horizontal
                    "Capital": { "min": 2605, "max": 3301 }, "Roosevelt": { "min": 3517, "max": 3527 }, "Townsend": { "min": 2601, "max": 2999 }, "Burleigh": { "min": 2708, "max": 3410 },
                    "Hopkins": { "min": 2523, "max": 2527 }, "Concordia": { "min": 2523, "max": 2527 },
                    // Century City Vertical
                    "36th": { "min": 3201, "max": 3985 },"35th": { "min": 3122, "max": 3955 },"34th": { "min": 3104, "max": 3274 }, "33rd": { "min": 3101, "max": 3266 },"32nd": { "min": 3204, "max": 3257 },
                    "30th": { "min": 3100, "max": 3980 },"29th": { "min": 3108, "max": 3980 },"28th": { "min": 3103, "max": 3979 }, "27th": { "min": 3119, "max": 3979 },"26th": { "min": 3539, "max": 3966 },
                },

                "Layton Blvd": {
                // Layton Blvd Vertical
                    "31st": { "min": 701, "max": 1133 }, "30th": { "min": 702, "max": 1142 }, "29th": { "min": 700, "max": 1140 }, "28th": { "min": 702, "max": 1145 }, "Layton": { "min": 927, "max": 1147 },
                    "26th": { "min": 725, "max": 1139 }, "25th": { "min": 705, "max": 1133 }, "24th": { "min": 704, "max": 1139 },
                    // Layton Blvd Horizontal
                    "Pierce": { "min": 2403, "max": 3029 }, "National": { "min": 2405, "max": 3029 }, "Mineral": { "min": 2417, "max": 2612 }, "Scott": { "min": 2411, "max": 2622 }, 
                },

                "Lighthouse": {
                    //Lighthouse Vertical
                    "72nd": { "min": 5620, "max": 5950 }, "71st": { "min": 5738, "max": 5971 }, "70th": { "min": 5621, "max": 5970 }, "69th": { "min": 5606, "max": 5958 }, "68th": { "min": 5620, "max": 5974 },
                    "67th": { "min": 5620, "max": 5974 },
                    //Lighthouse Horizontal
                    "Silver Spring": { "min": 6704, "max": 7136 }, "Thurston": { "min": 6700, "max": 7167 }, "Carmen": { "min": 6700, "max": 7130 }, "Florist": { "min": 6701, "max": 7137 },
                },

                "Triblock": {
                    //Triblock Vertical
                    "56th": { "min": 2718, "max": 5511 }, "55th": { "min": 2720, "max": 3070 }, "54th": { "min": 2700, "max": 3067 }, "53rd": { "min": 2712, "max": 3073 }, "Burleigh": { "min": 5511, "max": 5877 },
                    //Triblock Horizontal
                    "Locust": { "min": 5318, "max": 5425 }, "Center": { "min": 5310, "max": 5530 },
                },

                "Walker Square": {
                    //Walker Square Vertical
                    "Cesar Chavez": { "min": 916, "max": 1036 }, "15th": { "min": 912, "max": 1139 }, "14th": { "min": 915, "max": 1134 }, "12th": { "min": 907, "max": 1137 }, "11th": { "min": 907, "max": 1138 },
                    "10th": { "min": 900, "max": 1139 }, "9th": { "min": 903, "max": 1139 },
                    //Walker Square Horizontal
                    "Walker": { "min": 915, "max": 1557 }, "Mineral": { "min": 902, "max": 1547 }, "Washington": { "min": 1005, "max": 1553 }, "Elgin": { "min": 1201, "max": 1498 }, "Scott": { "min": 910, "max": 1566 },
                },

                "Washington Park": {
                    //Washington Park Vertical
                    "35th": { "min": 1612, "max": 2052 }, "34th": { "min": 1611, "max": 2054 }, "33rd": { "min": 1611, "max": 2053 }, "32nd": { "min": 1604, "max": 2061 },
                    //Washington Park Horizontal
                    "Lloyd": { "min": 1604, "max": 2061 }, "Brown": { "min": 3320, "max": 3499 }, "Vine": { "min": 3201, "max": 3499 }, "Lisbon": { "min": 3200, "max": 3396 }, "Walnut": { "min": 3201, "max": 3426 },
                    "Galena": { "min": 3200, "max": 3450 },
                },
            },
        },
        "incomeEligibility": 80,
        "programId": "targeted-investment-neighborhoods"
    },
    "neighborhoodImprovementProgram": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "propertyTax": ["yes"],
            "mortgage": ["yes", "noMortgage"],
            "utilities": ["yes"],
            "homeownersInsurance": ["yes"],
            "neighborhood": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "141", "15", "16", "17", "18"],
        },
        "incomeEligibility": 60,
        "programId": "neighborhood-improvement-project"
    },
    "milwaukeeEnergyEfficiencyProgram": {
        "eligibilityRequirements": {
            "propertyType": ["single", "duplex", "triplex"],
            "propertyTax": ["yes"],
        },
        "incomeEligibility": null,
        "programId": "milwaukee-energy-efficiency-program"
    },
    "milwaukeeShinesProgram": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "propertyType": ["single", "duplex", "triplex"],
            "propertyTax": ["yes"],
        },
        "incomeEligibility": null,
        "programId": "milwaukee-shines-program"
    },
    "weatherizationProgram": {
        "eligibilityRequirements": {
        },
        "incomeEligibility": 100,
        "programId": "weatherization-program"
    },
    "rebuildingTogetherGreaterMilwaukee": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "propertyType": ["single", "duplex"],
            "propertyTax": ["yes", "plan"],
            "foreclosure": ["no"],
            "years": ["yes"]
        },
        "incomeEligibility": 50,
        "programId": "rebuilding-together-greater-milwaukee"
    },
    "homePreservationProgram":  {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "addressName": {
            	"47th": { "min": 2320, "max": 2399 }, "46th": { "min": 2318, "max": 2399 }, "45th": { "min": 2120, "max": 2399 }, "44th": { "min": 2119, "max": 2399 },
            	"42nd": { "min": 2102, "max": 2254 }, "41st": { "min": 2002, "max": 2399 }, "40th": { "min": 1305, "max": 2399 }, "39th": { "min": 1300, "max": 2399 }, 
            	"38th": { "min": 1301, "max": 2399 }, "37th": { "min": 1300, "max": 2399 }, "36th": { "min": 1300, "max": 2399 }, "35th": { "min": 1400, "max": 2399 },  
            	"34th": { "min": 1400, "max": 2399 }, "33rd": { "min": 1400, "max": 2399 }, "32nd": { "min": 1500, "max": 2399 }, "31st": { "min": 1500, "max": 2399 },
            	"Sherman": { "min": 2124, "max": 2399 }, "Grant": { "min": 2124, "max": 2399 }, 
            	"Lisbon": { "min": 3900, "max": 4431 }, "Sarnow": { "min": 3500, "max": 3823 },
            	"Meinecke": { "min": 3031, "max": 4599 }, "North": { "min": 3000, "max": 4242 }, "Garfield": { "min": 3000, "max": 4499 }, "Spaulding": { "min": 1, "max": 9999 }, "Lloyd": { "min": 3000, "max": 4530 },
            	"Brown": { "min": 3000, "max": 4199 }, "Vine": { "min": 3000, "max": 4199 }, "Roberts": { "min": 3000, "max": 4199 }, "Walnut": { "min": 3000, "max": 4199 }, 
            	"Galena": { "min": 3000, "max": 4199 }, "Cherry": { "min": 3300, "max": 4199 }, "Kisslich": { "min": 3299, "max": 4000 }, "Vliet": { "min": 3499, "max": 4000 }, "McKinley": { "min": 3699, "max": 4000 },
        	    },
        },
        "incomeEligibility": 80,
        "programId": "home-preservation-program"
    },
    "shermanParkNeighborhoodImprovementDistrict": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "propertyTax": ["yes", "plan"],
            "litigation": ["no"],
            "addressName": {
            	"51st": { "min": 2438, "max": 2999 }, "50th": { "min": 2431, "max": 2999 }, "49th": { "min": 2362, "max": 2999 }, "48th": { "min": 2351, "max": 3100 }, "47th": { "min": 2320, "max": 3100 },
            	"46th": { "min": 2400, "max": 3100 }, "45th": { "min": 2400, "max": 3100 }, "44th": { "min": 2400, "max": 3100 }, "43rd": { "min": 2400, "max": 3100 }, "42nd": { "min": 2400, "max": 3100 },
            	"41st": { "min": 2400, "max": 3100 }, "40th": { "min": 2400, "max": 3100 }, "39th": { "min": 2400, "max": 3100 }, "38th": { "min": 2400, "max": 3100 }, "37th": { "min": 2700, "max": 3100 },
            	"36th": { "min": 2700, "max": 3100 }, "35th": { "min": 2732, "max": 2878 }, "34th": { "min": 2732, "max": 2878 }, "33rd": { "min": 2802, "max": 2878 },
             	"Burleigh": { "min": 3500, "max": 4899 }, "Chambers": { "min": 3500, "max": 5000 }, "Locust": { "min": 3500, "max": 5000 }, "Hadley": { "min": 3500, "max": 5000 },
             	"Center": { "min": 3700, "max": 4899 }, "Clarke": { "min": 3700, "max": 4899 }, "Wright": { "min": 3700, "max": 4899 }, "Meinecke": { "min": 3700, "max": 4899 },
        	},
        },
        "incomeEligibility": null,
        "programId": "sherman-park-neighborhood-improvement-project"
    },
    "washingtonParkNeighborhoodImprovementDistrict": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "addressName": {
                "47th": { "min": 2320, "max": 2399 }, "46th": { "min": 2318, "max": 2399 }, "45th": { "min": 2120, "max": 2399 }, "44th": { "min": 2119, "max": 2399 },
                "42nd": { "min": 2102, "max": 2254 }, "41st": { "min": 2002, "max": 2399 }, "40th": { "min": 1305, "max": 2399 }, "39th": { "min": 1300, "max": 2399 }, 
                "38th": { "min": 1301, "max": 2399 }, "37th": { "min": 1300, "max": 2399 }, "36th": { "min": 1300, "max": 2399 }, "35th": { "min": 1400, "max": 2399 },  
                "34th": { "min": 1400, "max": 2399 }, "33rd": { "min": 1400, "max": 2399 }, "32nd": { "min": 1500, "max": 2399 }, "31st": { "min": 1500, "max": 2399 },
                "Sherman": { "min": 2124, "max": 2399 }, "Grant": { "min": 2124, "max": 2399 }, 
                "Lisbon": { "min": 3900, "max": 4431 }, "Sarnow": { "min": 3500, "max": 3823 },
                "Meinecke": { "min": 3031, "max": 4599 }, "North": { "min": 3000, "max": 4242 }, "Garfield": { "min": 3000, "max": 4499 }, "Spaulding": { "min": 1, "max": 9999 }, "Lloyd": { "min": 3000, "max": 4530 },
                "Brown": { "min": 3000, "max": 4199 }, "Vine": { "min": 3000, "max": 4199 }, "Roberts": { "min": 3000, "max": 4199 }, "Walnut": { "min": 3000, "max": 4199 }, 
                "Galena": { "min": 3000, "max": 4199 }, "Cherry": { "min": 3300, "max": 4199 }, "Kisslich": { "min": 3299, "max": 4000 }, "Vliet": { "min": 3499, "max": 4000 }, "McKinley": { "min": 3699, "max": 4000 },
                },
        },
        "incomeEligibility": null,
        "programId": "washington-park-neighborhood-improvement-project"
    },
    "LeadPoisoningPreventionProgram": {
        "eligibilityRequirements": {
            "ownership": ["own"],
            "occupancy": ["yes"],
            "buildingCode": ["no"],
            "propertyTax": ["yes", "plan"],
            "zip": [53206, 53208, 53209, 53210, 53212, 53216],
        },
        "incomeEligibility": 80,
        "programId": "lead-poisoning-prevention-program"
    }
}

function scrollWin() {
    window.scrollBy(0, 825);
}

function addHiddenClass(id){
    document.getElementById(id).classList.add("hidden");
}

function removeHiddenClass(id){
    document.getElementById(id).classList.remove("hidden");
}

function hideAllPrograms(housingPrograms){
    for(var key in housingPrograms){
        addHiddenClass(housingPrograms[key].programId);
    }

}

function checkAllPrograms(housingPrograms){
    for(var key in housingPrograms){
        if(checkProgramEligibility(housingPrograms[key])){
        	removeHiddenClass(housingPrograms[key].programId);
        }
    }
}

function checkProgramEligibility(housingProgram){
    var incorrectResponse = 0;
    for(var key in housingProgram){
        if(key === "eligibilityRequirements"){
            incorrectResponse += checkEligibilityRequirements(housingProgram[key]);
        }
        if(key === "incomeEligibility"){
            if(!checkIncomeEligibility(housingProgram[key], housingProgram.programId)){
                incorrectResponse ++;
            }
        }
    }
    if(incorrectResponse === 0){
        return true;
    }
    else{
        return false;
    }
}

function checkEligibilityRequirements(eligibilityRequirements){
    var incorrectResponse = 0;
    for(var key in eligibilityRequirements){
        if(!checkEligiblityParameter(key, eligibilityRequirements[key])){
          incorrectResponse++;
        }
    }
    return incorrectResponse;
}

function checkEligiblityParameter(eligibilityKey, correctSelectionArray){
	//var userInput = document.forms.form.elements[eligibilityKey].value;
	if(eligibilityKey === "addressName"){
		for(var key in correctSelectionArray){
            const potentialTin = correctSelectionArray[key];
            if(Object.keys(potentialTin).length > 2){
                for(var tinZone in potentialTin){
                    if(checkFullAddress(tinZone, potentialTin[tinZone])){
                        return true;
                    }
                }
            }
    		else{
                if(checkFullAddress(key, correctSelectionArray[key])){
    			 return true;
                }
    		}
    	}
    	return false;
    }
    if(correctSelectionArray.includes(document.forms.form.elements[eligibilityKey].value)){
        return true;
    }
    else{
        return false;
    }
}

function checkFullAddress(checkedStreet, rangeArray){
	let userInputAddressNumber = document.forms.form.elements.addressNumber.value;
	let userInputAddressName = document.forms.form.elements.addressName.value;
	if(userInputAddressName === checkedStreet){
		if(userInputAddressNumber > rangeArray.min && userInputAddressNumber < rangeArray.max){
    	return true;
		}
	}
	else{
	return false;
	}
}

function checkIncomeEligibility(maxIncomePercentAllowed, program){
    let familySize = document.forms.form.elements.familySize.value;
    let income = document.forms.form.elements.income.value;
    let medianIncome;
    if(program === "weatherization-program"){
        medianIncome = getIncomeForFamilySizeWeatherization(familySize);
    }
    else{
        medianIncome = getIncomeForFamilySize(familySize);
    }
    if(income <= ((maxIncomePercentAllowed/100) * medianIncome) || maxIncomePercentAllowed === null) {
      return true;
    }
}

function getIncomeForFamilySize(familySize){
    for(var key in milwaukeeAreaMedianIncome){
        if(key == familySize){
            return milwaukeeAreaMedianIncome[key];
        }
    }
}
function getIncomeForFamilySizeWeatherization(familySize){
    for(var key in milwaukeeWeatherizationIncome){
        if(key == familySize){
            return milwaukeeWeatherizationIncome[key];
        }
    }
}
