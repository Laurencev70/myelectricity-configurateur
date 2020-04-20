import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var google: any;
let map: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;

  projectForm: FormGroup;
  submitted = false;
  

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private router: Router) { 
    this.initMap(parseInt(this.route.snapshot.paramMap.get('lat'), 0), parseInt(this.route.snapshot.paramMap.get('lng'), 0));
  }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projet: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  get f() { return this.projectForm.controls; }

  onSubmit() {
    console.log(this.projectForm);
    this.submitted = true;
    if  (this.projectForm.invalid) {
      return;
    } else {
      this.router.navigate(['../toit']);
    }
    
  }

  onReset() {
    this.submitted = false;
    this.projectForm.reset();
  }

  initMap(latitude: any, longitude: any) {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: latitude, lng: longitude },
        zoom: 15
      });
  
      infowindow = new google.maps.InfoWindow();
  
      marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: 'Click to zoom',
        icon: iconBase + 'blue-dot.png'
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

}
