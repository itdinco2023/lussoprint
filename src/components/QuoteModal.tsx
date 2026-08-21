"use client";

import { useActionState, useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import { useQuoteModalOpen, closeQuoteModal } from "@/lib/quoteModal";
import { submitQuoteRequest, type QuoteFormState } from "@/app/quote/actions";
import styles from "./QuoteModal.module.css";

const categoryKeys = [
  "banners",
  "decals",
  "rollup",
  "lightbox",
  "stickers",
  "textiles",
  "digitalPrint",
  "other",
] as const;

export default function QuoteModal() {
  const open = useQuoteModalOpen();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeQuoteModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return <QuoteModalContent />;
}

const initialState: QuoteFormState = { status: "idle", message: "" };

function QuoteModalContent() {
  const lang = useLanguage();
  const t = translations[lang].quoteForm;
  const [state, formAction, pending] = useActionState(submitQuoteRequest, initialState);
  const [fileReady, setFileReady] = useState<"yes" | "no" | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className={styles.overlay} onClick={() => closeQuoteModal()}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.closeButton} onClick={() => closeQuoteModal()} aria-label={t.close}>
          ✕
        </button>
        <h2 className={styles.title}>{t.title}</h2>

        {state.status === "success" ? (
          <p className={styles.success}>{state.message}</p>
        ) : (
          <form action={formAction} className={styles.form}>
            <input type="hidden" name="lang" value={lang} />

            <div className={styles.field}>
              <span className={styles.label}>{t.categoryLabel}</span>
              <div className={styles.chips}>
                {categoryKeys.map((key) => (
                  <label key={key} className={styles.chip}>
                    <input type="checkbox" name="category" value={key} />
                    <span>{t.categories[key]}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="size">{t.sizeLabel}</label>
                <input id="size" name="size" type="text" />
              </div>
              <div className={styles.field}>
                <label htmlFor="quantity">{t.quantityLabel}</label>
                <input id="quantity" name="quantity" type="text" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="deadline">{t.deadlineLabel}</label>
              <input id="deadline" name="deadline" type="text" />
            </div>

            <div className={styles.field}>
              <span className={styles.label}>{t.fileReadyLabel}</span>
              <div className={styles.chips}>
                <label className={styles.chip}>
                  <input
                    type="radio"
                    name="fileReady"
                    value="yes"
                    checked={fileReady === "yes"}
                    onChange={() => setFileReady("yes")}
                  />
                  <span>{t.yes}</span>
                </label>
                <label className={styles.chip}>
                  <input
                    type="radio"
                    name="fileReady"
                    value="no"
                    checked={fileReady === "no"}
                    onChange={() => setFileReady("no")}
                  />
                  <span>{t.no}</span>
                </label>
              </div>
            </div>

            {fileReady === "yes" && (
              <div className={styles.field}>
                <label htmlFor="file" className={styles.uploadLabel}>
                  <span aria-hidden>📎</span> {t.uploadLabel}
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className={styles.uploadInput}
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
                />
                <span className={styles.uploadHint}>{fileName ?? t.uploadHint}</span>
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="name">{t.nameLabel}</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">{t.phoneLabel}</label>
                <input id="phone" name="phone" type="tel" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">{t.emailLabel}</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <button type="submit" className={styles.submit} disabled={pending}>
              {pending ? t.submitPending : t.submitLabel}
            </button>

            {state.status === "error" && <p className={styles.error}>{state.message}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
