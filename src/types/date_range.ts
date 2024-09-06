export class DateRange {
    constructor(readonly start: Date, readonly end: Date) {}
    
    toLocaleDateString(locales: string | string[], options ?: Intl.DateTimeFormatOptions) {
        return `${this.start.toLocaleDateString(locales, options)} - ${this.end.toLocaleDateString(locales, options)}`;
    }
    
    toString(): string {
        const formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
        
        return this.toLocaleDateString("en-IN", formatOptions);
    }
}