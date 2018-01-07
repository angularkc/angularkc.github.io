export class IVenue {
    public name: string;
}

export class IMeetup {
    public name: string;
    // public local_date: string;
    // public local_time: string;
    public time: number;
    public venue: IVenue;
    public description: string;
    public link: string;
    
}
