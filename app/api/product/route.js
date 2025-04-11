import Product from '@/app/model/ProModel';
import dbConnect from '@/app/lib/mongocon';
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const { proname, probrand, proprice, imageurl } = data;

     await Product.create({
      name: proname,
      brand: probrand,
      price: proprice,
      imageurl: imageurl
    });

    return Response.json("Data inserted");
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to create product' }, { status: 500 });
  }
}


export async function GET(req){
  try {
    await dbConnect();
    const data= await Product.find();
    return Response.json({data})
  } catch (error) {
    
  }
}