"use client";

type Props = {
  onSubmit: (data: any) => void;
};

export default function AssessmentForm({
  onSubmit,
}: Props) {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget
    );

    onSubmit({
      experience: formData.get("experience"),
      currentRole: formData.get("currentRole"),
      targetRole: formData.get("targetRole"),
      timeline: formData.get("timeline"),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2">
          Experience
        </label>

        <select
          name="experience"
          className="w-full border p-3 rounded-lg"
        >
          <option>Fresher</option>
          <option>1-3 Years</option>
          <option>4-6 Years</option>
          <option>6-8 Years</option>
          <option>8+ Years</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Current Role
        </label>

        <select
          name="currentRole"
          className="w-full border p-3 rounded-lg"
        >
          <option>Data Analyst</option>
          <option>Software Engineer</option>
          <option>Data Engineer</option>
          <option>Data Scientist</option>
          <option>Fresher</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Target Role
        </label>

        <select
          name="targetRole"
          className="w-full border p-3 rounded-lg"
        >
          <option>Data Engineer</option>
          <option>Senior Data Engineer</option>
          <option>Lead Data Engineer</option>
          <option>Data Architect</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Timeline
        </label>

        <select
          name="timeline"
          className="w-full border p-3 rounded-lg"
        >
          <option>3 Months</option>
          <option>6 Months</option>
          <option>12 Months</option>
        </select>
      </div>

      <button
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Generate Roadmap
      </button>
    </form>
  );
}