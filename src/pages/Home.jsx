import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const LandingPage = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  
  // State for loan breakdown
  const [breakdown, setBreakdown] = useState(null);

  // Loan categories and subcategories
  const loanCategories = {
    "Wedding Loans": {
      subCategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      maxPeriod: 36, // 3 years in months
    },
    "Home Construction Loans": {
      subCategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      maxPeriod: 60, // 5 years in months
    },
    "Business Startup Loans": {
      subCategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      maxPeriod: 60, // 5 years in months
    },
    "Education Loans": {
      subCategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      maxPeriod: 48, // 4 years in months
    },
  };

  // Handle form submission
  const onSubmit = async (data) => {
    // Log the form data to the console
    console.log("Form Data: ", data);

    const { category, subCategory, initialDeposit, loanPeriod, cnic, reason } = data;

    if (!category || !subCategory || !initialDeposit || !loanPeriod || !cnic || !reason) {
      toast.error("Please fill in all fields.");
      return;
    }

    const principal = parseFloat(initialDeposit);
    const months = parseInt(loanPeriod, 10);

    // Validate deposit and loan period based on category
    const selectedCategory = loanCategories[category];
    if (selectedCategory.maxLoan !== "Based on requirement" && principal > selectedCategory.maxLoan) {
      toast.error(`Maximum loan amount for ${category} is PKR ${selectedCategory.maxLoan}.`);
      return;
    }
    if (months > selectedCategory.maxPeriod) {
      toast.error(`Maximum loan period for ${category} is ${selectedCategory.maxPeriod / 12} years.`);
      return;
    }

    const monthlyInstallment = (principal / months).toFixed(2);

    setBreakdown({
      principal,
      months,
      monthlyInstallment,
    });

    // Send form data to the backend API
    try {
      const response = await fetch("http://localhost:3000/api/v1/financeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Loan data successfully submitted!");
      } else {
        toast.error("Failed to submit loan data.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the loan data.");
      console.error("Error submitting loan data:", error);
    }

    // Reset the form fields after successful submission
    reset();
  };

  // Watch the selected category to dynamically display subcategories
  const category = watch("category");

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-600 min-h-screen">
      {/* Loan Categories Display */}
      <section id="categories" className="py-10 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-white">Loan Categories</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.keys(loanCategories).map((cat) => (
              <div
                key={cat}
                className="p-6 rounded-lg shadow-xl bg-white hover:bg-red-100 cursor-pointer transition-all"
                onClick={() => {
                  // Reset subcategory on category change
                  reset({ category: cat, subCategory: "", initialDeposit: "", loanPeriod: "", cnic: "", reason: "" });
                }}
              >
                <h4 className="text-2xl font-semibold text-red-700">{cat}</h4>
                <p className="mt-2 text-gray-700">
                  Max Loan:{" "}
                  {loanCategories[cat].maxLoan === "Based on requirement"
                    ? loanCategories[cat].maxLoan
                    : `PKR ${loanCategories[cat].maxLoan}`}
                </p>
                <p className="text-gray-700">
                  Loan Period: {loanCategories[cat].maxPeriod / 12} years
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section id="loan-calculator" className="py-20 bg-red-50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-red-700">Loan Calculator</h3>
          <p className="mt-4 text-gray-700">
            Calculate your loan breakdown by selecting the category, subcategory, deposit, and loan period.
          </p>

          {/* Calculator Form */}
          <div className="mt-10 bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
            {/* Form Inputs */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* CNIC Input */}
              <div className="mb-6">
                <label className="block text-left text-gray-700 font-semibold mb-2">CNIC Number</label>
                <input
                  type="text"
                  {...register("cnic", { required: "CNIC is required" })}
                  className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your CNIC"
                />
                {errors.cnic && <p className="text-red-500">{errors.cnic.message}</p>}
              </div>

              {/* Reason for Loan */}
              <div className="mb-6">
                <label className="block text-left text-gray-700 font-semibold mb-2">Reason for Loan</label>
                <textarea
                  {...register("reason", { required: "Reason is required" })}
                  className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
                  placeholder="Enter reason for loan"
                  rows="3"
                />
                {errors.reason && <p className="text-red-500">{errors.reason.message}</p>}
              </div>

              {/* Category Selector */}
              <div className="mb-6">
                <label className="block text-left text-gray-700 font-semibold mb-2">Select Category</label>
                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
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
                <div className="mb-6">
                  <label className="block text-left text-gray-700 font-semibold mb-2">Select Subcategory</label>
                  <select
                    {...register("subCategory", { required: "Subcategory is required" })}
                    className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">-- Select Subcategory --</option>
                    {loanCategories[category].subCategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                  {errors.subCategory && <p className="text-red-500">{errors.subCategory.message}</p>}
                </div>
              )}

              {/* Initial Deposit */}
              <div className="mb-6">
                <label className="block text-left text-gray-700 font-semibold mb-2">Initial Deposit (PKR)</label>
                <input
                  type="number"
                  {...register("initialDeposit", { required: "Initial Deposit is required" })}
                  className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
                  placeholder="Enter amount"
                />
                {errors.initialDeposit && <p className="text-red-500">{errors.initialDeposit.message}</p>}
              </div>

              {/* Loan Period */}
              <div className="mb-6">
                <label className="block text-left text-gray-700 font-semibold mb-2">Loan Period (Months)</label>
                <input
                  type="number"
                  {...register("loanPeriod", { required: "Loan period is required" })}
                  className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-red-500"
                  placeholder="Enter loan period"
                />
                {errors.loanPeriod && <p className="text-red-500">{errors.loanPeriod.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded-lg w-full text-lg hover:bg-red-700 transition duration-300"
              >
                Calculate Breakdown
              </button>
            </form>
          </div>

          {/* Loan Breakdown */}
          {breakdown && (
            <div className="mt-10 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
              <h4 className="text-2xl font-bold text-gray-800">Loan Breakdown</h4>
              <p className="mt-4 text-gray-700">
                <strong>Principal Amount:</strong> PKR {breakdown.principal}
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

      {/* Toast Container for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default LandingPage;