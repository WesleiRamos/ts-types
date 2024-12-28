import { ValidateCPF } from "../validar-cpf";
import { Every, Uniques } from "../utils/index";

type Valid = Every<
  Uniques<
    [
      ValidateCPF<"137.686.636-63">,
      ValidateCPF<"831.173.830-00">,
      ValidateCPF<"650095.963-93">,
      ValidateCPF<"931.779.853-59">,
      ValidateCPF<"063.251.127-33">,
      ValidateCPF<"035.397.803-51">,
      ValidateCPF<"137.686636-63">,
      ValidateCPF<"831.173.830-00">,
      ValidateCPF<"137.686.636-63">,
      ValidateCPF<"831.173.830-00">,
      ValidateCPF<"763.818.422-02">,
      ValidateCPF<"70073091006">,
      ValidateCPF<"092.766.660-01">,
      ValidateCPF<"125.828.106-65">,
      ValidateCPF<"603.806.430-30">,
      ValidateCPF<"642.600.660-21">,
      ValidateCPF<"433.787.588-30">,
      ValidateCPF<"10748142070">,
      ValidateCPF<"977.132.560-40">,
      ValidateCPF<"855.178.021-25">,
      ValidateCPF<"117.227.280-86">,
      ValidateCPF<"671.174.020-32">,
    ]
  >,
  true
>;

type Invalid = Every<
  Uniques<
    [
      ValidateCPF<"000.000.000-00">,
      ValidateCPF<"111.111.111-11">,
      ValidateCPF<"222.222.222-22">,
      ValidateCPF<"33333333333">,
      ValidateCPF<"444.444.444-44">,
      ValidateCPF<"55555555555">,
      ValidateCPF<"666666.666-66">,
      ValidateCPF<"777777.777-77">,
      ValidateCPF<"888.888.888-88">,
      ValidateCPF<"999.999.999-99">,
      ValidateCPF<"123.456.789-012">,
      ValidateCPF<"064.875.987-10">,
      ValidateCPF<"364.848.987-89">,
      ValidateCPF<"064.875.987-10">,
      ValidateCPF<"364.848.987-89">,
      ValidateCPF<"137.686.636-6">,
      ValidateCPF<"137.686636-631">,
      ValidateCPF<"abc.def.ghi-jk">,
      ValidateCPF<"a064875987-10">,
      ValidateCPF<"03r5397803-51">,
      ValidateCPF<"a06487598710">,
      ValidateCPF<"0&.*00.00a-00">,
      ValidateCPF<"00?.*00.01a-89">,
      ValidateCPF<"?.**-%^(%(">,
    ]
  >,
  false
>;
