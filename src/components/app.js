import {MONTHS} from "../utils/constants";
import {moneyFormatter} from "../utils/formatters";

import s from './style.css'
import {addMonthsToDate, getShortDate} from "../utils/helpers";

const App = ({theme='light',totalAmount}) => {
	const params = (new URL(document.location)).searchParams;
	if(params.get('total')){
		totalAmount = params.get('total')
	}

	let date = new Date();

	if(params.get('date')){
		date = new Date(params.get('date'))
	}

	const average_payment = Math.floor(totalAmount/4);
	const first_payment = totalAmount - average_payment*3

	const date1 = addMonthsToDate(date, 1)
	const date2 = addMonthsToDate(date1, 1)
	const date3 = addMonthsToDate(date2, 1)
	const date4 = addMonthsToDate(date3, 1)

	return (
		<div class={`${s.app} ${theme === 'dark' ? s.dark : s.light}`}>
			<h3 class={s.title}>График платежей <div title="График платежей может изменяться в зависимости от даты доставки заказа" class={s.tooltip}><svg width="14" height="14" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.57223 0.837891C3.17405 0.837891 0.410156 3.60179 0.410156 6.99997C0.410156 10.3981 3.17405 13.162 6.57223 13.162C9.97041 13.162 12.7343 10.3981 12.7343 6.99997C12.7343 3.60179 9.97041 0.837891 6.57223 0.837891ZM6.57223 12.3404C3.62428 12.3368 1.23539 9.94792 1.23177 6.99997C1.23177 4.05532 3.62758 1.6595 6.57223 1.6595C9.51688 1.6595 11.9127 4.05532 11.9127 6.99997C11.9127 9.94462 9.51688 12.3404 6.57223 12.3404Z" fill="#0DBA26"/>
				<path d="M6.56914 3.61719C6.17805 3.61719 5.85352 3.92036 5.85352 4.28434C5.85352 4.65652 6.17805 4.9597 6.56914 4.9597C6.96762 4.9597 7.29133 4.65652 7.29133 4.28434C7.29133 3.92036 6.9668 3.61719 6.56914 3.61719ZM6.16162 6.20526H6.98323V10.0397H6.16162V6.20526Z" fill="#0DBA26"/>
			</svg></div></h3>
			<div class={s.prepaymentInfo}>
				<span>Предоплата</span>
				<span>0 ₸</span>
			</div>
			<div class={s.stepperWrapper}>
				<div class={`${s.stepperItem} ${s.completed}`}>
					<div class={s.stepCounter} />
					<div class={s.stepName}>
						<h4>{getShortDate(date)}</h4>
						<span>{moneyFormatter.format(0)}</span>
					</div>
				</div>
				<div className={s.stepperItem}>
					<div className={s.stepCounter}/>
					<div className={s.stepName}>
						<h4>{getShortDate(date1)}</h4>
						<span>{moneyFormatter.format(first_payment)}</span>
					</div>
				</div>
				<div className={s.stepperItem}>
					<div className={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{getShortDate(date2)}</h4>
						<span>{moneyFormatter.format(average_payment)}</span>
					</div>
				</div>
				<div class={s.stepperItem}>
					<div class={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{getShortDate(date3)}</h4>
						<span>{moneyFormatter.format(average_payment)}</span>
					</div>
				</div>
				<div class={s.stepperItem}>
					<div class={s.stepCounter} />
					<div className={s.stepName}>
						<h4>{getShortDate(date4)}</h4>
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
