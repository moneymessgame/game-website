import React from 'react'
import type { Metadata } from "next";

import { Navbar } from '@/components';
import Footer from '@/components/navigation/footer';

export const metadata: Metadata = {
  title: {
    default: "MoneyMess",
		template: "%s - Telegram P2E Game",
  },
	description: "P2E Game based on Ton & Telegram",
  twitter: {
    card: "summary_large_image",
  },
};

interface Props {
    children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar  />
                {children}
            <Footer />
        </div>
    )
};

export default AboutLayout