import { Sender } from "../types/chat";

export const DUMMY_CHAT = {
  id: "1",
  title: "Chat with AI",
  userId: "1",
  messages: [
    {
      sender: Sender.User,
      content: "Hi CELECARE AI",
    },
    {
      sender: Sender.Model,
      content: "Hello! How can I help you today?",
    },
    {
      sender: Sender.User,
      content: "I want to know about spiderman",
    },
    {
      sender: Sender.Model,
      content: `Spider-Man, the web-slinger, is a beloved superhero created by Stan Lee and Steve Ditko, first appearing in Amazing Fantasy #15 in 1962.  He's a true icon of popular culture!\n\nHere's a glimpse into his world:\n\n**Who is Spider-Man?**\n\n* **Real Name:** Peter Parker\n* **Origin:**  A nerdy teenager bitten by a radioactive spider, gaining superhuman abilities. \n* **Powers:**  Superhuman strength, speed, agility, and the ability to cling to surfaces. He also has a \"spider-sense\" that warns him of danger.  His most famous power, though, is shooting webs from his wrists.\n* **Allies:** His best friend Harry Osborn, his girlfriend Mary Jane Watson, his Aunt May, and other superheroes like Daredevil and the Fantastic Four. \n* **Enemies:** The Green Goblin, Doctor Octopus, Venom, and many other villains! \n\n**What makes Spider-Man so special?**\n\n* **Relatable:** Peter Parker is a teenager struggling with school, relationships, and the responsibility of being a superhero. He faces real-world problems and makes mistakes, making him relatable to readers and viewers.\n* **Moral Compass:** He's constantly battling the \"with great power comes great responsibility\" principle, showing his struggle between personal gain and doing what's right.\n* **Humor:** Spider-Man is known for his witty banter and quick humor, adding a lighthearted touch to his adventures.\n* **Amazing Adventures:** He has faced a wide variety of villains and been involved in epic storylines, making for exciting and engaging stories.\n\n**Spider-Man has had a huge impact on pop culture:**\n\n* **Multiple Comic Book Series:**  There have been countless comics featuring Spider-Man, with different writers and artists exploring his adventures.\n* **Animated Series:** He's starred in numerous animated shows, from the classic 1990s series to the more recent Ultimate Spider-Man.\n* **Live-Action Films:**  There have been several Spider-Man movies, starring Tobey Maguire, Andrew Garfield, and Tom Holland, each with their own unique take on the character.\n\n**Want to learn more?**\n\n* **Check out some of the classic Spider-Man comics.**\n* **Watch one of the Spider-Man films.**\n* **Explore the many different versions of Spider-Man in the Marvel Universe.** \n`,
    },
  ],
};
