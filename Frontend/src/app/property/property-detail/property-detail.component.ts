import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../model/property';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId!: number;
property = new Property();
galleryOptions!: NgxGalleryOptions[];
galleryImages!: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      data => {
        this.property = data['prp']; // resolver name defined in app.module
      }
    );

    this.property.age = this.housingService.getPropertyAge(this.property.estPossessionOn!);


    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data : any) => {
    //         this.property = data;
    //       }
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];
    this.galleryImages = [
      {
        small: '/images/prop-4.png',
        medium: '/images/prop-4.png',
        big: '/images/prop-4.png'
      },
      {
        small: '/images/prop-4.png',
        medium: '/images/prop-4.png',
        big: '/images/prop-4.png'
      },
      {
        small: '/images/prop-4.png',
        medium: '/images/prop-4.png',
        big: '/images/prop-4.png'
      },
      {
        small: '/images/prop-4.png',
        medium: '/images/prop-4.png',
        big: '/images/prop-4.png'
      },
      {
        small: '/images/prop-4.png',
        medium: '/images/prop-4.png',
        big: '/images/prop-4.png'
      }
    ];

  }
}





