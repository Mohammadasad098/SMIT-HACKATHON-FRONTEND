import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const LoanRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // State for loan breakdown
  const [breakdown, setBreakdown] = useState(null);

  // Loan categories and subcategories
  const loanCategories = {
    "Wedding Loans": {
      subCategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    },
    "Home Construction Loans": {
      subCategories: ["Structure", "Finishing", "Loan"],
    },
    "Business Startup Loans": {
      subCategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    },
    "Education Loans": {
      subCategories: ["University Fees", "Child Fees Loan"],
    },
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const userId = localStorage.getItem("userId"); // 🔑 Get the user ID
  
      const requestData = {
        cnic: data.cnic,
        reasonForLoan: data.reasonForLoan,
        category: data.category,
        subCatogary: data.subCategory, // 🔄 Matches backend model
        deposit: parseFloat(data.deposit),
        initialDeposit: parseFloat(data.initialDeposit),
        loanPeriod: parseInt(data.loanPeriod, 10),
        enrolledUsers: userId, // 🟢 Include the user ID here
      };
  
      const response = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/api/v1/financeData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Optional but recommended
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit loan request");
      }
  
      const result = await response.json();
      toast.success("Loan request submitted successfully!");
  
      // 🔢 Breakdown calculation
      const monthlyInstallment = (requestData.deposit / requestData.loanPeriod).toFixed(2);
      setBreakdown({
        principal: requestData.deposit,
        months: requestData.loanPeriod,
        monthlyInstallment,
      });
  console.log(requestData)
      reset(); // Reset form fields
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting loan request. Please try again.");
    }
  };
  
  // Watch the selected category to dynamically display subcategories
  const category = watch("category");

  // Update subcategory dropdown options when the category changes
  useEffect(() => {
    if (category) {
      setValue("subCategory", ""); // Reset subcategory when category changes
    }
  }, [category, setValue]);

  return (
    <section id="loan-calculator" className="pt-28 md:pt-24 flex bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-purple-600">Loan Request</h3>
        <p className="mt-4 text-gray-700">
          Calculate your loan breakdown by selecting the category, subcategory, deposit, and loan period.
        </p>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Calculator Form */}
        <div className="mt-10 bg-white md:mx-auto mx-2 p-6 shadow-lg rounded max-w-lg mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* CNIC Input */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">CNIC Number</label>
              <input
                type="number"
                {...register("cnic", { required: "CNIC is required" })}
                className="w-full p-3 rounded border"
                placeholder="Enter your CNIC"
              />
              {errors.cnic && <p className="text-red-500">{errors.cnic.message}</p>}
            </div>

            {/* Reason for Loan */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Reason for Loan</label>
              <textarea
                {...register("reasonForLoan", { required: "Reason is required" })}
                className="w-full p-3 rounded border"
                placeholder="Enter reason for loan"
                rows="3"
              />
              {errors.reasonForLoan && <p className="text-red-500">{errors.reasonForLoan.message}</p>}
            </div>

            {/* Category Selector */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Select Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full p-3 rounded border"
              >
                <option value="">-- Select Category --</option>
                {Object.keys(loanCategories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>

            {/* Subcategory Selector */}
            {category && (
              <div className="mb-4">
                <label className="block text-left text-gray-700 font-semibold mb-2">Select Subcategory</label>
                <select
                  {...register("subCategory", { required: "Subcategory is required" })}
                  className="w-full p-3 rounded border"
                >
                  <option value="">-- Select Subcategory --</option>
                  {loanCategories[category].subCategories.map((subCat, index) => (
                    <option key={index} value={subCat}>
                      {subCat}
                    </option>
                  ))}
                </select>
                {errors.subCategory && <p className="text-red-500">{errors.subCategory.message}</p>}
              </div>
            )}

            {/* Deposit */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Loan Amount (PKR)</label>
              <input
                type="number"
                {...register("deposit", { required: "Initial Deposit is required" })}
                className="w-full p-3 rounded border"
                placeholder="Enter deposit amount"
              />
              {errors.deposit && <p className="text-red-500">{errors.deposit.message}</p>}
            </div>



            {/* Initial Deposit */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Initial Deposit (PKR)</label>
              <input
                type="number"
                {...register("initialDeposit", { required: "Initial Deposit is required" })}
                className="w-full p-3 rounded border"
                placeholder="Enter initialDeposit amount"
              />
              {errors.initialDeposit && <p className="text-red-500">{errors.initialDeposit.message}</p>}
            </div>

            {/* Loan Period */}
            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Loan Period (Months)</label>
              <input
                type="number"
                {...register("loanPeriod", { required: "Loan Period is required" })}
                className="w-full p-3 rounded border"
                placeholder="Enter loan period in months"
              />
              {errors.loanPeriod && <p className="text-red-500">{errors.loanPeriod.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-70 text-white rounded focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Loan Breakdown */}
        {breakdown && (
          <div className="mt-8 bg-white p-6 shadow-lg rounded max-w-lg mx-auto">
            <h4 className="text-xl font-semibold text-blue-600">Loan Breakdown</h4>
            <p className="mt-2 text-gray-700">
              <strong>Loan Amount:</strong> PKR {breakdown.principal}
            </p>
            <p className="text-gray-700">
              <strong>Loan Period:</strong> {breakdown.months} months
            </p>
            <p className="text-gray-700">
              <strong>Monthly Installment:</strong> PKR {breakdown.monthlyInstallment}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanRequest;
