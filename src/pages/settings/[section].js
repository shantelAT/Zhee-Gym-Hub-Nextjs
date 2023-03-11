import React from "react";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import SettingsSection from "@/components/SettingsSection";
import { requireAuth } from "@/pages/util/auth";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Settings" />
      <SettingsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

// Tell Next.js to export static files for each page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { section: "general" } },
    { params: { section: "password" } },
    { params: { section: "billing" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default requireAuth(SettingsPage);