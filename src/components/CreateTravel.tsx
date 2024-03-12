import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { travelState } from "../atoms";

interface IForm {
  travel: string;
}

export default function CreateTravel() {
  const setTravels = useSetRecoilState(travelState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ travel }: IForm) => {
    setTravels((oldTravels) => [
      { text: travel, id: Date.now(), category: "go" },
      ...oldTravels,
    ]);
    setValue("travel", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("travel", {
          required: "😠 required!",
        })}
        placeholder="이름"
        type="text"
      />
      <h4>{errors?.travel?.message}</h4>
      <button>가자</button>
    </form>
  );
}
