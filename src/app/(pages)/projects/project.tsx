import { ReactNode } from "react";

export enum Technology {
    nextJs,
    reactJs,
    postgreSql,
    aws,
}

export class Project {
    constructor(options: {
        readonly name: string,
        readonly description: ReactNode,
        readonly technologies: Technology[],
        readonly githubLink?: string,
        readonly liveUrl?: string,
        readonly videoLink?: string,
    }) {
        this.name = options.name;
        this.description = options.description;
        this.technologies = options.technologies;
        this.githubUrl = options.githubLink ?? null;
        this.liveUrl = options.liveUrl ?? null;
        this.videoUrl = options.videoLink ?? null;
    }

    readonly name: string;
    readonly description: ReactNode;
    readonly technologies: Technology[];
    readonly githubUrl: string | null;
    readonly liveUrl: string | null;
    readonly videoUrl: string | null;
    
    static readonly eCommerceApplication: Project = new Project({
        name: "ECommerce Application",
        description: (
            <>
                <p>An eCommerce application for a food company.</p>
                <p>You can buy cookies and stuff.</p>
            </>
        ),
        technologies: [ Technology.nextJs, Technology.aws, Technology.postgreSql ],
        githubLink: 'https://www.github.com',
        liveUrl: "https://eatwholy.com",
    });
    
    static readonly values: Project[] = [
        Project.eCommerceApplication,
        Project.eCommerceApplication,
        Project.eCommerceApplication,
    ];
}