<template>
  <div class="tree">
    <ul>
      <li>
        <a href="">Root Item</a>
        <ul>
          <li>
            <a href="">Item</a>
            <ul>
              <li><a href="">Item</a></li>
              <li><a href="">Item</a></li>
            </ul>
          </li>
          <li>
            <a href="">Item</a>
            <ul>
              <li>
                <a href="">Item</a>
                <ul>
                  <li>
                    <a href="">Item</a>
                    <ul>
                      <li><a href="">Item</a></li>
                      <li><a href="">Item</a></li>
                      <li>
                        <a href="">Item</a>
                        <ul>
                          <li><a href="">Item</a></li>
                          <li><a href="">Item</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Item</a>
                <ul>
                  <li><a href="">Item</a></li>
                  <li>
                    <a href="">Item</a>
                    <ul>
                      <li><a href="">Item</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Item</a>
            <ul>
              <li><a href="">Item</a></li>
              <li><a href="">Item</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

$border: 1px solid #ccc;

.tree {
  a[href=""] {
    cursor: default;
  }

  ul {
    position: relative;
    padding: 1em 0;
    white-space: nowrap;
    margin: 0 auto;
    text-align: center;

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    & ul:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      border-left: $border;
      width: 0;
      height: 1em;
    }

    li {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      list-style-type: none;
      position: relative;
      padding: 1em 0.5em 0;
      margin-left: -0.25em;
      margin-right: -0.25em;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 50%;
        border-top: $border;
        // border-bottom: $border;
        width: 50%;
        height: 1em;
      }

      &:after {
        right: auto;
        left: 50%;
        border-left: $border;
      }

      &:only-child:after,
      &:only-child:before {
        display: none;
      }

      &:only-child {
        padding-top: 0;
      }

      &:first-child:before,
      &:last-child:after {
        border: 0 none;
      }

      &:last-child:before {
        border-right: $border;
        border-radius: 0 1em 0 0;
      }

      &:first-child:after {
        border-radius: 1em 0 0 0;
      }

      a {
        border: $border;
        padding: 0.75em;
        text-decoration: none;
        display: inline-block;
        border-radius: 1em;
        color: #333;
        position: relative;
      }
    }
  }
}
</style>
