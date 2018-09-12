import React, { Component } from "react";

export default class ContactInfo extends Component {
  render() {
    return (
      <section>
        <div class="contactinfo">
          <a class="contactinfo__single" target="_blank">
            <i class="ion-ios-location-outline contactinfo__icon" />
            <span class="contactinfo__title">Mexico City</span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-ios-email-outline contactinfo__icon" />
            <span class="contactinfo__title">almalevisol@gmail.com</span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-social-github-outline contactinfo__icon" />
            <span class="contactinfo__title">ALMALEVISOL</span>
          </a>
          <a href="#" class="contactinfo__single" target="_blank">
            <i class="ion-social-linkedin-outline contactinfo__icon" />
            <span class="contactinfo__title">Alejandro Del Moral</span>
          </a>
        </div>
      </section>
    );
  }
}
