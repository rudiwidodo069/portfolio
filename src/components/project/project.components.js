import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';

const project = [
    {
        id: 1,
        title: 'project - 01',
        link: 'https://github.com/rudiwidodo069/new-sistem-akademik',
        target: '_blank',
        project: project1,
        caption: `project - 01 : SISTEM AKADEMIK merupakan sebuah web apps  untuk melihat informasi yang di butuhkan mahasiswa, web apps ini di bangun dengan teknologi bhasa pemrograman php versi 7+ dengan mengunakan framework codeigniter versi 3 dengan tambahan teknologi data table untuk memper mudah penegelolaan table pada web apps tersebut.`,
        note: `sebagai tambahan : project ini masih dalam tahap pengembahan jadi belum sepenuhnya selesai.`
    },
    {
        id: 2,
        title: 'project - 02',
        project: project2,
        link: 'https://github.com/rudiwidodo069/new-management-perusahaan',
        target: '_blank',
        caption: `project - 02 : SISTEM MANAJEMEN PERUSAHAAN merupakan sebuah web apps yang di bangun dengan teknologi bhasa pemrograman php versi 7+ dengan mengunakan framework codeigniter versi 3 dengan tambahan teknologi data table untuk memper mudah penegelolaan table pada web apps tersebut.`,
        note: `sebagai tambahan : project ini masih dalam tahap pengembahan jadi belum sepenuhnya selesai.`
    },
    {
        id: 3,
        title: 'project - 03',
        project: project3,
        link: 'https://next-js-coutries-api-4sp8yqrlr.vercel.app/',
        target: '_blank',
        caption: `project - 02 : NEXT-JS CONTRIES API, website ini di bangun dengan teknologi framework dari next-js, dan dengan memanfaatkan sebuah public api dari contries api. yang bertujuan untuk memudahkan pengunjung website dalam mencari informasi terkait dengan sebuah ngara tersebut.`,
        note: ``
    },
    {
        id: 4,
        title: 'project - 04',
        project: project4,
        link: 'https://next-project-omdb-api.vercel.app/',
        target: '_blank',
        caption: `project - 02 : NEXT-JS OMDB API, website ini di bangun dengan teknologi framework dari next-js, dan dengan memanfaatkan sebuah public api dari omdb api. yang bertujuan untuk memudahkan pengunjung website dalam mencari informasi terkait dengan sebuah film tersebut.`,
        note: ``
    }
];

export default project;