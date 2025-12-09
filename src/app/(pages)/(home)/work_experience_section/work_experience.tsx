import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { DateRange } from "@/types/date_range";

import cynfasLogoImage from "./assets/cynfas-logo.webp";
import drobleLogoImage from "./assets/droble-logo.webp";
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
        role: "Software Engineer",
        location: "Bangalore",
        timePeriod: new DateRange(new Date(2023, 6, 0), undefined),
        description: (className) => (
            <div className={className}>
                <p>
    					Engineered and launched high-performance B2B and B2C websites and applications, driving a 30% increase in user
    					engagement and retention. Built an AI automated tool for scheduling and posting content to a company’s Social
    					Media platforms, leading to a 45% increase in product sales.
    				</p>
            </div>
        )
    });

    static readonly droble = new WorkExperience({
        company: "Droble",
        icon: drobleLogoImage,
        location: "Remote",
        role: "Software Engineer",
        timePeriod: new DateRange(new Date(2025, 7, 0), new Date(2025, 11, 0)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed Cross-Platform IOS and Android Mobile Applications and dynamic and responsive Websites for clients, built using Flutter and React JS,
                    Next JS, Nest JS, Amazon Web Services and Typescript delivering and deployed scalable and pixel perfect software that satisfies client requirements.
                </p>
            </div>
        )
    });

    static readonly cynfas = new WorkExperience({
        company: "Cynfas",
        icon: cynfasLogoImage,
        location: "Remote",
        role: "Software Engineer",
        timePeriod: new DateRange(new Date(2023, 6, 0), new Date(2025, 4, 0)),
        description: (className) => (
            <div className={className}>
                <p>
                    Developed dynamic and responsive websites and applications for clients, utilizing a diverse set of technologies including React JS,
                    Next JS, JavaScript, TypeScript, Redux, Node JS and Spring Boot, delivering high-quality, scalable solutions tailored to client
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
        timePeriod: new DateRange(new Date(2019, 6, 0), new Date(2024, 4, 0)),
        description: (className) => (
            <div className={className}>
                <p>Secured second place in a college level Hackathon for building a Virtual Driving Test that helps prevent accidents.</p>

                <br />

                <p>Participated in several extra-curricular activities, including Labyrinth (Computer club) and chess club.</p>

            </div>
        )
    });

    static readonly laidlawMemorialSchool = new WorkExperience({
        company: "Laidlaw Memorial School and Junior College",
        icon: laidlawMemorialSchoolLogoImage,
        location: "Ketti",
        role: '12th Grade ISC',
        timePeriod: new DateRange(new Date(2019, 9, 0), new Date(2019, 9, 0)),
        description: (className) => (
            <div className={className}>
							<p>Secured highest score in 12th ISC Board Exams (School Level), scoring Full Marks in Computer Science Board Exam.</p>

							<br />

							<p>Editorial Prefect for the batch of 2018-2019.</p>
            </div>
        ),
    });

    static readonly values: WorkExperience[] = [
        // WorkExperience.freelance,
        WorkExperience.droble,
        WorkExperience.cynfas,
        WorkExperience.christUniversity,
        WorkExperience.laidlawMemorialSchool,
    ];
}
