import { ReactNode } from "react";

import { DiFirebase, DiPostgresql } from "react-icons/di";
import { FaAws, FaUnity } from "react-icons/fa";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiArduino, SiGo, SiJetpackcompose, SiMysql, SiNestjs, SiSpringboot, SiTimescale } from "react-icons/si";

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

  static readonly flutter = new Technology({
    name: "Flutter",
    logo: (className) => <RiFlutterFill className={className} />,
  });

  static readonly spring = new Technology({
    name: "Spring",
    logo: (className) => <SiSpringboot className={className} />,
  });

  static readonly golang = new Technology({
    name: "Golang",
    logo: (className) => <SiGo className={className} />,
  });

	static readonly postgreSql = new Technology({
		name: "PostgreSQL",
		logo: (className) => <DiPostgresql className={className} />,
	});

	static readonly timescaleDb = new Technology({
		name: "TimescaleDB",
    logo: (className) => <SiTimescale className={className} />,
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

	static readonly jetpackCompose = new Technology({
		name: "Jetpack Compose",
		logo: (className) => <SiJetpackcompose className={className} />
	});
	
	static readonly nestJs = new Technology({
		name: "NestJS",
		logo: (className) => <SiNestjs className={className} />
	});

	static readonly mySql = new Technology({
		name: "MySQL",
		logo: (className) => <SiMysql className={className} />
	});

	static readonly values = [
		Technology.nextJs,
    Technology.flutter,
		Technology.jetpackCompose,

    Technology.spring,

		Technology.postgreSql,
    Technology.timescaleDb,

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
