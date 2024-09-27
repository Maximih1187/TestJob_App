import './listItem.css'

const InputRows = ({ props }) => {
   const { value, type, name, change } = props
   return (
      <div>
         <input
            type={type}
            onChange={(e) => change(e)}
            value={value}
            name={name}
            className='row__input table__item-rows'
         />
      </div>
   );
}

export default InputRows;
