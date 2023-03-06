import { Button, Form, Input } from 'antd';
import UploadImage from './UploadImage';
import SelectCategory from './SelectCategory';
import SelectColor from './SelectColor';
import SelectSize from './SelectSize';
import {useState } from "react"
import upload_image from '../../api/upload_image';
import add_product from '../../api/add_product';
import swal from 'sweetalert';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Admin = () => {
  const [image1, setImage1]= useState([])
  const [image2, setImage2]= useState([])
  const [image, setImage]= useState([])
  const [image1Final, setImage1Final]= useState([])
  const [image2Final, setImage2Final]= useState([])
  const [imageFinal, setImageFinal]= useState([])
  const [color, setColor]= useState([])
  const [size, setSize]= useState([])
  const [category, setCategory]= useState(1)
  const [productName, setProductName]= useState("")
  const [price, setPrice]= useState(0)
  const [discount, setDiscount]= useState(0)

  return (
    <div>
        <div style={{fontSize: 18, fontWeight: 600, margin: "12px 0"}}>Thêm sản phẩm</div>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Tên sản phẩm"
                name="productname"
                rules={[
                    {
                    required: true,
                    message: 'Nhập tên sản phẩm',
                    },
                ]}
            >
                <Input value={productName} onChange={(e)=> setProductName(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Giá"
                name="price"
                rules={[
                    {
                    required: true,
                    message: 'Nhập giá sản phẩm',
                    },
                ]}
            >
                <Input value={price} onChange={(e)=> setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Giảm giá (%)"
                name="discount"
                rules={[
                    {
                    required: true,
                    message: 'Nhập giảm giá của sản phẩm',
                    },
                ]}
            >
                <Input value={discount} onChange={(e)=> setDiscount(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Ảnh sản phẩm 1"
                name="image1"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <UploadImage fileList={image1} setFileList={setImage1} multiple={false} />
            </Form.Item>
            <Form.Item
                label="Ảnh sản phẩm 2"
                name="image2"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <UploadImage fileList={image2} setFileList={setImage2} multiple={false} />
            </Form.Item>

            <Form.Item
                label="Chọn thể loại"
                name="category"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <SelectCategory category={category} setCategory={setCategory} />
            </Form.Item>

            <Form.Item
                label="Chọn thể loại"
                name="category"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <SelectColor color={color} setColor={setColor} />
            </Form.Item>

            <Form.Item
                label="Chọn kích cỡ"
                name="size"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <SelectSize size={size} setSize={setSize} />
            </Form.Item>
            <Form.Item
                label="Ảnh sản phẩm"
                name="image"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <UploadImage fileList={image} setFileList={setImage} multiple={true} />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button onClick={async ()=> {
                    const i1= await upload_image(image1[0].thumbUrl)
                    setImage1Final(i1.img)
                    const i2= await upload_image(image2[0].thumbUrl)
                    const i= []
                    
                    setImage2Final(i2.img)
                    image.map(async item=> {
                        const img= await upload_image(item.thumbUrl)
                        setImageFinal(prev=> ([...prev, img.img]))
                        i.push(img.img)
                    })
                    await fakesleep(1000)
                    const finalResult= await add_product({productName, price, discount, category, size, color, image1: i1.img, image2: i2.img, image: i})
                    .then(()=> swal("Thông báo", "Tạo sản phẩm thành công", "success"))
                    .catch(()=> swal("Thông báo", "Có lỗi xảy ra, vui lòng thử lại", "error"))                    
                }} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

const fakesleep= (ms)=> new Promise(res=> setTimeout(res, ms))

export default Admin