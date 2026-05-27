import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findEntry } from "@/lib/rsvpStore";
import PublicProfile from "./PublicProfile";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const entry = await findEntry(id);

  if (!entry) {
    return {
      title: "Չգտնվեց 🇦🇲 · Մայիսի 28",
      description: "Այս հայրենասերը դեռ չի գրանցվել",
    };
  }

  const fullName = `${entry.firstName} ${entry.lastName}`;
  const title = `${fullName} — ՀԱՍՏԱՏՎԱԾ ՀԱՅՐԵՆԱՍԵՐ 🇦🇲`;
  const description = `${entry.nickname} · ${entry.title} · Հայրենասիրության գնահատական ${entry.patriotismScore}%։ Մայիսի 28-ին գալիս ա։ Իսկ դու՞`;
  const images = entry.selfieUrl ? [{ url: entry.selfieUrl, alt: fullName }] : [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images,
    },
    twitter: {
      card: images.length ? "summary_large_image" : "summary",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}

export default async function PublicProfilePage({ params }: { params: Params }) {
  const { id } = await params;
  const entry = await findEntry(id);
  if (!entry) notFound();
  return <PublicProfile entry={entry} />;
}
