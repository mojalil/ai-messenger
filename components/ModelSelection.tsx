"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = async () =>
  fetch("/api/getEngines").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading, error } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData:  "text-davinci-003" ,
  });

  console.log('models', models?.modelOptions)
  return (
    <div>
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        isSearchable
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}

        onChange={(e) => setModel(e.value)}
        // placeholder={isLoading ? "Loading..." : "Select a model"}
      />
    </div>
  );
};

export default ModelSelection;
