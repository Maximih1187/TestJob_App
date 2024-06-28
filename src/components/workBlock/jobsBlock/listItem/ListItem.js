import './listItem.css'
import iconAdd from './icons/IconAdd.png'
import iconDelet from './icons/iconDelet.png'

const ListItem = (props) => {
	return (
		<>
			<hr className='spase' />
			<div className="table__list">
				<div className="table__list-rows">
					<div className="table__list-icons">
						<img src={iconAdd} alt="" />
						<img src={iconDelet} alt="" />

					</div>
				</div>
				<div className="table__item-rows">Наименование работ</div>
				<div className="table__item-rows">Основная з/п</div>
				<div className="table__item-rows">Оборудование</div>
				<div className="table__item-rows">Накладные расходы</div>
				<div className="table__item-rows">Сметная прибыль</div>
			</div>
		</>


	);
}

export default ListItem;
