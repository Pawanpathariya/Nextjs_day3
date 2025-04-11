import Product from '@/app/model/ProModel';
import dbConnect from '@/app/lib/mongocon';

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const product = await Product.findById(id);

    if (!product) {
      return Response.json({ error: 'Product not found' }, { status: 404 });
    }

    console.log(product)
    return Response.json({ product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

