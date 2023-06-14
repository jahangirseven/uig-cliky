import thumb_01 from './../public/images/blog/postblock_images/pb_thumb_01.png'
import thumb_02 from './../public/images/blog/postblock_images/pb_thumb_02.png'
import thumb_03 from './../public/images/blog/postblock_images/pb_thumb_03.png'
import thumb_04 from './../public/images/blog/postblock_images/pb_thumb_04.png'
import thumb_05 from './../public/images/blog/postblock_images/pb_thumb_05.png'
import thumb_06 from './../public/images/blog/postblock_images/pb_thumb_06.png'

import author_01 from './../public/images/blog/post_authors/author_01.jpg'
import author_02 from './../public/images/blog/post_authors/author_02.jpg'
import author_03 from './../public/images/blog/post_authors/author_03.jpg'

interface Post {
  id: number;
  thumbnail: string;
  title: string;
  content: string;
  categoryList: string[];
  postMeta: {
    author: {
      thumbnail: string;
      name: string;
    };
    publishDate: string;
  };
}


 export const postList:Post[] = [
    {
      id : 1 , 
      thumbnail :thumb_01.src,
      title : '5 Ways to Reduce Workload',
      content : 'Discover effective strategies to reduce workload and boost productivity with our task management tool.',
      categoryList : ['Tech' , 'SaaS', 'React'],
      postMeta : {
        author : {
            thumbnail : author_01.src , 
            name : 'Jahangir Seven'
        } , 
        publishDate : 'Jan 17, 2022'
    }
    },
    {
      id : 2 , 
      thumbnail : thumb_02.src,
      title : 'Efficient Task Assignment',
      content : 'Maximize team productivity with proven task assignment techniques using our task management SaaS solution.',
      categoryList : ['AI' , 'Development', 'Startup'],
      postMeta : {
        author : {
            thumbnail : author_02.src , 
            name : 'Ilahe Kazimova'
        } , 
        publishDate : 'March 6, 2023'
    }
    },
    {
      id : 3 , 
      thumbnail : thumb_03.src,
      title : 'Boost Project Success',
      content : 'Achieve project success by implementing robust task management practices with our powerful tool.',
      categoryList : ['Technology' , 'Development', 'Business'],
      postMeta : {
        author : {
            thumbnail : author_03.src , 
            name : 'Mustafa Mustafayev'
        } , 
        publishDate : 'May 11, 2023'
    }
    },
    {
      id : 4 , 
      thumbnail : thumb_04.src,
      title : 'Mastering Task Assignment',
      content : 'Explore effective techniques and tools for seamless task delegation.',
      categoryList : ['Scrum' , 'Automatin', 'Business'],
      postMeta : {
        author : {
            thumbnail : author_02.src , 
            name : 'Mustafa Mustafayev'
        } , 
        publishDate : 'March 3, 2023'
    }
    },
    {
      id : 5 , 
      thumbnail : thumb_05.src,
      title : 'Streamline Your Workload ',
      content : 'Take control of your workload and accomplish more with smart task management strategies.',
      categoryList : ['Agile' , 'Tasks', 'Automation'],
      postMeta : {
        author : {
            thumbnail : author_01.src , 
            name : 'Elcan Kazimov'
        } , 
        publishDate : 'Feb 22, 2023'
    }
    },
    {
      id : 6 , 
      thumbnail : thumb_06.src,
      title : 'Lighten Your Workload',
      content : 'Learn how small changes in task management can make a big impact on your productivity.',
      categoryList : ['Tech' , 'Development', 'Mastering'],
      postMeta : {
        author : {
            thumbnail : author_03.src , 
            name : 'Jahangir Seven'
        } , 
        publishDate : 'Feb 2, 2023'
    }
    },
  ]
  