import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-read-more',
  standalone: true,
  imports: [],
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { // Check if id is not null
        this.dataService.getBlogById(id).subscribe(data => {
            this.blog = data;
        });
    } else {
        console.error('Blog ID is null');
    }
}
}