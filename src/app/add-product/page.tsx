import prisma from "@/lib/db/db";
//import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
//import { authOptions } from "../api/auth/[...nextauth]/route";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
  title: "Add Product - Alex Store",
};

async function addProduct(formData: FormData) {
  "use server";

  //const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/add-product");
  // }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-center text-lg font-bold">AddProductPage</h1>
      <form action={addProduct}>
        <input
          className="input input-bordered mb-3 w-full"
          required
          placeholder="Name"
          name="name"
        />
        <textarea
          name="description"
          placeholder="description"
          id=""
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          className="input input-bordered mb-3 w-full"
          required
          placeholder="Image URL"
          name="imageUrl"
          type="url"
        />
        <input
          className="input input-bordered mb-3 w-full"
          required
          placeholder="Price"
          name="price"
          type="number"
        />
        <FormSubmitButton type="submit" className="btn btn-primary btn-block ">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;