import { Checkbox } from 'antd';



const SelectSize = (props) => {
    const {setSize, size}= props
    const onChange = (e) => {
        console.log(e.target.checked);
        if(e.target.checked=== true) {
            setSize(prev=> ([...prev, e.target.value]))
        }
        else {
            setSize(size?.filter(item=> item !== e.target.value.trim()))
        }
      };

    return (
        <>
            <Checkbox value={"S"} onChange={onChange}>
                S
            </Checkbox>
            <Checkbox value={"M"} onChange={onChange}>
                M
            </Checkbox>
            <Checkbox value={"L"} onChange={onChange}>
                L
            </Checkbox>
            <Checkbox value={"XL"} onChange={onChange}>
                XL
            </Checkbox>
            <Checkbox value={"2XL"} onChange={onChange}>
                2XL
            </Checkbox>
            <Checkbox value={"3XL"} onChange={onChange}>
                3XL
            </Checkbox>
        </>
    )
}
export default SelectSize;