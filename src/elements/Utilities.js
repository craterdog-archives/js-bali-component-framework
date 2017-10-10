/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/*
 * This utility function converts a Bali unit based index into a JavaScript
 * zero based index, preserving negative indexing:
 * positive indexing:       1          2         3             4              5
 * $platonicSolids := [$tetrahedron, $cube, $octahedron, $dodecahedron, $icosahedron]
 * negative indexing:      -5         -4        -3            -2             -1
 */
function convertIndex(index) {
    return index < 0 ? index : index - 1;
}

