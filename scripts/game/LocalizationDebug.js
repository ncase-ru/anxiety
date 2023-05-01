var localizationDebugVariables = {
    'Game.CLICK_TO_ADVANCE': {'values': [true, false]},
    'Game.FORCE_CANT_SKIP': {'values': [true, false]},
    'Game.FORCE_NO_VOICE': {'values': [true, false]},
    'Game.OVERRIDE_CHOICE_SPEAKER': {'values': ['fear_harm', 'fear_alone', 'fear_bad']},
    '_.INJURED': {'values': [true, false]},
    '_.SPECIAL_ATTACK': {'values': ['alone', 'bad', 'harm']},
    '_.TOP_FEAR': {'values': ['alone', 'bad', 'harm']},
    '_.a2_attack_1': {'values': ['alone', 'bad']},
    '_.a2_attack_2': {'values': ['alone', 'bad', 'harm']},
    '_.a2_attack_3': {'values': ['alone', 'bad', 'harm']},
    '_.a2_ending': {'values': ['fight', 'flight']},
    '_.a2_first_choice': {'values': ['louder', 'different', 'ignore']},
    '_.a2_first_danger': {'values': ['social', 'perv', 'meaning']},
    '_.a2_second_danger': {'values': ['netflix', 'law', 'butterfly', 'zombies', 'hitler', 'ignore']},
    '_.a3_ending': {'values': ['jump', 'walkaway']},
    '_.a4_fears_discussed': {'values': [0, 1, 2, 3]},
    '_.a4_talked_about_alone': {'values': [true, false]},
    '_.a4_talked_about_bad': {'values': [true, false]},
    '_.a4_talked_about_harm': {'values': [true, false]},
    '_.act1_ending': {'values': ['fight', 'flight']},
    '_.act1g': {'values': ['go', 'dont']},
    '_.apologized_for_hurt': {'values': [true, false]},
    '_.badnews': {'values': [true, false]},
    '_.catmilk': {'values': [true, false]},
    '_.factcheck': {'values': [true, false]},
    '_.fifteencigs': {'values': [true, false]},
    '_.hookuphole': {'values': [true, false]},
    '_.num_thanks': {'values': [0, 1, 2, 3]},
    '_.parasite': {'values': [true, false]},
    '_.partyinvite': {'values': ['yes', 'no', 'ignore']},
    '_.pokemon': {'values': [true, false]},
    '_.serialkiller': {'values': [true, false]},
    '_.subtweet': {'values': [true, false]},
    '_.whalepoop': {'values': [true, false]},
    '_.whitebread': {'values': [true, false]},
    'window.HACK_REPLAY.a2_ending': {'values': ['fight', 'flight']},
    'window.HACK_REPLAY.a3_ending': {'values': ['jump', 'walkaway']},
    'window.HACK_REPLAY.act1_ending': {'values': ['fight', 'flight']},
    'window.localStorage.continueChapter': {'values': ['', 'replay']}
};

Game.localizationDebug = function(){

    for (var [sectionId, sectionContent] of Object.entries(Game.sections)) {
        sectionContent.variables = [];
        for (var [variable, variableDict] of Object.entries(localizationDebugVariables)) {
            var regex = new RegExp("\\{\\{.*?" + variable.replace(".", "\\.") + ".*?\\}\\}", "i");
            if (regex.test(sectionContent.lines.join(''))) {
                sectionContent.variables.push(variable);

                if (!sectionContent.possibleValues) {
                    sectionContent.possibleValues = [];
                    for (var current of variableDict.values) {
                        sectionContent.possibleValues.push([current])
                    }
                } else {
                    var possibleValues = [];
                    for (var previous of sectionContent.possibleValues) {
                        for (var current of variableDict.values) {
                            possibleValues.push(previous.concat(current))
                        }
                    }
                    sectionContent.possibleValues = possibleValues;
                }
            }
        }
    }

    Game.gotoStraight = Game.goto;
    Game.goto         = Game.gotoAsk;

}


