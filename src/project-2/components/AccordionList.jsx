import AccordionItem from './AccordionItem';

import styles from './AccordionList.module.css';

function AccordionList() {
  const data = [
    {
      id: 1,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      content:
        'Inventore sequi quam voluptatum eligendi laborum autem dignissimos delectus consectetur ea quibusdam deleniti maxime veritatis ullam saepe accusantium aspernatur, animi nesciunt sunt? Quia laboriosam facere praesentium, sequi veritatis rem odit deleniti vel, aliquam earum libero itaque alias quos natus rerum tempore qui reprehenderit voluptas?',
    },
    {
      id: 2,
      title: 'Exercitationem animi facilis porro quaerat architecto',
      content:
        'Explicabo asperiores non molestias cum praesentium delectus corrupti ipsam. Omnis tempore voluptas doloribus ad, optio quis dolores quisquam, sapiente adipisci rem laboriosam iusto, corrupti libero neque dolore eaque consequuntur laudantium. Doloribus at aut alias perspiciatis eius nam error iusto qui animi magni perferendis eos dolores, placeat architecto in optio ipsa',
    },
    {
      id: 3,
      title: 'Odio atque quis officiis at reiciendis omnis',
      content:
        'Perspiciatis a qui quae alias molestiae quo asperiores maxime natus saepe? Eius illo, voluptate fugit voluptatem, in sit facilis libero quidem reprehenderit expedita provident praesentium ducimus tenetur ipsam eaque ullam! Debitis iure consectetur, ullam ad provident necessitatibus magnam quidem tenetur expedita. Nisi expedita velit doloribus similique eligendi officiis voluptas reprehenderit eveniet ducimus reiciendis numquam, ipsum accusamus minus voluptatem sequi. Velit molestiae facere harum nostrum ad non eum praesentium veritatis distinctio nesciunt',
    },
    {
      id: 4,
      title: 'Recusandae fugit placeat error beatae consequuntur',
      content:
        'Facere veniam consectetur distinctio incidunt laboriosam, reprehenderit recusandae enim minima modi, esse aspernatur impedit ad quis exercitationem veritatis fugit libero. Impedit doloribus ab illum porro omnis ea quibusdam error, eligendi laudantium repellat cupiditate nisi in recusandae corporis nesciunt dicta, reiciendis officiis tenetur, debitis ex ad iste eos velit!',
    },
    {
      id: 5,
      title: 'Impedit doloribus ab illum porro omnis ea quibusdam error',
      content:
        'Rerum assumenda beatae delectus iure asperiores recusandae id vero exercitationem ipsum, earum veniam sint dolore reiciendis, odio, voluptas architecto aliquam laboriosam. A cumque iure ipsum omnis quae, incidunt laborum est. Nostrum dolores quam sed velit sunt quaerat repellat quos nemo rem, cupiditate provident modi officiis. Ipsa eligendi asperiores labore consectetur? Incidunt cum, quas assumenda iure sint quis nam itaque totam?',
    },
  ];
  return (
    <ul className={styles['accordion-list']}>
      {data.map(accordion => (
        <AccordionItem key={accordion.id} accordion={accordion} />
      ))}
    </ul>
  );
}

export default AccordionList;
