interface IObserver {
    onJobPosted(job: JobPost): void;
}

class JobPost {
    protected title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public getTitle() {
        return this.title;
    }
}

abstract class JobSeeker implements IObserver {
    protected name: string;
    protected platform: string;

    public constructor(name: string) {
        this.name = name;
        this.platform = '';
    }

    public onJobPosted(job: JobPost): void {
        // Do something with the job posting
        console.log(`[${this.platform}] : Hi ` + this.name + '! New job posted: ' + job.getTitle());
    }
}

class platform_A extends JobSeeker implements IObserver {
    platform = 'A';
}


class platform_B extends JobSeeker implements IObserver {

    public constructor(name: string) {
        super(name)
        this.platform = 'B';
    }
}

class JobPostings {
    protected observers: Array<IObserver> = [];

    protected notify(jobPosting: JobPost) {
        for (let observer of this.observers) {
            observer.onJobPosted(jobPosting);
        }
    }

    public attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    public addJob(jobPosting: JobPost) {
        this.notify(jobPosting);
    }
}


// Create subscribers
let AAA = new platform_A('Jack');
let BBB = new platform_B('Bob');

// Create publisher and attach subscribers
let jobPostings = new JobPostings();

jobPostings.attach(AAA);
jobPostings.attach(new platform_A('Bob'));
jobPostings.attach(BBB);
jobPostings.attach(new platform_B('jack'));

// Add a new job and see if subscribers get notified
jobPostings.addJob(new JobPost('Software Engineer'));
jobPostings.addJob(new JobPost('??'));