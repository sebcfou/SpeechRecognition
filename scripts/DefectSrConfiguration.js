class DefectSrConfiguration{



    constructor(numbers,commands, reasons){
        this.numbers = numbers;
        this.reasons = reasons;
        this.commands = commands;
        
        this.grammar = '#JSGF V1.0; grammar colors; ' ;
        this.grammar += ' <number> = '  + numbers.join(' | ') + ' '; 
        this.grammar += ' <command> = ' + commands.join(' | ') + ' ' ;  
        this.grammar += ' <reason> = ' + reasons.join(' | ') + ' ' ; 
        this.grammar += ' public <command> = [<number>] <command> [<reason>];' ;
        console.log("grammar rule = " + grammar);

    }

}

module.exports = DefectSrConfiguration;