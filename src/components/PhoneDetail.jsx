import React, { use } from "react";
import { useLoaderData, Link, useNavigate } from "react-router";

const PhoneDetail = () => {
  const phone = useLoaderData();
  const navigate = useNavigate();

  console.log(phone);

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-primary">
            Phone Details 📱
          </h1>

          <p className="mt-2 text-base-content/60">
            Complete information about this phone
          </p>
        </div>

        {/* Main Card */}
        <div className="card overflow-hidden bg-base-100 shadow-2xl lg:card-side">
          {/* Phone Image */}
          <figure className="bg-base-200 p-6 lg:w-1/2">
            <img
              src={phone.image}
              alt={phone.name}
              className="h-80 w-full rounded-2xl object-cover shadow-lg transition duration-500 hover:scale-105 lg:h-[450px]"
            />
          </figure>

          {/* Phone Information */}
          <div className="card-body lg:w-1/2">
            {/* Phone Name */}
            <div>
              <h2 className="text-3xl font-bold text-base-content">
                {phone.name}
              </h2>

              <div className="badge badge-primary mt-3">{phone.brand}</div>
            </div>

            <div className="divider"></div>

            {/* Phone Info */}
            <div className="space-y-4">
              {/* Color */}
              <div className="flex items-center justify-between rounded-xl bg-base-200 px-4 py-3">
                <span className="font-semibold text-base-content/60">
                  Color
                </span>

                <span className="font-bold">{phone.color}</span>
              </div>

              {/* RAM */}
              <div className="flex items-center justify-between rounded-xl bg-base-200 px-4 py-3">
                <span className="font-semibold text-base-content/60">RAM</span>

                <span className="badge badge-info badge-lg">{phone.ram}</span>
              </div>

              {/* Storage */}
              <div className="flex items-center justify-between rounded-xl bg-base-200 px-4 py-3">
                <span className="font-semibold text-base-content/60">
                  Storage
                </span>

                <span className="badge badge-secondary badge-lg">
                  {phone.storage}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between rounded-xl border-2 border-success/20 bg-success/10 px-4 py-4">
                <span className="font-semibold text-base-content/60">
                  Price
                </span>

                <span className="text-2xl font-extrabold text-success">
                  ৳ {phone.price}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="card-actions mt-6 flex-wrap">
              <Link
                to={`/update/${phone._id}`}
                className="btn btn-primary flex-1"
              >
                ✏️ Edit Phone
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline flex-1"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-base-content/50">Phone ID: {phone._id}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
