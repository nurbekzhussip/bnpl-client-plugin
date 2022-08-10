import {MONTHS} from "../utils/constants";
import {moneyFormatter} from "../utils/formatters";
import {InfoIcon} from "../assets/Info";

import s from './style.css'

const App = ({theme='light',totalAmount}) => {
	const date = new Date();
	const average_payment = Math.floor(totalAmount/4);
	const first_payment = totalAmount - average_payment*3

	return (
		<div class={`${s.app} ${theme === 'dark' ? s.dark : s.light}`}>
			<h3 class={s.title}>График платежей <div title="График платежей может изменяться в зависимости от даты доставки заказа" class={s.tooltip}><InfoIcon/></div></h3>
			<div class={s.prepaymentInfo}>
				<span>Предоплата</span>
				<span>0 ₸</span>
			</div>
			<div class={s.stepperWrapper}>
				<div class={`${s.stepperItem} ${s.completed}`}>
					<div class={s.stepCounter} />
					<div class={s.stepName}>
						<h4>{`${date.getDate()} ${MONTHS[(date.getMonth())%12]}`}</h4>
						<span>{moneyFormatter.format(0)}</span>
					</div>
				</div>
				<div className={s.stepperItem}>
					<div className={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{`${date.getDate()} ${MONTHS[(date.getMonth() + 1) % 12]}`}</h4>
						<span>{moneyFormatter.format(first_payment)}</span>
					</div>
				</div>
				<div class={s.stepperItem}>
					<div class={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{`${date.getDate()} ${MONTHS[(date.getMonth()+2)%12]}`}</h4>
						<span>{moneyFormatter.format(average_payment)}</span>
					</div>
				</div>
				<div class={s.stepperItem}>
					<div class={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{`${date.getDate()} ${MONTHS[(date.getMonth()+3)%12]}`}</h4>
						<span>{moneyFormatter.format(average_payment)}</span>
					</div>
				</div>
				<div class={s.stepperItem}>
					<div class={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{`${date.getDate()} ${MONTHS[(date.getMonth()+4)%12]}`}</h4>
						<span>{moneyFormatter.format(average_payment)}</span>
					</div>
				</div>
			</div>
			<div class={s.line} />
			<div class={s.totalAmount}>
				<span class={s.totalAmountLabel}>Сумма</span>
				<span class={s.totalAmountValue}>{moneyFormatter.format(totalAmount)}</span>
			</div>
		</div>
	)
}

export default App;
