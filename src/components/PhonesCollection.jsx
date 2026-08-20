import React, { use, useState } from "react";
import { Link } from "react-router";

const PhonesCollection = ({ phonesPromise }) => {
  const initialPhones = use(phonesPromise);
  const [phones, setPhones] = useState(initialPhones);

  const handleAddPhone = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const color = e.target.color.value;
    const price = e.target.price.value;
    const ram = e.target.ram.value;
    const storage = e.target.storage.value;
    const image = e.target.image.value;

    const newPhone = {
      name,
      brand,
      color,
      price,
      ram,
      storage,
      image,
    };

    // save phone data to database
    fetch("http://localhost:3000/phones", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPhone),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving data :", data);

        if (data.insertedId) {
          alert("Phone Added Successfully!");

          newPhone._id = data.insertedId;

          const newPhones = [...phones, newPhone];
          setPhones(newPhones);

          e.target.reset();
        }
      });
  };

  const handleDeleteUSer = (_id) => {
    console.log("delete a user", _id);

    fetch(`http://localhost:3000/phones/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);

        if (data.deletedCount) {
          alert("Phone deleted Successfully");

          const remainingPhones = phones.filter((phone) => phone._id !== _id);

          setPhones(remainingPhones);
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-primary md:text-5xl">
            Phone Collection 📱
          </h1>

          <p className="mt-3 text-base-content/60">
            Add, manage and explore your favorite phones
          </p>

          <div className="mt-4">
            <div className="badge badge-primary badge-lg">
              Total Phones: {phones.length}
            </div>
          </div>
        </div>

        {/* ================= ADD PHONE ================= */}
        <div className="card mb-12 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="mb-5">
              <h2 className="card-title text-2xl">➕ Add Phone Manually</h2>

              <p className="text-sm text-base-content/60">
                Enter the phone details below to add a new phone.
              </p>
            </div>

            <form onSubmit={handleAddPhone}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Phone Name */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Phone Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. iPhone 15 Pro"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </fieldset>

                {/* Brand */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Brand Name</label>

                  <input
                    type="text"
                    name="brand"
                    placeholder="e.g. Apple"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </fieldset>

                {/* Color */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Phone Color</label>

                  <input
                    type="text"
                    name="color"
                    placeholder="e.g. Black"
                    className="input input-bordered input-primary w-full"
                    required
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
                      placeholder="Phone Price"
                      required
                    />
                  </label>
                </fieldset>

                {/* RAM */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">RAM</label>

                  <input
                    type="text"
                    name="ram"
                    placeholder="e.g. 8GB"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </fieldset>

                {/* Storage */}
                <fieldset className="fieldset">
                  <label className="fieldset-legend">Storage</label>

                  <input
                    type="text"
                    name="storage"
                    placeholder="e.g. 128GB"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </fieldset>

                {/* Image */}
                <fieldset className="fieldset md:col-span-2">
                  <label className="fieldset-legend">Image URL</label>

                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/phone.jpg"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </fieldset>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn btn-primary btn-wide shadow-lg transition duration-300 hover:scale-105"
                >
                  ➕ Add Phone
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ================= PHONE LIST ================= */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Available Phones</h2>

            <p className="mt-1 text-sm text-base-content/60">
              Browse all phones in your collection
            </p>
          </div>

          <div className="badge badge-primary badge-lg">
            {phones.length} Phones
          </div>
        </div>

        {/* ================= PHONE CARDS ================= */}
        {phones.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {phones.map((phone) => (
              <div
                key={phone._id}
                className="card overflow-hidden bg-base-100 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <figure className="h-64 bg-base-200 p-4">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="h-full w-full rounded-xl object-cover transition duration-500 hover:scale-105"
                  />
                </figure>

                {/* Card Body */}
                <div className="card-body">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="card-title text-xl">{phone.name}</h3>

                      <p className="mt-1 font-medium text-primary">
                        {phone.brand}
                      </p>
                    </div>

                    <div className="badge badge-success">৳ {phone.price}</div>
                  </div>

                  <div className="divider my-2"></div>

                  {/* Phone Specs */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-base-200 p-3">
                      <p className="text-xs text-base-content/50">Color</p>

                      <p className="font-semibold">{phone.color}</p>
                    </div>

                    <div className="rounded-lg bg-base-200 p-3">
                      <p className="text-xs text-base-content/50">RAM</p>

                      <p className="font-semibold">{phone.ram}</p>
                    </div>

                    <div className="rounded-lg bg-base-200 p-3">
                      <p className="text-xs text-base-content/50">Storage</p>

                      <p className="font-semibold">{phone.storage}</p>
                    </div>

                    <div className="rounded-lg bg-base-200 p-3">
                      <p className="text-xs text-base-content/50">Brand</p>

                      <p className="font-semibold">{phone.brand}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="card-actions mt-5">
                    <Link
                      to={`/phones/${phone._id}`}
                      className="btn btn-primary btn-sm flex-1"
                    >
                      👁 Details
                    </Link>

                    <Link
                      to={`/update/${phone._id}`}
                      className="btn btn-warning btn-sm flex-1"
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      onClick={() => handleDeleteUSer(phone._id)}
                      className="btn btn-error btn-sm"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center py-16 text-center">
              <div className="text-6xl">📱</div>

              <h3 className="mt-4 text-2xl font-bold">No Phones Available</h3>

              <p className="text-base-content/60">
                Add your first phone using the form above.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhonesCollection;
