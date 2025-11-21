import { DynamicIcon } from 'lucide-react/dynamic'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerTop}>
				<div className={styles.headerTopLeft}>
					<DynamicIcon name='map-pin' size={16} />
					<address className={styles.headerAddress}>
						Store Location: Lincoln- 344, Illinois, Chicago, USA
					</address>
				</div>
			</div>
		</header>
	)
}
