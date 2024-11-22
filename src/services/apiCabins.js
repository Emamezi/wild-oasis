import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error);
    throw new Error("cabins could not be read");
  }
  return data;
}

async function uploadImage(imageFile) {
  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //store image in supabase bucket
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, imageFile);

  if (storageError) throw new Error("Could not upload image. Please try again");
  return imagePath;
}

export async function createCabin(newCabin) {
  //create cabiin
  const imagePath = await uploadImage(newCabin.image);
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();
  if (error) throw new Error("Cabin could not be created");

  //upload image to supabase bucket if no error

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
  const { id, image, ...cabinData } = updatedCabin;
  let imagePath = cabinData.image;
  if (image) {
    imagePath = await uploadImage(image);
  }
  console.log(updatedCabin);

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...cabinData, image: imagePath })
    .eq("id", id)
    .select();

  return data;
}

export async function deleteCabinApi(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Error deleteing cabin");
  return data;
}
