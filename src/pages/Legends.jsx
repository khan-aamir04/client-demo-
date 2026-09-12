import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import {
  ArchiveLayout,
  EditorialButton,
  EditorialImage,
  SectionLabel,
} from "../components/archive.jsx";
import { SPECIES, STORIES } from "../data/archive.js";
import { QUIZ_QUESTIONS } from "../data/quiz.js";

export default function Legends() {
  const [openStory, setOpenStory] = useState(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [resultId, setResultId] = useState(null);

  const question = QUIZ_QUESTIONS[step];
  const selected = answers[step];

  const choose = (value) => setAnswers((prev) => [...prev.slice(0, step), value]);

  const advance = () => {
    if (!selected) return;

    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep((value) => value + 1);
      return;
    }

    const tally = answers.reduce((acc, value) => ({ ...acc, [value]: (acc[value] ?? 0) + 1 }), {});
    const winner = Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0];
    setResultId(winner ?? "nyx");
  };

  const result = SPECIES.find((entry) => entry.id === resultId);

  return (
    <ArchiveLayout>
      <section className="page-section legends-intro" data-testid="legends-page-intro">
        <SectionLabel number="01">THE LIVING COLLECTION</SectionLabel>
        <h1 data-testid="legends-title">
          THE STORIES
          <br />
          <em>WE KEPT.</em>
        </h1>
        <p>Every legend is a vessel. Read closely and something will look back.</p>
      </section>

      <section className="story-collection page-section" data-testid="story-collection">
        <div className="section-heading-row">
          <div>
            <SectionLabel number="02">FOUR PRESERVED ACCOUNTS</SectionLabel>
            <h2>
              READ THE
              <br />
              <em>REMAINS.</em>
            </h2>
          </div>
          <p>Open a story. The archive will keep your place.</p>
        </div>

        <div className="story-grid">
          {STORIES.map((story, index) => (
            <button
              key={story.id}
              type="button"
              className={`story-card story-card-${index + 1}`}
              onClick={() => setOpenStory(story)}
              data-testid={`story-card-${story.id}`}
            >
              <EditorialImage src={story.image} alt={`${story.title} cover`} />
              <div className="story-card-meta">
                <span>{story.category}</span>
                <ArrowUpRight size={17} />
              </div>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <span className="story-read">READ ACCOUNT</span>
            </button>
          ))}
        </div>
      </section>

      <section className="quiz-section page-section" data-testid="quiz-container">
        <div className="quiz-aside">
          <SectionLabel number="03">A PERSONAL RECORD</SectionLabel>
          <h2>
            WHICH
            <br />
            <em>UNICORN</em>
            <br />
            CALLS TO YOU?
          </h2>
          <p>There are no wrong answers. Only different ways of finding the light.</p>
        </div>

        {resultId && result ? (
          <div className="quiz-result" data-testid="quiz-result-card">
            <SectionLabel number="RESULT / 04">YOUR RECORD</SectionLabel>
            <h3>
              YOU ARE
              <br />
              <em>{result.name}</em>
            </h3>
            <span className="quiz-result-element">{result.element}</span>
            <p>{result.description}</p>

            <div className="quiz-result-specs">
              <span>
                TRAITS <strong>{result.traits}</strong>
              </span>
              <span>
                REALM <strong>{result.habitat}</strong>
              </span>
            </div>

            <EditorialButton
              to={`/species?species=${result.id}`}
              testId="quiz-result-explore-button"
            >
              EXPLORE YOUR UNICORN
            </EditorialButton>

            <button
              type="button"
              className="quiz-reset"
              onClick={() => {
                setResultId(null);
                setStep(0);
                setAnswers([]);
              }}
              data-testid="quiz-reset-button"
            >
              TAKE THE RECORD AGAIN
            </button>
          </div>
        ) : (
          <div className="quiz-card">
            <div className="quiz-progress">
              <span>0{step + 1}</span>
              <i>
                <b style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }} />
              </i>
              <span>0{QUIZ_QUESTIONS.length}</span>
            </div>

            <h3 data-testid="quiz-question">{question.question}</h3>

            <div className="quiz-options">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={selected === option.value ? "quiz-option is-selected" : "quiz-option"}
                  onClick={() => choose(option.value)}
                  data-testid={`quiz-option-button-${option.value}`}
                >
                  {option.label}
                  <span>{selected === option.value ? "SELECTED" : "CHOOSE"}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="quiz-submit"
              disabled={!selected}
              onClick={advance}
              data-testid="quiz-submit-button"
            >
              {step === QUIZ_QUESTIONS.length - 1 ? "REVEAL MY UNICORN" : "CONTINUE"}
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </section>

      {openStory && (
        <div
          className="story-reader-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${openStory.title} reader`}
          data-testid="story-reader-modal"
        >
          <div className="story-reader">
            <button
              type="button"
              className="reader-close"
              onClick={() => setOpenStory(null)}
              aria-label="Close story reader"
              data-testid="story-reader-close"
            >
              <X size={20} />
            </button>

            <div className="reader-image">
              <EditorialImage src={openStory.image} alt={`${openStory.title} artwork`} />
              <span>ARCHIVE ACCOUNT / {openStory.category}</span>
            </div>

            <article className="reader-copy">
              <SectionLabel>THE STORY WE KEPT</SectionLabel>
              <h2>{openStory.title}</h2>

              <div className="reader-progress">
                <span>READING</span>
                <i>
                  <b />
                </i>
                <span>100%</span>
              </div>

              {openStory.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <Link to="/species" onClick={() => setOpenStory(null)} className="text-link">
                CONTINUE INTO THE INDEX <ArrowUpRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      )}
    </ArchiveLayout>
  );
}
