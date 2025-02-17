import { Chapter, Script } from "../types/script";

const title = "초콜릿과 마작과 펭귄";

const texts: Script = [
  { text: '"…있잖아, 마작 퍼즐 하나 풀어볼래…?"' },
  {
    text: '"…있잖아, 마작 퍼즐 하나 풀어볼래…?"',
    options: [
      { text: "좋아", goto: "yes" },
      { text: "싫어", goto: "no" },
    ],
  },
  {
    key: "no",
    text: '"…알았어."',
    image: "bom_7.jpg",
    goto: "end",
  },
  { key: "yes", text: '"…임의의 역 A와 B와 C가 있다고 생각해 볼게."' },
  {
    text: '"…이 때 A와 B는 중첩 가능하고…, B와 C도, C와 A도 중첩 가능해."',
  },
  {
    text: '"…하지만 A와 B와 C가 전부 중첩될 수는 없어."',
  },
  {
    text: '"…이런 관계에 있는 역 3개를 찾을 수 있을까…?"',
  },
  {
    text: "….",
  },
  {
    text: "…….",
  },
  {
    text: '"…생각해봤어?"',
  },
  {
    key: "think",
    text: '"…생각해봤어?"',
    options: [
      { text: "응", goto: "think_yes" },
      { text: "아니", goto: "think_no" },
    ],
  },
  { key: "think_no", text: '"…좀 더 생각해 봐."', goto: "think" },
  {
    key: "think_yes",
    text: '"…다음 버튼을 누르면 가장 간단한 답을 하나 알려줄게."',
  },
  {
    text: '"…바로 백, 발 중이야."',
  },
  {
    text: '"…백과 발도 중첩 가능하고 발과 중도, 중과 백도 중첩 가능해…."',
  },
  {
    text: '"…하지만 백발중이 전부 겹치면 대삼원이 되어버리니까…, 더 이상 백발중이 아니게 되어버려."',
  },
  {
    text: "….",
  },
  {
    text: "…….",
  },
  {
    text: '"…말장난 같다고? …그치만 이게 마작인걸…."',
  },
  {
    text: "….",
  },
  {
    text: "…….",
  },
  {
    text: "…….",
    options: [
      {
        text: "제대로 된 문제는 없어?",
        goto: "hard_problem",
      },
    ],
  },
  {
    key: "hard_problem",
    text: '"…그러면 좀 더 어려운 문제. …역만이 되어서 역이 사라지는 경우 말고는 뭐가 있는지 알아…?"',
  },
  {
    text: '"…충분히 생각해 봤으면 다음 버튼을 눌러줘."',
  },
  {
    text: '"…답을 찾았으려나…?"',
  },
  {
    text: '"…답을 찾았으려나…?"',
    options: [
      {
        text: "당연하지",
        goto: "hard_answer",
      },
      {
        text: "…아니",
        goto: "hard_answer",
      },
    ],
  },
  {
    key: "hard_answer",
    text: '"…여러 가지가 있는데 역시 가장 생각하기 쉬운 건 더블리치, 일발과 해저로월 또는 하저로월일 거 같네…."',
  },
  {
    text: '"…이거 말고도 일기통관 역패 역패라든가, 삼색동순 역패 역패 같은 경우도 있고…,"',
  },
  {
    text: '"…외에도 정말 많은 답이 있는데, 한 번 스스로 찾아보는 것도 재밌을거야."',
  },
  {
    text: '"…아, 내가 생각하기에 가장 어려운 답이 하나 있는데…"',
  },
  {
    text: '"…맞춰볼래?"',
  },
  {
    text: "….",
  },
  {
    text: "…….",
  },
  {
    text: '"…꽤 재밌는 답이라고 생각하니까, 충분히 고민해보고 다음 버튼을 눌러줘…."',
  },
  {
    text: '"…바로 청일색 치또이 탕아오."',
  },
  {
    text: '"…바로 청일색 치또이 탕아오."',
    options: [
      {
        text: "이건 쉽지",
        goto: "hard-hard-easy",
      },
      {
        text: "왜?",
        goto: "hard-hard-why",
      },
    ],
  },
  {
    key: "hard-hard-easy",
    text: '"…대단하네."',
  },
  {
    key: "hard-hard-why",
    text: '"…청일색 탕아오면서 치또이려면 2345678을 전부 써야 하잖아?"',
  },
  {
    text: '"…그러면 량페커가 되니까…, 치또이가 될 수는 없어…."',
  },
  {
    text: '"…이것도 말장난 같다고…?"',
  },
  {
    text: '"…원래 마작이 그런 거야."',
    goto: "end",
  },
];

const date = "2월 16일";

const default_video = "bom_default.mp4";

const default_image = "bom_default.jpg";

const images = ["bom_default.jpg", "bom_7.jpg"];

export const threeCombination: Chapter = {
  title,
  texts,
  date,
  default_video,
  default_image,
  images,
};
