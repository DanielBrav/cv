import React from 'react';
import './Content.css';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentWrapper">
        <div className="contentInner">
          <div className="spacer">
          </div>
          <div className="anotherWrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut urna posuere, volutpat massa at, mattis tellus. Curabitur consequat maximus lectus. In dictum ex eget velit venenatis, sit amet bibendum nisl sollicitudin. Proin facilisis molestie turpis sit amet lacinia. Quisque dictum in justo ut auctor. Mauris condimentum viverra hendrerit. Suspendisse posuere vestibulum odio. Nam tincidunt metus id suscipit gravida. Phasellus lacinia elit libero, id varius odio gravida vel.
            Sed tristique, purus at ultricies vehicula, leo est egestas sem, sit amet malesuada diam neque vitae dui. Maecenas gravida sit amet libero sed aliquet. Nullam placerat diam at lacus vehicula, vel efficitur dolor molestie. Cras imperdiet magna elit, vel bibendum mi hendrerit eu. Proin posuere nibh eu dolor venenatis blandit. Curabitur eget ipsum in sem tempus scelerisque ac ac metus. Phasellus a quam mauris. Cras gravida elit quis ultrices blandit. Mauris cursus vitae nisl placerat volutpat. Integer vel dictum sapien. Vivamus eu ligula nec augue placerat tempus at eget quam. Suspendisse potenti. Quisque congue pulvinar massa, vulputate porttitor leo interdum sit amet. Ut vitae cursus lacus, imperdiet bibendum nulla.</p>
          </div>
          <div className="spacer">
          </div>
        </div>
      </div>
    )
  }
}
