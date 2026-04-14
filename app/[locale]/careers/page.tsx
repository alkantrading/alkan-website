"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CareersPage() {
  const t = useTranslations("Careers");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Applicant Data:", formData);
    console.log("CV File:", cvFile);

    alert(t("successMessage"));
  };

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#241b16]">
      <section className="relative overflow-hidden border-b border-[#e7d9cc] bg-[linear-gradient(135deg,#2b211c_0%,#4b372d_55%,#8d6a52_100%)] px-6 py-24 lg:px-12">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md lg:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#e7d2bf]">
              {t("heroLabel")}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#f5e9df] md:text-lg">
              {t("heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-[#e5d7ca] bg-white p-8 shadow-sm lg:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7a61]">
              {t("introLabel")}
            </p>
            <h2 className="text-3xl font-semibold text-[#241b16]">
              {t("introTitle")}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6a5a4f]">
              {t("introDesc")}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#eadfd4] bg-[#faf7f3] p-5">
                <h3 className="text-lg font-semibold text-[#241b16]">
                  {t("card1Title")}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6a5a4f]">
                  {t("card1Desc")}
                </p>
              </div>

              <div className="rounded-2xl border border-[#eadfd4] bg-[#faf7f3] p-5">
                <h3 className="text-lg font-semibold text-[#241b16]">
                  {t("card2Title")}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6a5a4f]">
                  {t("card2Desc")}
                </p>
              </div>

              <div className="rounded-2xl border border-[#eadfd4] bg-[#faf7f3] p-5">
                <h3 className="text-lg font-semibold text-[#241b16]">
                  {t("card3Title")}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6a5a4f]">
                  {t("card3Desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e5d7ca] bg-white p-8 shadow-sm lg:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7a61]">
                {t("formLabel")}
              </p>
              <h2 className="text-3xl font-semibold text-[#241b16]">
                {t("formTitle")}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#6a5a4f]">
                {t("formDesc")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#241b16]">
                    {t("fullName")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                    placeholder={t("fullNamePlaceholder")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#241b16]">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#241b16]">
                    {t("phone")}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                    placeholder={t("phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#241b16]">
                    {t("position")}
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                  >
                    <option value="">{t("selectPosition")}</option>
                    <option value="Sales Executive">{t("position1")}</option>
                    <option value="Project Engineer">{t("position2")}</option>
                    <option value="Site Supervisor">{t("position3")}</option>
                    <option value="Factory Operator">{t("position4")}</option>
                    <option value="Procurement Officer">{t("position5")}</option>
                    <option value="Accountant">{t("position6")}</option>
                    <option value="Other">{t("position7")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#241b16]">
                  {t("experience")}
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                  placeholder={t("experiencePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#241b16]">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-2xl border border-[#dbcbbb] bg-[#fcfaf8] px-4 py-3 text-[#241b16] outline-none transition focus:border-[#9a7a61] focus:bg-white"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#241b16]">
                  {t("uploadCv")}
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="block w-full rounded-2xl border border-dashed border-[#cdb8a5] bg-[#fcfaf8] px-4 py-4 text-sm text-[#6a5a4f]"
                />
                <p className="mt-2 text-xs text-[#8a7668]">
                  {t("uploadNote")}
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#2b211c] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#4a382d]"
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}