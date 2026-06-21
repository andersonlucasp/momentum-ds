import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from './ds-button';

describe('ds-button', () => {
  it('renders a button', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button>Click me</ds-button>`,
    });

    const button = page.root.querySelector('button');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders with primary variant by default', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button></ds-button>`,
    });

    const button = page.root.querySelector('button');
    expect(button).toHaveClass('button--primary');
  });

  it('renders with secondary variant', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button variant="secondary"></ds-button>`,
    });

    const button = page.root.querySelector('button');
    expect(button).toHaveClass('button--secondary');
  });

  it('disables button when disabled prop is set', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button disabled></ds-button>`,
    });

    const button = page.root.querySelector('button');
    expect(button).toBeDisabled();
  });

  it('emits click event when clicked', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button></ds-button>`,
    });

    const button = page.root.querySelector('button');
    const spy = jest.fn();

    page.root.addEventListener('dsClick', spy);
    button.click();

    expect(spy).toHaveBeenCalled();
  });
});
