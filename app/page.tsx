"use client";

import { useState } from "react";

import AssessmentForm from "@/components/AssessmentForm";
import RoadmapResult from "@/components/RoadmapResult";

import { roadmaps } from "@/data/roadmaps";

export default function Home() {
  const [result, setResult] =
    useState<any>(null);

  const handleSubmit = (
    formData: any
  ) => {
    const key =
      `${formData.currentRole}-${formData.targetRole}`;

    const roadmap =
      roadmaps[key as keyof typeof roadmaps];

    setResult(roadmap);
  };

  return (
    <main className="min-h-screen bg-white">

      <div className="max-w-4xl mx-auto px-6 py-16">

        {!result ? (
          <>
            <h1 className="text-5xl font-bold mb-4">
              Data Engineering Roadmap Generator
            </h1>

            <p className="text-gray-600 mb-12">
              Get a personalized roadmap
              based on your experience,
              skills and target role.
            </p>

            <AssessmentForm
              onSubmit={handleSubmit}
            />
          </>
        ) : (
          <RoadmapResult
            roadmap={result}
          />
        )}

      </div>

    </main>
  );
}