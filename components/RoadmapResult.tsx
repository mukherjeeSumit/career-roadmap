type Props = {
  roadmap: any;
};

export default function RoadmapResult({
  roadmap,
}: Props) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold">
          Your Roadmap
        </h2>
      </div>

      <div>
        <h3 className="font-semibold mb-3">
          Readiness Score
        </h3>

        <div className="text-5xl font-bold">
          {roadmap.score}/100
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">
          Skill Gaps
        </h3>

        <ul className="list-disc pl-6">
          {roadmap.gaps.map(
            (gap: string) => (
              <li key={gap}>{gap}</li>
            )
          )}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-3">
          Learning Roadmap
        </h3>

        {roadmap.roadmap.map(
          (phase: any) => (
            <div
              key={phase.phase}
              className="border rounded-lg p-4 mb-4"
            >
              <h4 className="font-bold">
                {phase.phase}
              </h4>

              <ul className="list-disc pl-5 mt-2">
                {phase.topics.map(
                  (topic: string) => (
                    <li key={topic}>
                      {topic}
                    </li>
                  )
                )}
              </ul>
            </div>
          )
        )}
      </div>

      <div>
        <h3 className="font-semibold mb-3">
          Recommended Projects
        </h3>

        <ul className="list-disc pl-6">
          {roadmap.projects.map(
            (project: string) => (
              <li key={project}>
                {project}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="font-bold text-xl">
          Need Help?
        </h3>

        <p className="mt-2">
          Book a mentorship session for
          personalized guidance.
        </p>

        <a
          href="https://topmate.io/your-profile"
          target="_blank"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg"
        >
          Book Mentorship
        </a>
      </div>

    </div>
  );
}