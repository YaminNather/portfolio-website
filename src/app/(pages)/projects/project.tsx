import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { Technology } from "./technology"; 

import wholyWebsiteThumbnailImage from "./assets/wholy-website-thumbnail.png";
import smartHomeThumbnailImage from "./assets/smart-home-thumbnail.jpg";
import musicPlayerThumbnailImage from "./assets/music-player.jpg";
import itKonnectThumbnailImage from "./assets/itkonnect_thumbnail.png";
import myICareThumbnailImage from "./assets/myicare_thumbnail.png";
import micsysThumbnailImage from "./assets/micsys-thumbnail.png";

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
                <p>
                    An online storefront that provides you the convenience of purchasing delicious handcrafted cookies infused 
                    with the irresistible flavors of blueberry, pineapple, strawberry, and fig right from the comfort of your home.
                </p>
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
                <p>3D Automated Smart Home application offers a fully immersive experience, allowing users to virtually explore and interact with a digital replica of their home.</p>
            </>
        ),
        technologies: [ Technology.unity3d, Technology.firebase, Technology.arduino ],
        githubLink: 'https://github.com/YaminNather/UloSmart-3D-Interactive-Home-Automation',
        thumbnail: smartHomeThumbnailImage
    });

	static readonly MusicPlayer = new Project({
		name: "Music Player Application",
		description: (
			<>
				<p>A sleek and modern music player app built using Jetpack Compose for the UI and Media3 ExoPlayer for media playback with amazing user experience.</p>
			</>
		),
		technologies: [ Technology.jetpackCompose, Technology.aws ],
		githubLink: 'https://github.com/YaminNather/MusicPlayer',
		thumbnail: musicPlayerThumbnailImage,
	});

	static readonly ItKonnect = new Project({
		name: "ITKonnect",
		description: (
			<>
				<p>Built a responsive website for ITKonnect to showcase IT services, focusing on clean UI, performance optimization, and cross-browser compatibility.</p>
			</>
		),
		technologies: [ Technology.nextJs, Technology.aws ],
		thumbnail: itKonnectThumbnailImage,
        liveUrl: 'https://i-konnect-website.vercel.app',
	});

	static readonly Micsys = new Project({
		name: "Micsys",
		description: (
			<>
				<p>Developed a modern, responsive website for Microsystems to highlight their IT solutions and services, with emphasis on clean design, scalability, and smooth user experience.</p>
			</>
		),
		technologies: [ Technology.nextJs, Technology.aws ],
		thumbnail: micsysThumbnailImage,
        liveUrl: 'https://micsys-website.vercel.app',
	});
    
    
	static readonly MyICare = new Project({
		name: "ICare",
		description: (
			<>
				<p>Created a responsive website for I-Care to present showcase their IT services, focusing on intuitive navigation, mobile optimization, and modern UI design.</p>
			</>
		),
		technologies: [ Technology.nextJs, Technology.aws ],
		thumbnail: myICareThumbnailImage,
        liveUrl: 'https://i-care-website.vercel.app',
	});

    
    static readonly values: Project[] = [
        Project.eCommerceApplication,
        Project.SmartHome3D,
        Project.MyICare,
        Project.MusicPlayer,
        Project.Micsys,
        Project.ItKonnect,
    ];
}
