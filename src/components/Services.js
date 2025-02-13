import React from "react";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-center">
        <article className="services-header">
          <h3>Exceptional Service Offerings</h3>
          <p>Experience unparalleled convenience with our service package.</p>
        </article>
        <div className="services-list">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
