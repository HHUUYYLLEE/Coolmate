import { Select, Space } from 'antd';


const SelectCategory = (props) => {
    const {setCategory }= props

    const handleChange = (value) => {
        setCategory(value)
      };
    return (
        <Space wrap>
          <Select
            defaultValue={1}
            style={{
              width: 240,
            }}
            onChange={handleChange}
            options={[
              {
                value: 1,
                label: 'Áo nam dài tay',
              },
              {
                value: 2,
                label: "Áo T-Shirt",
              },
              {
                value: 3,
                label: 'Áo Polo',
              },
              {
                value: 4,
                label: 'Áo sơ mi nam',
              },
              {
                value: 5,
                label: 'Quần short',
              },
              {
                value: 6,
                label: 'Quần jeans',
              },
              {
                value: 7,
                label: 'Quần dài',
              },
            ]}
          />
        </Space>
      )
};
export default SelectCategory;