import CardFlip from './CardFlip';
import Container from '@/components/global/container';
import { CardSectionProps } from '@/types/card-section';

const CardSection: React.FC<CardSectionProps> = ({
	title,
	description,
	cards,
	columns = 4,
	enableAnimation = true, 
	showBorderBeam = true,
}) => (
	<div>
		<Container>
			<div className="flex flex-col items-center justify-center h-full">
				<div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
					<div className="flex items-center justify-center">
						<h2 className="text-4xl md:text-5xl lg:text-xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
							{title}
						</h2>
					</div>
					<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
						{description}
					</p>
				</div>
				<div className="relative flex items-center">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]" />
					<div
						className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-${columns} gap-5  
            md:gap-8 py-10 md:py-20 max-w-6xl`}
					>
						{cards.map((card, index) => (
							<CardFlip
								key={index}
								srcFront={card.srcFront}
								srcBack={card.srcBack}
								altFront={card.altFront}
								altBack={card.altBack}
								colorTo={card.colorTo}
								colorFrom={card.colorFrom}
								email={card.email}
								linkedIn={card.linkedIn}
								gitHub={card.gitHub}
								name={card.name}
								enableAnimation={enableAnimation}
								showBorderBeam={showBorderBeam}
							/>
						))}
					</div>
				</div>
			</div>
		</Container>
	</div>
);

export default CardSection;
