interface IInterviewer {
    askQuestions(): void;
}

class Developer implements IInterviewer {
    public askQuestions(): void {
        console.log('Asking about design patterns!')
    }
}

class CommunityExecutive implements IInterviewer {
    public askQuestions(): void {
        console.log('Asking about community building')
    }
}

abstract class HiringManager {
    interviewer: any;

    abstract makeInterviewer(): IInterviewer;

    public takeInterview() {
        this.interviewer = this.makeInterviewer();
        this.interviewer.askQuestions();
    }
}

class DevelopmentManager extends HiringManager {
    public makeInterviewer(): IInterviewer {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    public makeInterviewer(): IInterviewer {
        return new CommunityExecutive();
    }
}

let devManager = new DevelopmentManager();
devManager.takeInterview(); // Output: Asking about design patterns

let marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.

