import Swal from "sweetalert2";

const AddCar = () => {
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCar = { name, price, category, details, photo };
        console.log(newCar);
        // send data to the server
        fetch('http://localhost:5000/car', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                }
            })
    }

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className="text-3xl font-extrabold text-center">Add a Car</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Enter your Car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="price" placeholder="Total Price" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/*  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="category" placeholder="Enter your Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="details" placeholder="Details" className="input w-full input-bordered" />
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
                            <input type="text" name="photo" placeholder="Enter your Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Car Detail" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCar;