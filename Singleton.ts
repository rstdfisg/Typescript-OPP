class President {
    private static instance: President;

    private constructor() {
        // Hide the constructo
    }

    public static getInstance(): President {
        if (!President.instance) {
            President.instance = new President();
        }
        return President.instance;
    }

}


const s1 = President.getInstance();
const s2 = President.getInstance();

// President cant be instance : const s3 = new President() 

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}

// try copy : copy destroy the singleton
const s3 = Object.assign(Object.create(Object.getPrototypeOf(s1)), s1);
const s4 = Object.assign(Object.create(Object.getPrototypeOf(s1)), s1);
console.log(s3)
console.log(s4)

if (s4 === s3) {
    console.log('same');
} else {
    console.log('no');
}

