import './listItem.css'
import iconAdd from './icons/IconAdd.png'
import iconDelet from './icons/iconDelet.png'
import { useState, useEffect } from 'react';

const ListItem = (props) => {

   const { id, rowName, total, salary, mimExploitation, supportCosts, delRow, addRow, addItemRow } = props;
   const [stateInp, setStateInp] = useState(false)

   const [impId, setInpId] = useState(0)
   const [impName, setSInpName] = useState('')
   const [impTotal, setSInpTotal] = useState(0)
   const [impSalary, setInpSalory] = useState(0)
   const [inpMimExploitation, setInpMimExploitation] = useState(0)
   const [impSupportCosts, setInpSupportCosts] = useState(0)

   useEffect(() => {
      setInpId(id)
      setSInpName(rowName)
      setSInpTotal(total)
      setInpSalory(salary)
      setInpMimExploitation(mimExploitation)
      setInpSupportCosts(supportCosts)
   }, []);

   const redactRow = (id) => {
      setStateInp(!stateInp)
      if (stateInp) {
         changeItemRow(id)
      }
   }

   const deletRow = async (id) => {
      delRow(id)
      try {
         const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${id}/delete`,
            {
               method: 'DELETE'
            }
         )
         if (!response.ok) {
            throw new Error('ошибка запроса')
         }
      } catch (error) {
      }
   }

   const changeItemRow = async (id) => {

      let obj = {
         equipmentCosts: 0,
         estimatedProfit: 0,
         machineOperatorSalary: 0,
         mainCosts: 0,
         materials: 0,
         mimExploitation: inpMimExploitation,
         overheads: 0,
         rowName: impName,
         salary: impSalary,
         supportCosts: impSupportCosts,
      }

      try {
         const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${id}/update`,
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(obj)
            }
         )
         if (!response.ok) {
            throw new Error('ошибка запроса')
         }
      }
      catch (error) {
      }
   }

   const inputsName = <input
      value={impName}
      onChange={(e) => setSInpName(e.target.value)}
      id={id}
      name='name'
      className='row__input'
      type="text" />

   const inputsTotal = <input
      value={impTotal}
      onChange={(e) => setSInpTotal(e.target.value)}
      id={id}
      name='total'
      className='row__input'
      type="number" />

   const inputsSalary = <input
      value={impSalary}
      onChange={(e) => setInpSalory(e.target.value)}
      id={id} name='salary'
      className='row__input'
      type="number" />

   const inputsMimExploitation = <input
      value={inpMimExploitation}
      onChange={(e) => setInpMimExploitation(e.target.value)}
      id={id} name='mimExploitation'
      className='row__input'
      type="number" />

   const inputsЫupportCosts = <input
      value={impSupportCosts} onChange={(e) => setInpSupportCosts(e.target.value)}
      id={id}
      name='supportCosts'
      className='row__input'
      type="number" />

	return (
		<>
			<hr className='spase' />
         <div className="table__list" onDoubleClick={() => redactRow(impId)} id={impId}>
            <div className="table__list-rows" >
					<div className="table__list-icons">
                  <img id={impId} onClick={() => !stateInp && addItemRow(impId)} src={iconAdd} alt="" />
                  <img id={impId} onClick={() => deletRow(impId)} src={iconDelet} alt="" />

					</div>
				</div>
            <div className="table__item-rows">{stateInp ? inputsName : impName}</div>
            <div className="table__item-rows">{stateInp ? inputsSalary : impSalary}</div>
            <div className="table__item-rows">{stateInp ? inputsMimExploitation : inpMimExploitation}</div>
            <div className="table__item-rows">{stateInp ? inputsЫupportCosts : impSupportCosts}</div>
            <div className="table__item-rows">{stateInp ? inputsTotal : impTotal}</div>
			</div>
      </>
	);
}

export default ListItem;
