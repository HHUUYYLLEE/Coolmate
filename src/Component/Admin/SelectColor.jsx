import { Checkbox } from 'antd';

const SelectColor = (props) => {
    const {setColor, color}= props
    const onChange = (e) => {
        console.log(e.target.checked);
        if(e.target.checked=== true) {
            setColor(prev=> ([...prev, e.target.value]))
        }
        else {
            setColor(color?.filter(item=> item !== e.target.value.trim()))
        }
      };

    return (
        <>
            <Checkbox value={"Xám nhạt"} onChange={onChange}>
                Xám nhạt
            </Checkbox>
            <Checkbox value={"Rêu bụi"} onChange={onChange}>
                Rêu bụi
            </Checkbox>
            <Checkbox value={"Xanh biển"} onChange={onChange}>
                Xanh biển
            </Checkbox>
            <Checkbox value={"Cacao"} onChange={onChange}>
                Cacao
            </Checkbox>
            <Checkbox value={"Trắng"} onChange={onChange}>
                Trắng
            </Checkbox>
            <Checkbox value={"Đen"} onChange={onChange}>
                Đen
            </Checkbox>
        </>
    )
}
export default SelectColor;