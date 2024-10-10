import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { DateRange } from "@/types/date_range";

import cynfasLogoImage from "./assets/cynfas-logo.webp";
import christUniversityLogoImage from "./assets/christ-university-logo.webp";
import laidlawMemorialSchoolLogoImage from "./assets/laidlaw-memorial-school-logo.png";

export class WorkExperience {
    constructor(options: {
        readonly company: string,
        readonly icon: StaticImageData,
        readonly role: string,
        readonly location: string,
        readonly timePeriod: DateRange,
        readonly description: (className: string) => ReactNode,
    }) {
        this.company = options.company;
        this.icon = options.icon;
        this.location = options.location;
        this.role = options.role;
        this.timePeriod = options.timePeriod;
        this.description = options.description;
    }

    readonly company: string;
    readonly icon: StaticImageData;
    readonly role: string;
    readonly location: string;
    readonly timePeriod: DateRange;
    readonly description: (className: string) => ReactNode;


    static readonly freelance = new WorkExperience({
        company: "Freelance",
        icon: cynfasLogoImage,
        role: "Software Developer",
        location: "Bangalore",
        timePeriod: new DateRange(new Date(2023, 6), new Date(2024, 9)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed four dynamic and responsive websites for various clients, utilizing a diverse set of technologies including React JS,
                    Next JS, JavaScript, TypeScript, Redux, Node JS and Spring Boot.
                </p>

                <br />

                <p>
                    Delivered high-quality, scalable solutions tailored to client
                    needs, demonstrating expertise in both frontend and backend development.
                </p>

            </div>
        )
    });

    static readonly cynfas = new WorkExperience({
        company: "Cynfas",
        icon: cynfasLogoImage,
        location: "Bangalore",
        role: "Software Developer",
        timePeriod: new DateRange(new Date(2023, 6), new Date(2024, 9)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed four dynamic and responsive websites for various clients, utilizing a diverse set of technologies including React JS,
                    Next JS, JavaScript, TypeScript, Redux, Node JS and Spring Boot.
                </p>

                <br />

                <p>
                    Delivered high-quality, scalable solutions tailored to client
                    needs, demonstrating expertise in both frontend and backend development.
                </p>

            </div>
        )
    });
    
    static readonly christUniversity = new WorkExperience({
        company: "Chirst Deemed to be University",
        icon: christUniversityLogoImage,
        location: "Bangalore",
        role: 'B.Sc. Computer Science, Mathematics and Electronics',
        timePeriod: new DateRange(new Date(2019, 6), new Date(2024, 4)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed four dynamic and responsive websites for various clients, utilizing a diverse set of technologies including React JS,
                    Next JS, JavaScript, TypeScript, Redux, Node JS and Spring Boot.
                </p>

                <br />

                <p>
                    Delivered high-quality, scalable solutions tailored to client
                    needs, demonstrating expertise in both frontend and backend development.
                </p>

            </div>
        )
    }); 

    static readonly laidlawMemorialSchool = new WorkExperience({
        company: "Laidlaw Memorial School and Junior College",
        icon: laidlawMemorialSchoolLogoImage,
        location: "Ketti",
        role: '12th Grade ISC',
        timePeriod: new DateRange(new Date(2019, 9), new Date(2019, 9)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed four dynamic and responsive websites for various clients, utilizing a diverse set of technologies including React JS,
                    Next JS, JavaScript, TypeScript, Redux, Node JS and Spring Boot.
                </p>

                <br />

                <p>
                    Delivered high-quality, scalable solutions tailored to client
                    needs, demonstrating expertise in both frontend and backend development.
                </p>

            </div>
        ),
    });

    static readonly values: WorkExperience[] = [
        WorkExperience.freelance,
        WorkExperience.cynfas,
        WorkExperience.christUniversity,
        WorkExperience.laidlawMemorialSchool,
    ];
}
