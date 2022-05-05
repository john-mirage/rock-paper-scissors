import './main.css';

import rockIcon from '@images/icon-rock.svg';
import paperIcon from '@images/icon-paper.svg';
import scissorsIcon from '@images/icon-scissors.svg';

interface Choice {
  label: string;
  icon: string;
  win: string;
}

const buttonGroup = document.getElementById("button-group") as HTMLDivElement;
const buttonTemplate = document.getElementById("button-template") as HTMLTemplateElement;

const choices: Choice[] = [
  {
    label: "rock",
    icon: rockIcon,
    win: "scissors",
  },
  {
    label: "paper",
    icon: paperIcon,
    win: "rock",
  },
  {
    label: "scissors",
    icon: scissorsIcon,
    win: "paper",
  }
];

choices.forEach((choice) => {
  const buttonFragment = buttonTemplate.content.cloneNode(true) as HTMLElement;
  const button = buttonFragment.querySelector(".button");
  const icon = buttonFragment.querySelector(".button__icon");
  button.classList.add(`button--${choice.label}`);
  icon.setAttribute("src", choice.icon);
  icon.setAttribute("alt", choice.label);
  buttonGroup.appendChild(document.createComment(choice.label));
  buttonGroup.appendChild(buttonFragment);
});