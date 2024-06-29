import './jobsBlock.css'
import Navbar from '../navbar/Navbar';
import iconAdd from './icons/IconAdd.png'
import iconDelet from './icons/iconDelet.png'
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

   // const addRow = (id) => {
   //    setAddId([...addId, id])
   // }

   const addDataFromServer = async (url) => {
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

   const addItemRow = async (id) => {
      let obj = {
         equipmentCosts: 0,
         estimatedProfit: 0,
         machineOperatorSalary: 0,
         mainCosts: 0,
         materials: 0,
         mimExploitation: 0,
         overheads: 0,
         rowName: 'Заполните поле',
         salary: 0,
         supportCosts: 0,
      }
      try {
         const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/create`,
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(obj)
            }
         )

         if (!response.ok) {
            throw new Error('ошибка запроса')
         }
         setAddId([...addId, id])
      } catch (error) {
      }
   }
	useEffect(() => {
      addDataFromServer(getList)

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
            <hr className='spase' />
            <div className="table__list" >
               <div className="table__list-rows" >
                  <div className="table__list-icons">
                     <img onClick={() => addItemRow()} src={iconAdd} alt="кнопка добавления строки" />
                     {/* <img  src={iconDelet} alt="кнопка удаления строки" /> */}

                  </div>
               </div>
               <div className="table__item-rows">Нажмите кнопку добавить</div>
               <div className="table__item-rows"></div>
               <div className="table__item-rows"></div>
               <div className="table__item-rows"></div>
               <div className="table__item-rows"></div>
            </div>
            {rows.map(({ id, ...props }) => {
               return <ListItem
                  id={id}
                  key={id}
                  {...props}
                  delRow={delRow}
                  addItemRow={addItemRow} />
            })}
         </div>
		</div>
	);
}

export default JobsBlock;
