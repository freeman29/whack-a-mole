import { Fragment, h } from "preact";
import { useContext } from "preact/hooks";
import styled from "styled-components";
import { GameContext } from ".";

const Soundboard = () => {
	const [context] = useContext(GameContext),
		{ setMutedState } = context;

	return (
		<Fragment>
			<MuteLabel htmlFor="mute">
				<span>Mute sound?</span>
				<input
					type="checkbox"
					id="mute"
					value="Mute"
					onChange={(e: MouseEvent) => ((e.target as HTMLInputElement).checked ? setMutedState(true) : setMutedState(false))}
				/>
			</MuteLabel>
			<audio id="intro" preload="true" src={require("./../public/audio/intro.mp3")} />
			<audio id="hit-sfx1" preload="true" src={require("./../public/audio/eee.mp3")} />
			<audio id="hit-sfx2" preload="true" src={require("./../public/audio/eep.mp3")} />
			<audio id="hit-sfx3" preload="true" src={require("./../public/audio/ergh.mp3")} />
			<audio id="hit-sfx4" preload="true" src={require("./../public/audio/mummy.mp3")} />
			<audio id="hit-sfx5" preload="true" src={require("./../public/audio/oof.mp3")} />
			<audio id="hit-sfx6" preload="true" src={require("./../public/audio/ooo.mp3")} />
			<audio id="hit-sfx7" preload="true" src={require("./../public/audio/ooo2.mp3")} />
			<audio id="hit-sfx8" preload="true" src={require("./../public/audio/ouch.mp3")} />
			<audio id="hit-sfx9" preload="true" src={require("./../public/audio/ow.mp3")} />
			<audio id="hit-sfx10" preload="true" src={require("./../public/audio/waa.mp3")} />
			<audio id="hit-sfx11" preload="true" src={require("./../public/audio/waa2.mp3")} />
			<audio id="hit-sfx12" preload="true" src={require("./../public/audio/whatthe.mp3")} />
			<audio id="hit-sfx13" preload="true" src={require("./../public/audio/ya.mp3")} />
			<audio id="hit-sfx14" preload="true" src={require("./../public/audio/doh.mp3")} />
			<audio id="hit-sfx15" preload="true" src={require("./../public/audio/meanie.mp3")} />
			<audio id="hit-sfx16" preload="true" src={require("./../public/audio/ouchie.mp3")} />
			<audio id="gameover-sfx1" preload="true" src={require("./../public/audio/alldone.mp3")} />
			<audio id="gameover-sfx2" preload="true" src={require("./../public/audio/enough.mp3")} />
			<audio id="gameover-sfx3" preload="true" src={require("./../public/audio/gameoverman.mp3")} />
			<audio id="gameover-sfx4" preload="true" src={require("./../public/audio/retreat.mp3")} />
			<audio id="gameover-sfx5" preload="true" src={require("./../public/audio/runaway.mp3")} />
			<audio id="gameover-sfx6" preload="true" src={require("./../public/audio/surrender.mp3")} />
			<audio id="replay1" preload="true" src={require("./../public/audio/bringiton.mp3")} />
			<audio id="replay2" preload="true" src={require("./../public/audio/gameon.mp3")} />
			<audio id="replay3" preload="true" src={require("./../public/audio/letsdothis.mp3")} />
			<audio id="replay4" preload="true" src={require("./../public/audio/letsgo.mp3")} />
			<audio id="replay5" preload="true" src={require("./../public/audio/yoreadyforthis.mp3")} />
		</Fragment>
	);
};

const MuteLabel = styled.label`
	bottom: 1.5rem;
	position: absolute;
	right: 1.5rem;
`;

export default Soundboard;