import './listItem.css'
import iconAdd from './icons/IconAdd.png'
import iconDelet from './icons/iconDelet.png'
import { useState } from 'react';
import { useHttp } from '../../../../hooks/http.hooks';
import InputRows from './InputRows';


const ListItem = (props) => {
   const { request } = useHttp()
   const [wer, setWer] = useState(props)
   const { id, deleteItem, addItemRow } = props;
   const [stateInp, setStateInp] = useState(false);
   const paramsInputs = [{
      value: wer.rowName,
      name: 'rowName',
      type: "text",
      change: change,
   },
   {
      value: wer.overheads,
      name: 'overheads',
      type: "number",
      change: change,
   },
   {
      value: wer.salary,
      name: 'salary',
      type: "number",
      change: change,
   },
   {
      value: wer.mimExploitation,
      name: 'mimExploitation',
      type: "number",
      change: change,
   },
   {
      value: wer.supportCosts,
      name: 'supportCosts',
      type: "number",
      change: change,
   },
   ]

   function change(e) {
      setWer({ ...wer, [e.target.name]: e.target.value })
   }

   function redactRow(id) {
      setStateInp(!stateInp)
      if (stateInp) {
         changeItem(id)
      }
   }

   async function changeItem(id) {
      let url = `http://185.244.172.108:8081/v1/outlay-rows/entity/130018/row/${id}/update`
      request(url, 'POST', wer)
         .then(data => console.log(data))
         .catch(e => console.log(e))
   }

	return (
		<>
			<hr className='spase' />
         <div className="table__list" onDoubleClick={() => redactRow(id)} id={id}>
            <div className="table__list-rows" >
					<div className="table__list-icons">
                  <img id={id} onClick={() => !stateInp && addItemRow(id)} src={iconAdd} alt="" />
                  <img id={id} onClick={() => deleteItem(id)} src={iconDelet} alt="" />
					</div>
				</div>
            {paramsInputs.map((input) =>
               <div className="table__item-rows">{stateInp ? <InputRows
                  key={id}
                  props={input}
               /> : input.value}
               </div>)}
			</div>
      </>
	);
}

export default ListItem;
