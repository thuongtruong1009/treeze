<script setup lang="ts">
import { computed } from "vue";
import * as trees from "../data.json";
import { getNodeId } from "../helpers/node";
import Card from "./Card.vue";
</script>

<template>
  <div class="tree">
    <ul>
      <li v-for="(tree, index) in trees" :key="index">
        <div class="node">Root</div>
        <ul>
          <li v-for="node in tree" :key="getNodeId(node?.name)">
            <ul>
              <li>
                <Card :node="node" />
                <ul>
                  <li
                    v-for="items in node?.childrens"
                    :key="getNodeId(items?.name)"
                  >
                    <Card :node="items" />
                    <ul>
                      <li
                        v-for="ele in items?.childrens"
                        :key="getNodeId(ele.name)"
                      >
                        <Card :node="ele" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
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
    }
  }
}
</style>
