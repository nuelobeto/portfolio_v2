import { cn } from "@/lib/utils";

export const Logo = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn(
				"w-9 h-9 bg-primary rounded-sm flex items-center justify-center font-bold text-xl text-white",
				className
			)}>
			N
		</div>
	);
};
