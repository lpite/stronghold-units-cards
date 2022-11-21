import { createEffect, createSignal, Show } from "solid-js"
import styles from "./UnitCard.module.css"


interface UnitCardProps {
	name: string,
	cost: number,
	power: number,
	flamingPower?: number,
	defense: number,
	speed: number,
	canDig: boolean,
	requires: string[],
	image: string
}

export default  function UnitCard({ name, cost, power, flamingPower, defense, speed, canDig, requires, image }: UnitCardProps) {
	  const [imagePath, setImagePath] = createSignal({default:""});

	  createEffect(async()=>{
	  	try{
			setImagePath(await import(`../../assets/${image}.png`)); 
	  	}catch(e){
	  		console.error(e)
	  	}
	  })
	return (
		<article class={styles["unit_card"]}>
			<img alt={name + " photo"} src={imagePath().default} class={styles["unit_image"]} />
			<ul class={styles["unit_stats"]}>
				<li class={styles["unit_stat"]}>
					<span>Cost: {cost}</span>
				</li>
				<li class={styles["unit_stat"]}>
					<span>Power: {power}/10</span>
				</li>
				<Show when={flamingPower !== undefined}>
					<li class={styles["unit_stat"]}>
						<span>Flaming power: {flamingPower}/10</span>
					</li>
				</Show>
				<li class={styles["unit_stat"]}>
					<span>Defense: {defense}/10</span>
				</li>
				<li class={styles["unit_stat"]}>
					<span>Speed: {speed}/10</span>
				</li>
				<li class={styles["unit_stat"]}>
					<span>Can dig: {canDig?	"yes":"no"}</span>
				</li>
				<li class={styles["unit_stat"]}>
					<span>Requires: {requires.toString()}</span>
				</li>
			</ul>		
			<span class={styles["unit_name"]}>{name}</span>
		</article>
	)
}