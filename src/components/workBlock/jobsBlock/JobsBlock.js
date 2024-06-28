import './jobsBlock.css'
import Navbar from '../navbar/Navbar';
// import iconAdd from './icons/IconAdd.png'
// import iconDelet from './icons/iconDelet.png'
import ListItem from './listItem/ListItem';
import { useEffect, useState } from 'react';



const JobsBlock = () => {
	const myId = 130018;
   const getList = 'http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/list';
	const deleteRow = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${130018}/delete`;
	const updateRow = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${112}/update`;
	const creatRow = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/create`

   const [rows, setRows] = useState([]);
   const [addId, setAddId] = useState([]);
   console.log(rows);




   const delRow = (id) => {
      setRows(rows.filter(item => item.id !== id))
   }

   const addRow = (id) => {
      setAddId([...addId, id])
   }

   const addData = async (url) => {
      try {
         const response = await fetch(url,
            {
               method: 'GET',
               // headers: { 'Content-Type': 'application/json' },
               // body: JSON.stringify(body)
            }
         )
         if (!response.ok) {
            throw new Error('ошибка запроса')
         }
         const data = await response.json().then(data => setRows(data))
      } catch (error) {
         console.log(error);
      }
	}

	useEffect(() => {
      addData(getList)

   }, [addId]);

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
            {rows.map(({ id, ...props }) => {
               return <ListItem id={id} key={id} {...props} delRow={delRow} addRow={addRow} />
            })}


			</div>

		</div>
	);
}

export default JobsBlock;
