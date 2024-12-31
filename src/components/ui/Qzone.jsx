import { Title } from "./Title"

import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classroom from '../../assets/class.png'

export const Qzone = () => {
  return (
		<div className="bg-[#F3F3F3] px-4 py-5">
			<Title>Q-Zone</Title>
			<img src={swimming} alt="swimming" />
			<img src={playground} alt="playground" />
			<img src={classroom} alt="classroom" />
		</div>
	);
}