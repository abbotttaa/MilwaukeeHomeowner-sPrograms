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
            "homeownersInsurance": ["yes"]
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
    		if(checkFullAddress(key, correctSelectionArray[key])){
    			return true;
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
