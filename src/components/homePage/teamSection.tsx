import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFd4DwGD9a1Ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718313217699?e=1736985600&v=beta&t=Xn20_iUMXwMFg8wLWaa7ZIuVgpKMwXTS-ELHyN3--Q4',
    name: 'Karan Palan',
    position: 'Software engineer',
    description:
      'add desc',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/karan-palan-476472289/',
      },
      {
        name: 'Github',
        url: 'https://www.linkedin.com/in/krish-gupta-51637b1b8/',
      },
      {
        name: 'Twitter',
        url: 'https://www.linkedin.com/in/shravani-wagh-20a69728a/',
      },
    ],
  },
  {
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQG9vT7EMYm2wg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706681242772?e=1736985600&v=beta&t=rmcOXXu5cUXKMfwUA-eqAiEhPej0rGA8HLGj4uz-fpw',
    name: 'Krish Gupta',
    position: 'Software engineer',
    description:
      'add desc',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sahil-quraishi-b40287264/',
      },
      {
        name: 'Github',
        url: 'https://github.com/sahilq312',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sahilq312/?hl=en',
      },
    ],
  },
  {
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQF8-Wm4sfEJeA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715997732752?e=1736985600&v=beta&t=3qkPL4PzjIh3qlU6SIpUCmXkRtpYYNLxnxYXxM5958E',
    name: 'Shravani Wagh',
    position: 'Software engineer',
    description:
      'add desc',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/abhinavmalviya58/',
      },
      {
        name: 'Twitter',
        url: 'https://x.com/AbhinavMalviy58',
      },
      {
        name: 'Github',
        url: 'https://github.com/AbhinavMalviya58',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/abhinavmalviya58/?hl=en',
      },
    ],
  }
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      case 'Facebook':
        return <Facebook size='20' />;

      case 'Instagram':
        return <Instagram size='20' />;

      case 'Twitter':
        return <Twitter size='20' />;

      case 'Github':
        return < Github size='20' />
    }
  };

  return (
    <section id='team' className='container py-24 sm:py-32 p-3'>
      <h2 className='text-3xl md:text-4xl font-bold'>
         Team 
        <span className=' text-app-primary bg-clip-text'>   CELECARE </span>
      </h2>

      <p className='mt-4 mb-10 text-xl text-muted-foreground'>
        We are a team of innovators and health enthusiasts committed to creating
        smarter, healthier lifestyles for everyone. With a diverse background in
        tech and wellness, we strive to deliver personalized solutions that fit
        your unique needs.
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            description,
            socialNetworks,
          }: TeamProps) => (
            <Card
              key={name}
              className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'
            >
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                />
                <CardTitle className='text-center'>{name}</CardTitle>
                <CardDescription className='text-primary'>
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className='text-center pb-2'>
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel='noreferrer noopener'
                      href={url}
                      target='_blank'
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className='sr-only'>{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
