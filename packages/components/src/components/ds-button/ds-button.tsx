import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

/**
 * @slot default - Button label content
 * @slot icon - Icon slot (optional)
 */
@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  /**
   * Button variant style
   */
  @Prop() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  /**
   * Button size
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Disabled state
   */
  @Prop() disabled: boolean = false;

  /**
   * Loading state
   */
  @Prop() loading: boolean = false;

  /**
   * Button type (for form submission)
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Emitted when button is clicked
   */
  @Event() dsClick: EventEmitter<void>;

  private handleClick = () => {
    if (!this.disabled && !this.loading) {
      this.dsClick.emit();
    }
  };

  render() {
    const classNames = {
      'button': true,
      [`button--${this.variant}`]: true,
      [`button--${this.size}`]: true,
      'button--disabled': this.disabled,
      'button--loading': this.loading,
    };

    return (
      <Host>
        <button
          class={classNames}
          disabled={this.disabled || this.loading}
          type={this.type}
          onClick={this.handleClick}
        >
          {this.loading && <span class="button__loader"></span>}
          <span class="button__content">
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
