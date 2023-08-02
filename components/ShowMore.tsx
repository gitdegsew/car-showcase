"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@types";
import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";

import { CustomButton } from "@components";

import { CustomButton } from "@components";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    router.push(newPathname);
};


return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
        containerStyles="bg-primary-blue rounded-full text-white"
        />
        )}
    </div>
  );
};
export default ShowMore;
