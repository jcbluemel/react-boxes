import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Box list: manages boxes in the list
 *
 * State:
 * - boxes: array like [ { backgroundColor, height, width }, ... ]
 *
 * App -> BoxList -> Box / NewBoxForm
 */