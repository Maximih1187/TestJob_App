import './jobsBlock.css'
import Navbar from '../navbar/Navbar';
// import iconAdd from './icons/IconAdd.png'
// import iconDelet from './icons/iconDelet.png'
import ListItem from './listItem/ListItem';
import { useEffect } from 'react';



const JobsBlock = () => {
	const myId = 130018;
	const qweryGetList = 'http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/list'
	const qweryDelet = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${130018}/delete`

	const qweryUpdate = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/123/update`


	const body = {
		"equipmentCosts": 0,
		"estimatedProfit": 0,
		"machineOperatorSalary": 0,
		"mainCosts": 0,
		"materials": 0,
		"mimExploitation": 0,
		"overheads": 0,
		"rowName": "string",
		"salary": 0,
		"supportCosts": 0
	}
	// const body1 = JSON.parse(body)
	//console.log(body1);



	const addData = async () => {
		const data = await fetch(qweryUpdate
			,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: body

			}
		)
		const response = await data.json()
		console.log(response);

	}

	useEffect(() => {
		addData()

	}, []);


	return (
		<div className="general">
			<Navbar />
			<div className='table__job'>
				<div className="table__job-heading">
					<div className="heading__namejob-left">Строительно-монтажные работы</div>
					<div className="heading-namejob"></div>
				</div>
				<div className="table__job-header">
					<div className="table__item-header">Уровень</div>
					<div className="table__item-header">Наименование работ</div>
					<div className="table__item-header">Основная з/п</div>
					<div className="table__item-header">Оборудование</div>
					<div className="table__item-header">Накладные расходы</div>
					<div className="table__item-header">Сметная прибыль</div>
				</div>
				{/* <hr className='spase' /> */}
				{/* <div className="table__job-rows">
                              <div className="table__item-rows">
                                    <div className="table__item-icons">
                                          <img src={iconAdd} alt="" />
                                          <img src={iconDelet} alt="" />

                                    </div>
                              </div>
                              <div className="table__item-rows">Наименование работ</div>
                              <div className="table__item-rows">Основная з/п</div>
                              <div className="table__item-rows">Оборудование</div>
                              <div className="table__item-rows">Накладные расходы</div>
                              <div className="table__item-rows">Сметная прибыль</div>
                        </div> */}
				<ListItem />
				<ListItem />
				<ListItem />

			</div>

		</div>
	);
}

export default JobsBlock;
