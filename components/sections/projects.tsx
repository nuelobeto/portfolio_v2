import { LINKS, PROJECTS } from "@/lib/constants";
import { Card } from "../ui/card";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
	return (
		<section id={LINKS[2].href.replace("#", "")} className="pt-16">
			<h2 className="font-semibold text-2xl">Projects</h2>

			<div className="mt-12 space-y-10">
				{PROJECTS.map((project, index) => (
					<Card
						key={index}
						className="flex flex-col sm:flex-row items-start gap-4 p-3">
						<div className="flex-1 w-full sm:max-w-[200px] aspect-video rounded-lg border">
							<Image
								src={project.image}
								alt={project.name}
								width={500}
								height={281.25}
								className="w-full aspect-video object-cover object-top rounded-lg"
							/>
						</div>
						<div className="flex-1">
							<div className="flex items-center flex-wrap gap-4 gap-y-1">
								<h3 className="font-semibold flex items-center flex-wrap gap-2 text-lg">
									<span>{project.name}</span>
									<div className="w-1 h-1 rounded-full bg-foreground" />
									{project.made_at && (
										<Badge className="bg-primary/15 text-primary border border-primary/20">
											Made @ {project.made_at}
										</Badge>
									)}
								</h3>

								<div className="flex items-center gap-2">
									<a
										href={project.website}
										target="_blank"
										rel="noopener noreferrer">
										<ExternalLinkIcon className="text-primary size-4" />
									</a>
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer">
											<FaGithub className="text-primary size-4" />
										</a>
									)}
								</div>
							</div>

							<p className="mt-3 text-muted-foreground sm:text-sm">
								{project.description}
							</p>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};
