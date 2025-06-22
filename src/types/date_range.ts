export class DateRange {
    constructor(readonly start: Date, readonly end?: Date) {}
    
    toLocaleDateString(locales: string | string[], options ?: Intl.DateTimeFormatOptions) {
        const startDateString = this.start.toLocaleDateString(locales, options);
        const endDateString = this.end?.toLocaleDateString(locales, options) ?? 'Present';
        return `${startDateString} - ${endDateString}`;
    }
    
    toString(): string {
        const formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
        
        return this.toLocaleDateString("en-IN", formatOptions);
    }
}
