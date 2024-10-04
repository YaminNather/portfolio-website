import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import wholyWebsiteThumbnailImage from "./assets/wholy-website-thumbnail.png";
import smartHomeThumbnailImage from "./assets/smart-home-thumbnail.jpg";

export enum Technology {
    nextJs,
    reactJs,
    postgreSql,
    aws,
    unity3D,
    firebase,
    arduino
}

export class Project {
    constructor(options: {
        readonly name: string,
        readonly description: ReactNode,
        readonly technologies: Technology[],
        readonly thumbnail: StaticImageData,
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
        this.thumbnail = options.thumbnail;
    }

    readonly name: string;
    readonly description: ReactNode;
    readonly technologies: Technology[];
    readonly githubUrl: string | null;
    readonly liveUrl: string | null;
    readonly videoUrl: string | null;
    readonly thumbnail: StaticImageData;
    
    static readonly eCommerceApplication: Project = new Project({
        name: "ECommerce Application",
        description: (
            <>
                <p>An eCommerce application for a food company.</p>
                <p>You can buy cookies and stuff.</p>
            </>
        ),
        technologies: [ Technology.nextJs, Technology.aws, Technology.postgreSql ],
        githubLink: 'https://www.github.com/YaminNather/wholy-website',
        liveUrl: "https://wholy-website.vercel.app",
        thumbnail: wholyWebsiteThumbnailImage,
    });
    
    static readonly SmartHome3D: Project = new Project({
        name: "3D Interactive Automated Smart Home",
        description: (
            <>
                <p>Allows users to control and explore their home via a 3D interface.</p>
                <p>You can buy cookies and stuff.</p>
            </>
        ),
        technologies: [ Technology.unity3D, Technology.firebase, Technology.arduino ],
        githubLink: 'https://github.com/YaminNather/UloSmart-3D-Interactive-Home-Automation',
        thumbnail: smartHomeThumbnailImage
    });
    
    static readonly values: Project[] = [
        Project.eCommerceApplication,
        Project.SmartHome3D,
        Project.eCommerceApplication,
    ];
}