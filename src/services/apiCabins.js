import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error("cabins could not be read");
  }
  return data;
}

async function uploadImage(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //store image in supabase bucket
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) throw new Error("Could not upload image. Please try again");
  return { imagePath, storageError };
}

export async function createCabin(newCabin) {
  //upload image to supabase bucket if no error
  const { imagePath, storageError } = await uploadImage(newCabin);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and cabin could not be created"
    );
  }

  //create cabiin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) throw new Error("Cabin could not be created");

  //Delete cabin if there was an error uploading image file
  // if (storageError) {
  //   await supabase.from("cabins").delete().eq("id", data.id);
  //   throw new Error(
  //     "Cabin image could not be uploaded and cabin could not be created"
  //   );
  // }
  return data;
}

export async function editCabinAPI(updatedCabin) {
  // const hasImagePath = updatedCabin.image.startsWith(supabaseUrl);
  // let imagePath = "";
  // if (!hasImagePath) {
  //   imagePath = await uploadImage(updatedCabin);
  // } else {
  //   imagePath = updatedCabin.image;
  // }
  // console.log(imagePath);
  // console.log(updatedCabin);
  // console.log(updatedCabin);
  // const { id, image, ...cabinData } = updatedCabin;
  // let imagePath = cabinData.image;
  // if (image) {
  //   imagePath = await uploadImage(image);
  // }

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...updatedCabin, image: imagePath })
    .eq("id", id);
  console.log(data);
  return data;
}

export async function deleteCabinApi(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Error deleteing cabin");
  return data;
}
