import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UpdatePhone = () => {
  const phone = useLoaderData();
  const navigate = useNavigate();

  const handleUpdatePhone = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const color = e.target.color.value;
    const price = e.target.price.value;
    const ram = e.target.ram.value;
    const storage = e.target.storage.value;
    const image = e.target.image.value;

    console.log(name, brand, color, price, ram, storage, image);

    const updatePhone = {
      name,
      brand,
      color,
      price,
      ram,
      storage,
      image,
    };

    // send data to the server
    fetch(`https://phone-collection-backend.onrender.com/phones/${phone._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePhone),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);

        if (data.modifiedCount) {
          alert("Phone Info Updated");
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-primary">
            Edit a Phone 📱
          </h2>

          <p className="mt-2 text-base-content/60">
            Update your phone information easily
          </p>
        </div>

        {/* Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* Card Title */}
            <div className="mb-5 border-b border-base-300 pb-4">
              <h3 className="card-title text-2xl">Phone Information</h3>

              <p className="text-sm text-base-content/60">
                Change the information below and update your phone.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdatePhone}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Phone Name */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Phone Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Phone Name"
                    defaultValue={phone.name}
                    className="input input-bordered input-primary w-full"
                  />
                </fieldset>

                {/* Brand */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Brand Name</label>

                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    defaultValue={phone.brand}
                    className="input input-bordered input-primary w-full"
                  />
                </fieldset>

                {/* Color */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Phone Color</label>

                  <input
                    type="text"
                    name="color"
                    placeholder="Phone Color"
                    defaultValue={phone.color}
                    className="input input-bordered input-primary w-full"
                  />
                </fieldset>

                {/* Price */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Price</label>

                  <label className="input input-bordered input-primary w-full">
                    <span className="text-base-content/60">৳</span>

                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={phone.price}
                    />
                  </label>
                </fieldset>

                {/* RAM */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">RAM</label>

                  <input
                    type="text"
                    name="ram"
                    placeholder="RAM (e.g. 8GB)"
                    defaultValue={phone.ram}
                    className="input input-bordered input-primary w-full"
                  />
                </fieldset>

                {/* Storage */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Storage</label>

                  <input
                    type="text"
                    name="storage"
                    placeholder="Storage (e.g. 128GB)"
                    defaultValue={phone.storage}
                    className="input input-bordered input-primary w-full"
                  />
                </fieldset>

                {/* Image URL */}
                <fieldset className="fieldset md:col-span-2">
                  <label className="fieldset-legend">Image URL</label>

                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/phone.jpg"
                    defaultValue={phone.image}
                    className="input input-bordered input-primary w-full"
                  />

                  <p className="label">
                    Enter a valid image URL for your phone.
                  </p>
                </fieldset>
              </div>

              {/* Button */}
              <div className="mt-7 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-wide shadow-lg transition duration-300 hover:scale-105"
                >
                  ✨ Update Phone
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-outline flex-1"
                >
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-5 text-center">
          <p className="text-sm text-base-content/50">
            Make sure all information is correct before updating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdatePhone;
