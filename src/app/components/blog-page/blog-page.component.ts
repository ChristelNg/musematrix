import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Blog {
  id: string;
  title: string;
  content: string;
  img: string;
  postedBy: string;
  tags: string[];
  visibility: string;
  date: string;
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  blogs: Blog[] = [
    {
      id: '1',
      title: 'test1',
      content: 'This is the content for test1.',
      img: 'image1.jpg',
      postedBy: 'Christel Ng',
      tags: ['tag1', 'tag2'],
      visibility: 'public',
      date: 'August 2024'
    },
    {
      id: '2', 
      title: 'test2',
      content: 'This is the content for test2.',
      img: 'image2.jpg',
      postedBy: 'Christel Ng',
      tags: ['tag3', 'tag4'],
      visibility: 'private',
      date: 'August 2024'
    },
    {
      id: '3',
      title: 'test3',
      content: 'This is the content for test3.',
      img: 'image3.jpg',
      postedBy: 'Christel Ng',
      tags: ['tag5', 'tag6'],
      visibility: 'public',
      date: 'August 2024'
    }
  ];

  recentBlogs: Blog[] = [
    {
      id: '4',
      title: 'Recent Post 1',
      content: 'This is the content for recent post 1.',
      img: 'recent1.jpg',
      postedBy: 'Christel Ng',
      tags: ['recent', 'update'],
      visibility: 'public',
      date: 'August 2024'
    },
    {
      id: '5',
      title: 'Recent Post 2',
      content: 'This is the content for recent post 2.',
      img: 'recent2.jpg',
      postedBy: 'Christel Ng',
      tags: ['news', 'update'],
      visibility: 'public',
      date: 'August 2024'
    }
  ];
}