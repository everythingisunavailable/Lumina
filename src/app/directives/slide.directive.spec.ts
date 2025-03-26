import { ElementRef } from '@angular/core';
import { SlideDirective } from './slide.directive';

describe('SlideDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div')); // Provide a mock element
    const directive = new SlideDirective(mockElementRef); // Pass it to the constructor
    expect(directive).toBeTruthy();
  });
});
