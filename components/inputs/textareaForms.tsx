interface PropsInput{
    placeholder:string,
    required:boolean,
    onBlur: React.FocusEventHandler<HTMLTextAreaElement>,
    name: string,
    id: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
    value: string
 }
 
 export default function TextArea({placeholder,required, onBlur, name, id, onChange, value}:PropsInput){
      return(
         <div>
             <textarea className="w-[100%] mt-[23px] text-sm font-semibold border-[0.5px] border-black rounded-md py-[22px] px-[17px] bg-#f7f7f7f7 text-black" 
             placeholder={placeholder}
             required={required}
             onBlur={onBlur}
             name={name}
             id={id}
             onChange={onChange}
             value={value}
             
             />
         </div>
      )
 }