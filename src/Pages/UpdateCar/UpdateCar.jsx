import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateCar = () => {
    const car = useLoaderData();
    const [details, setDetails] = useState(car.details); 
    const { _id, name, price, brand, description, image } = car;
    console.log(_id);

    const handleUpdateCar = (event) => {
        event.preventDefault();
        const form = event.target;

        const newName = form.name.value;
        const newPrice = form.price.value;
        const newBrand = form.brand.value;
        const newDescription = form.description.value;
        const newImage = form.image.value;

        const newCar = {
            name: newName,
            price: newPrice,
            brand: newBrand,
            description: newDescription,
            image: newImage,
            details: details,
        };

        // Send data to the server
        fetch(`https://b8a10-brandshop-server-side-iam-razzakk.vercel.app/car/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                }
            })
    };

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className="text-3xl font-extrabold text-center">Update a Car {brand}</h1>
            <form onSubmit={handleUpdateCar}>
                {/* form name and quantity name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter your Car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="price" defaultValue={price} placeholder="Total Price" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/*  */}
                <div className="md:flex mb-8">
                    <div className="form-control py-6 md:w-1/2">
                        <label>Choose a car:</label>
                        <select name="brand" id="cars" value={brand}>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Bugatti">Bugatti</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="description" defaultValue={description} placeholder="Details" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form for photo url */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="image" defaultValue={image} placeholder="Enter your Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Car Detail" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCar;
