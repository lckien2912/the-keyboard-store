"use client";

import { useState, Fragment } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

import { Color, Case, Plate } from "@/types";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  cases: Case[];
  plates: Plate[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  cases,
  plates,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          open={open}
          as="div"
          onClose={onClose}
          className="relative z-40 lg:hidden"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -right-[250px]"
              enterTo="opacity-100 right-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-end px-4">
                  <IconButton
                    icon={<X size={15} onClick={onClose} />}
                    className="hover:bg-red-500 hover:text-white"
                  />
                </div>
                <div className="p-4">
                  <Filter valueKey="caseId" name="Cases" data={cases} />
                  <Filter valueKey="plateId" name="Plates" data={plates} />
                  <Filter valueKey="colorId" name="Colors" data={colors} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileFilters;
