import { ReactNode } from "react";

import { DiFirebase, DiPostgresql } from "react-icons/di";
import { FaAws, FaUnity } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiArduino } from "react-icons/si";

export class Technology {
	constructor(options: ConstructorOptions) {
		this.name = options.name;
		this.logo = options.logo;
	}

	readonly name: string;
	readonly logo: (className?: string) => ReactNode;

	static readonly nextJs = new Technology({
		name: "NextJS",
		logo: (className) => <RiNextjsFill className={className} />,
	});

	static readonly postgreSql = new Technology({
		name: "PostgreSQL",
		logo: (className) => <DiPostgresql className={className} />,
	});

	static readonly aws = new Technology({
		name: "AWS",
		logo: (className) => <FaAws className={className} />,
	});

	static firebase = new Technology({
		name: "Firebase",
		logo: (className) => <DiFirebase className={className} />,
	});

	static readonly unity3d = new Technology({
		name: "Unity 3D",
		logo: (className) => <FaUnity className={className} />,
	});

	static readonly arduino = new Technology({
		name: "Arduino",
		logo: (className) => <SiArduino className={className} />,
	});

	static readonly values = [
		Technology.nextJs,
		Technology.postgreSql,
		Technology.aws,
		Technology.firebase,
		Technology.unity3d,
		Technology.arduino,
	];
}

interface ConstructorOptions {
	name: string,
	logo: (className?: string) => ReactNode,
}
