import styled from 'styled-components';

export const CommentList = styled.div`
  position: relative;
  width: 100%;
  height: calc(40vw - 102px);
  ul {
    width: 100%;
    height: 100%;
    padding-bottom: 8px;
    list-style: none;
    overflow: auto;
  }

  li {
    display: flex;
    width: 100%;
    padding: 8px 16px;
  }

  .image {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #bdbdbd;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    &.is-default {
      background-size: 80% auto;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1595771754908' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2261' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M512 512c94.293333 0 170.666667-76.373333 170.666667-170.666667s-76.373333-170.666667-170.666667-170.666666-170.666667 76.373333-170.666667 170.666666 76.373333 170.666667 170.666667 170.666667z m0 85.333333c-113.92 0-341.333333 57.173333-341.333333 170.666667v85.333333h682.666666v-85.333333c0-113.493333-227.413333-170.666667-341.333333-170.666667z' fill='%23ffffff' p-id='2262'%3E%3C/path%3E%3C/svg%3E");
    }
  }

  .text {
    width: 100%;
    padding-left: 8px;
    font-size: 12px;
  }

  .user-name {
    width: 100%;
    display: flex;
    align-items: center;
    color: #888;
    font-weight: 500;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }

  .icon-official-account {
    margin-left: 6px;
    width: 8px;
    height: 8px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABW0lEQVQoU3WQP0vbURiFn3N/ERwFhZafgpN2MCmC36BTURTEPyDo0BaEgmOhSxB0LXTp0FJdOtRBUBEddPITuGgEoQ6FNppFCi6mxt4jiSbEQO/2vuc559x7Rcu55HnPX8UNIGDNpRyfNiOqDn8Y7LhWZc0oBT8DtT9AN8Ap6Ge7r+c6ObuqGX6Tm5K83tr2KNlMpBQ2a4YL5bYjHmsCDoEnQE99J9hPXXipYsh9wl5oTgvWNLg3ig+PWsQXnStb8n0akj+2xeRrF0c/YCgpUe6LIeSxZx6MlyqSW0Reul+4LDOecrJXnYpkXyOvgEIt0OR1QXYkit3GXe15qGxlyJRvSd5bzte1aI2oSPYNYrVhEJ8xk4YbiQOb2boWHF/pF/3dQW3fQC+qrf/5WoMOKr6dbQAlBkajtGnItJj+Jfb4U052au9oFs/DwLKtt5K2jBOZYcT3NBbe1bk7dbl7MJ/M3Y0AAAAASUVORK5CYII=');
    
  }

  .button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 120px;
    height: 24px;
    margin-left: -70px;
    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    transition: bottom 0.2s ease-in;
    &:hover {
      opacity: 1;
    }

    &.hidden {
      bottom: -32px;
    }
  }

  @media (max-width: 768px) {
    height: calc(100vh - 57vw);
    ul {
      padding-top: 48px;
      padding-bottom: 64px;
    }

    .button {
      bottom: 80px;
    }
  }
`;