Game.gotoAsk = function(suggestedSectionID){

    var contentOfSelect = '';
    for (var [sectionId, sectionContent] of Object.entries(Game.sections)) {
        if (sectionContent.variables.length == 0) {
            contentOfSelect += `
                <option
                    value="${sectionId} -- 0"
                    ${sectionId == Game.currentSection ? 'selected' : ''}
                >${sectionId}</option>
            `;
        } else {
            var optGroup = '';
            for (var i = 0; i < sectionContent.possibleValues.length; ++i) {
                var name = sectionContent.variables.map(function(e, j) {return `${e}=${sectionContent.possibleValues[i][j]}`;}).join(', ');
                optGroup += `
                    <option
                        value="${sectionId} -- ${i}"
                        ${(sectionId == Game.currentSection) && (Game.currentVariablesIndex == i) ? 'selected' : ''}
                    >${name}</option>
                `;
            }
            contentOfSelect += `<optgroup label="${sectionId}">${optGroup}</optgroup>`;
        }
    }

    document.getElementById("debug_overlay").hidden = false;
    document.getElementById("debug_container").innerHTML = `
        Game want to go to: <b>${suggestedSectionID}</b><br>

        <button onclick="Game.gotoCloseAndGo('${suggestedSectionID}', -1)">
            Accept go to
        </button><br>

        <select id="selectSection" style="max-width: 90%">${contentOfSelect}</select><br>

        <button onclick="Game.gotoCloseAndGo(document.getElementById('selectSection').value, -3)">
            Go to selected
        </button><br>

        <button
            onclick="Game.gotoCloseAndGo('${Game.currentSection}', -2)"
            ${Game.currentSection ? '' : 'hidden'}
        >
            Replay ${Game.currentSection}, same variables
        </button><br>

        <button
            onclick="Game.gotoCloseAndGo('${Game.currentSection}', ${Game.currentVariablesIndex + 1})"
            ${
                    Game.currentSection
                &&
                    Game.sections[Game.currentSection]
                &&
                    Game.sections[Game.currentSection].possibleValues
                &&
                    (Game.sections[Game.currentSection].possibleValues.length - 1 > Game.currentVariablesIndex)
                ? '' : 'hidden'
            }
        >
            Replay ${Game.currentSection}, next variables
        </button><br>

        <button onclick="Game.reloadScenes()">
            Reload translation
        </button><br>

        <button onclick='HP.reset()'>
            Reset health
        </button><br>


    `;
}

Game.updateLocalizationDebugVariables = function() {
    for (var [variable, data] of Object.entries(localizationDebugVariables)) {
        try {
            data['currentValue'] = eval(variable);
        } catch(err) {
            data['currentValue'] = undefined;
        }
    }
}

Game.setGlobalsFromLocalizationDebugVariables = function() {
    for (var [variable, data] of Object.entries(localizationDebugVariables)) {
        variable = variable.split('.');
        for (var splitIndex = 0; splitIndex + 1 < variable.length; ++splitIndex) {
            var part = variable.slice(0, splitIndex + 1).join('.');
            if (typeof eval(part) === 'undefined') {
                eval(`${part} = {}`);
            }
        }
        variable = variable.join('.');
        eval(`${variable} = data['currentValue']`);
    }
}

Game.findCurrentVariablesIndex = function(sectionID) {
    if (!Game.sections[sectionID] || Game.sections[sectionID].variables.length == 0) {
        return -1;
    }

    var possibleValues = Game.sections[sectionID].possibleValues;
    var currentValues = [];
    for (var variable of Game.sections[sectionID].variables) {
        try {
            var value = eval(variable);
        } catch(err) {
            var value = undefined;
        }
        if (typeof value === 'undefined') {
            if (typeof possibleValues[0][0] === 'boolean') {
                value = false;
            } else if (typeof possibleValues[0][0] === 'string') {
                value = '';
            } else if (typeof possibleValues[0][0] === 'number') {
                value = 0;
            }
        }
        currentValues.push(value);
    }

    var index = 0;
    for (var values of Game.sections[sectionID].possibleValues) {
        if (JSON.stringify(values)==JSON.stringify(currentValues)) {
             return index;
        }
        index = index + 1;
    }

    return -2;

}

Game.loadFromVariablesIndex = function(sectionID, variablesIndex) {
    if (!Game.sections[sectionID] || Game.sections[sectionID].variables.length == 0) {
        return;
    }

    for (var i = 0; i < Game.sections[sectionID].variables.length; ++i) {
        variable = Game.sections[sectionID].variables[i].split('.');
        for (var splitIndex = 0; splitIndex + 1 < variable.length; ++splitIndex) {
            var part = variable.slice(0, splitIndex + 1).join('.');
            if (typeof eval(part) === 'undefined') {
                eval(`${part} = {}`);
            }
        }
        variable = variable.join('.');
        eval(`${variable} = Game.sections[sectionID].possibleValues[variablesIndex][i]`);
    }
}

Game.gotoCloseAndGo = function(sectionID, variablesIndex){
    document.getElementById("debug_overlay").hidden = true;

    if (variablesIndex == -1) {
        Game.updateLocalizationDebugVariables();
        Game.currentVariablesIndex = Game.findCurrentVariablesIndex(sectionID);
    } else if (variablesIndex == -2) {
        Game.setGlobalsFromLocalizationDebugVariables()
    } else if (variablesIndex == -3) {
        [sectionID, variablesIndex] = sectionID.split(' -- ');
        variablesIndex = parseInt(variablesIndex);
    }

    if (variablesIndex >= 0) {
        Game.updateLocalizationDebugVariables();
        Game.loadFromVariablesIndex(sectionID, variablesIndex);
        Game.currentVariablesIndex = variablesIndex;
    }

    Game.currentSection = sectionID;
    Game.gotoStraight(sectionID);
}

Game.reloadScenes = function() {
    document.getElementById("debug_container").hidden = true;

    (new RSVP.Promise(function(resolve){
		var loadPromises = [];
        Loader.sceneSources.forEach(function(src){
			loadPromises.push( Loader.loadScene(src) );
		});

		// Go go go!
		RSVP.all(loadPromises).then(resolve);
	})).then(function(){
        document.getElementById("debug_container").hidden = false;
    });
}
